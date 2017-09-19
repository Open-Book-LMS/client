<template>
  <div id='upcomingDatesCard'>
    <h3>September 25, 2017</h3>
    <h5>Drawing Concepts</h5>
    <ul>
      <li>
        Sketchbook Due
      </li>
    </ul>
    <h3>October 15, 2017</h3>
    <h5>Drawing Concepts</h5>
    <ul>
      <li>
        Drawing Demonstration
      </li>
      <li>
        Reading Chapter 12
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'upcomingDatesCard',
};
</script>
<style lang="scss" scoped>
  $white: #e9e9e9;
  $bright-blue: #4A90E2;
  $black-50: rgba(0, 0, 0, 0.5);

  #upcomingDatesCard {
    background-color: $white;
    box-shadow: inset 0 1px 3px 0 $black-50;
    grid-row: 3 / span 1;
    grid-column: 4 / span 1;
    margin-top: 10px;
    text-align: left;
    padding: 20px;
  }
</style>
