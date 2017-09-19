<template>
  <div id='studentDrawing'>
    <h2 class="assignment-title">{{assignData.name}}</h2>
    <p>
      {{assignData.description}}
    </p>
    <hr />
    <canvas
      v-if="isStudent"
      ref="drawingAssign"
      class="drawingAssign"
      @mousedown="canvasStart"
      @mousemove="canvasDrawing"
      @mouseup="falsePaint"
      @mouseleave="falsePaint"
      :width="assignData.data.canvas_width"
      :height="assignData.data.canvas_height"
      :style="{'background-color': assignData.data.background_color}"
      >
    </canvas>
    <canvas
    v-if="!isStudent"
    :width="assignData.data.canvas_width"
    :height="assignData.data.canvas_height"
    >
    </canvas>
    <div class="tool-grid top-margin" v-if="isStudent">
      <div class='color-picker' >
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
        <input type="range" :min="assignData.data.brushMin" :max="assignData.data.brushMax" v-model="curSize"/>
      </div>
      <div class="broadcast-buttons">
        <button @click="saveCanvas" class="button-style save-button">Save Canvas</button>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import { Compact } from 'vue-color';
import Axios from 'axios';

export default {
  name: 'studentDrawing',
  components: {
    'compact-picker': Compact,
  },
  data() {
    return {
      assignmentID: this.$store.state.currentItem._id,
      started: false,
      paint: false,
      click: [],
      colorPicker: '',
      curSize: 5,
      curTool: 'marker',
      canvas_save: {
        drawing: '',
        width: 0,
        height: 0,
        backgroundColor: '',
      },
    };
  },
  computed: {
    // eslint-disable-next-line
    assignData: function () {
      this.started = false;
      this.paint = false;
      this.click = [];
      this.colorPicker = 'black';
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
    brushColors: function() {
      return this.assignData.data.brushColors;
    },
    // eslint-disable-next-line
    context: function () {
      let contextVar = this.$refs.drawingAssign.getContext('2d');
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
        drawing: this.$refs.drawingAssign.toDataURL("image/png"),
        backgroundColor: this.backgroundColor,
        width: this.assignData.data.canvas_width,
        height: this.assignData.data.canvas_height,
      };
    },
  },
  methods: {
    canvasStart(event) {
      this.paint = true;
      this.addClick(event.pageX - this.$refs.drawingAssign.offsetLeft, event.pageY - this.$refs.drawingAssign.offsetTop);
      this.redraw();
    },
    canvasDrawing(event) {
      if (this.paint) {
        this.addClick(event.pageX - this.$refs.drawingAssign.offsetLeft, event.pageY - this.$refs.drawingAssign.offsetTop, true);
        this.redraw();
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
    // saveCanvas() {
    //   Axios.post(`http://localhost:3000/assignment/${this.assignData._id}/canvas_save`, this.canvasObject)
    //   .then(response => {
    //     console.log(response);
    //   })
    // },
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

.drawingAssign {
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
.save-button {
  background-color: $bright-blue;
}
</style>
