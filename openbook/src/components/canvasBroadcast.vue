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
  </div>
</template>
<script>
export default {
  name: 'canvasBroadcast',
  data() {
    /*eslint-disable*/
    return {
      paint: false,
      clickX: [],
      clickY: [],
      clickDrag: [],
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

      this.context.strokeStyle = '#df4b26';
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
</style>
