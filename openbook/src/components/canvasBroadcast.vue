<template>
  <div id='canvasBroadcast'>
    <h2 class="assignment-title">{{assignData.name}}</h2>
    <p>
      {{assignData.description}}
    </p>
    <hr />
    <canvas
      ref="broadcast"
      @mousedown="canvasStart"
      @mousemove="canvasDrawing"
      @mouseup="falsePaint"
      @mouseleave="falsePaint"
      class="broadcastCanvas"
      :width="assignData.config.tool_setting.canvas_width"
      :height="assignData.config.tool_setting.canvas_height"
      >
    </canvas>
    <compact-picker class='left-margin' v-model="colors" @input="setBrushColor" />
  </div>
</template>
<script>
import { Compact } from 'vue-color';

export default {
  name: 'canvasBroadcast',
  components: {
    'compact-picker': Compact,
  },
  data() {
    /*eslint-disable*/
    return {
      paint: false,
      clickX: [],
      clickY: [],
      clickDrag: [],
      brushColor: '#808900',
      colors: [
        '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
        '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
        '#333333', '#808080', '#CCCCCC', '#D33115', '#E27300', '#FCC400',
        '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
        '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
        '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'
      ],
    };
  },
  computed: {
    // eslint-disable-next-line
    assignData: function () {
      return this.$store.state.currentItem;
    },
    // eslint-disable-next-line
    context: function () {
      let contextVar = this.$refs.broadcast.getContext('2d');
      return contextVar
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
      }
    },
    falsePaint() {
      this.paint = false;
    },
    addClick(x, y, dragging) {
      this.clickX.push(x);
      this.clickY.push(y);
      this.clickDrag.push(dragging);
    },
    redraw() {
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

      this.context.strokeStyle = this.brushColor;
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;
      //eslint-disable-next-line
      for (let i = 0; i < this.clickX.length; i++) {
        this.context.beginPath();
        if (this.clickDrag[i] && i) {
          this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
        } else {
          this.context.moveTo(this.clickX[i] - 1, this.clickY[i]);
        }
        this.context.lineTo(this.clickX[i], this.clickY[i]);
        this.context.closePath();
        this.context.stroke();
      }
    },
    setBrushColor(payload) {
      this.brushColor = payload.hex;
      },
    },
  watch: {
    $route: function (newRoute) {
      this.clickX = [];
      this.clickY = [];
      this.clickDrag = [];
    }
  }
};
</script>
<style lang="scss" scoped>
  .broadcastCanvas {
    border: 1px solid black;
  }
  .left-margin {
    margin-left: 20px;
  }
</style>
