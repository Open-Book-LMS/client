<template>
  <div id='canvasBroadcast'>
    <h2 class="assignment-title">{{assignData.name}}</h2>
    <p>
      {{assignData.description}}
    </p>
    <hr />
    <!-- <h4 v-if="isStudent && preBroadcast">This demonstration will start at 7:00pm on {{startTime | moment('MMM Do YYYY')}}</h4> -->
    <div
      v-if="isStudent"
      class="broadcastCanvas"
      :width="canvasRender.width"
      :height="canvasRender.height"
      :style="{'background-color': canvasRender.backgroundColor}"
      >
      <img :src="canvasRender.drawing" />
    </div>
    <canvas
      v-if="!isStudent"
      ref="broadcast"
      @mousedown="canvasStart"
      @mousemove="canvasDrawing"
      @mouseup="falsePaint"
      @mouseleave="falsePaint"
      class="broadcastCanvas"
      :width="assignData.data.canvas_width"
      :height="assignData.data.canvas_height"
      :style="{'background-color': backgroundColor}"
      >
    </canvas>
    <div class="tool-grid top-margin" v-if="!isStudent">
      <div class='color-picker' >
        <div>
          <span>
            Background Color:
          </span>
          <compact-picker v-model="backgroundColors" @input="setBackgroundColor" />
        </div>
        <div class="top-margin">
          <span>
            Brush Color:
          </span>
          <compact-picker class='color-picker' v-model="brushColors" @input="setBrushColor" />
        </div>
      </div>
      <div class="brush-picker">
        <select v-model="curTool">
          <option value="marker">Marker</option>
          <option value="eraser">Eraser</option>
        </select> <br />
        <span class="top-margin">Brush Size: {{this.curSize}}</span><br />
        <input type="range" min="1" max="100" v-model="curSize"/>
      </div>
      <div class="broadcast-buttons">
        <button @click="startBroadcast" class="button-style start-button" v-if="!started">Start Demonstration</button>
        <button @click="endBroadcast" class="button-style end-button" v-if="started">End Demonstration</button>
        <button @click="saveCanvas" class="button-style save-button">Save Canvas</button>
      </div>
    </div>
    <div class="chat-grid">
      <chatCard :sendButton="sendMessage" :chatData="chat"></chatCard>
      <participantsCard></participantsCard>
    </div>
  </div>
</template>
<script>
import { Compact } from 'vue-color';
import Axios from 'axios';
import io from 'socket.io-client';
import chatCard from '../assets/cards/chatCard';
import participantsCard from '../assets/cards/participantsCard';

export default {
  name: 'canvasBroadcast',
  components: {
    'compact-picker': Compact,
    chatCard,
    participantsCard,
  },
  data() {
    /*eslint-disable*/
    return {
      assignmentID: this.$store.state.currentItem._id,
      chat: this.$store.state.currentItem.data.chat,
      started: false,
      paint: false,
      click: [],
      startTime: '20170921',
      colorPicker: 'black',
      recievedCanvas: {},
      backgroundColor: this.$store.state.currentItem.data.canvas_background,
      curSize: 5,
      socket: undefined,
      curTool: 'marker',
      canvas_save: {
        drawing: '',
        width: 0,
        height: 0,
        backgroundColor: '',
      },
      brushColors: [
        '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
        '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
        '#333333', '#808080', '#CCCCCC', '#D33115', '#E27300', '#FCC400',
        '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
        '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
        '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'
      ],
      backgroundColors: [
        '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
        '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
        '#333333', '#808080', '#CCCCCC', '#D33115', '#E27300', '#FCC400',
        '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
        '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
        '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'
      ],
    };
  },
  mounted() {
    if(this.isStudent){
      this.socket = io.connect('http://localhost:3000');
      this.socket.on('canvas_broadcast', (data) => {
        this.canvas_save = data;
      })
      this.socket.on('canvas_chat', (data) => {
        this.chat.push(data);
      })
    }
  },
  computed: {
    // eslint-disable-next-line
    assignData: function () {
      this.started = false;
      this.paint = false;
      this.click = [];
      this.colorPicker = 'black';
      this.backgroundColor = this.$store.state.currentItem.data.canvas_background;
      this.curSize = 5;
      this.curTool = 'marker';
      this.canvas_save = {
        drawing: '',
        width: 0,
        height: 0,
        backgroundColor: '',
      }
      return this.$store.state.currentItem;
    },
    canvasRender: function() {
      return this.canvas_save;
    },
    // eslint-disable-next-line
    context: function () {
      let contextVar = this.$refs.broadcast.getContext('2d');
      return contextVar
    },
    //eslint-disable-next-line
    isStudent: function() {
      return this.$store.state.currentUser.type === 'student';
    },
    brushColor: function() {
      if (this.curTool === 'marker') {
        return this.colorPicker;
      } else if (this.curTool === 'eraser') {
        return this.backgroundColor;
      }
    },
    canvasObject: function() {
      return {
        drawing: this.$refs.broadcast.toDataURL("image/png"),
        backgroundColor: this.backgroundColor,
        width: this.assignData.data.canvas_width,
        height: this.assignData.data.canvas_height,
      };
    },
    preBroadcast: function() {
      if(new Date(this.startTime) > new Date().now){
        return true;
      }
      return false;
    },
  },
  methods: {
    canvasStart(event) {
      this.paint = true;
      this.addClick(event.pageX - this.$refs.broadcast.offsetLeft, event.pageY - this.$refs.broadcast.offsetTop);
      this.redraw();
    },
    canvasDrawing(event) {
      if (this.paint) {
        this.addClick(event.pageX - this.$refs.broadcast.offsetLeft, event.pageY - this.$refs.broadcast.offsetTop, true);
        this.redraw();
        this.socket.emit('canvas_broadcast', this.canvasObject);
      }
    },
    falsePaint() {
      this.paint = false;
    },
    addClick(x, y, dragging) {
      this.click.push({
        x: x,
        y: y,
        drag: dragging,
        color: this.brushColor,
        size: this.curSize,
        type: this.curTool,
      })
    },
    redraw() {
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

      this.context.lineJoin = 'round';
      //eslint-disable-next-line
      for (let i = 0; i < this.click.length; i++) {
        this.context.beginPath();
        if (this.click[i].drag && i) {
          this.context.moveTo(this.click[i - 1].x, this.click[i - 1].y);
        } else {
          this.context.moveTo(this.click[i].x - 1, this.click[i].y);
        }
        this.context.lineTo(this.click[i].x, this.click[i].y);
        this.context.closePath();
        if (this.click[i].type === 'eraser') {
          this.context.strokeStyle = this.backgroundColor;
        } else {
          this.context.strokeStyle = this.click[i].color;
        }
        this.context.lineWidth = this.click[i].size;
        this.context.stroke();
      }
    },
    setBrushColor(payload) {
      this.colorPicker = payload.hex;
      },
    setBackgroundColor(payload) {
      this.backgroundColor = payload.hex;
      this.redraw();
    },
    startBroadcast() {
      this.started = true;
      this.socket = io.connect('http://localhost:3000');
      this.socket.emit('canvas_broadcast', this.canvasObject);
      this.socket.on('canvas_chat', (data) => {
        this.chat.push(data);
      })
    },
    endBroadcast() {
      this.started = false;
      this.socket.disconnect('http://localhost:3000');
    },
    saveCanvas() {
      Axios.post(`http://localhost:3000/assignment/${this.assignData._id}/canvas_save`, this.canvasObject)
      .then(response => {
        console.log(response);
      })
    },
    sendMessage(message) {
      let name = this.$store.state.currentUser.first_name + ' ' + this.$store.state.currentUser.last_name;
      console.log(message);
      this.socket.emit('canvas_chat', {name:name, message: message});
      // Axios.put(`http://localhost:3000/`)
    }
  },
};
</script>
<style lang="scss" scoped>
  $scarlet: #d0011b;
  $apple-green: #7ed321;
  $old-pink: #c4688d;
  $slate-green: #65826f;
  $charcoal-grey: #4a4a4a;
  $white: #e9e9e9;
  $bright-blue: #4A90E2;
  $black-50: rgba(0, 0, 0, 0.5);

  .broadcastCanvas {
    border: 1px solid $charcoal-grey;
  }
  .tool-grid {
    display: flex;
    // grid-template-columns: 5% 50% 20% 20% 5%;
    justify-content: space-around;
  }
  .color-picker {
    // grid-column: 2 / span 1;
    margin-right: 10px;
  }
  .broadcast-buttons {
    // grid-column: 4 / span 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .brush-picker {
    // grid-column: 3 / span 1;
    // justify-self: center;
  }
  .left-margin {
    margin-left: 20px;
  }
  .top-margin {
    margin-top: 20px;
  }
  .button-style {
    height: 50px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 $black-50;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    margin-bottom: 10px;
  }
  .start-button {
    background-color: $apple-green;
  }
  .end-button {
    background-color: $scarlet;
  }
  .save-button {
    background-color: $bright-blue;
  }
  .chat-grid {
    display: grid;
    grid-template-columns: 60% 40%;
  }
</style>
