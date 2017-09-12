<template>
  <div id='newCourseTool'>
    <form>
      <label for="name">Name:</label>
      <input type="text" name="name" placeholder="Course Item Name"/>
      <label for="description">Description:</label>
      <textarea name="description" placeholder="Item Summary..."></textarea>
      <label for="type">Type:</label>
      <select name="type">
        <option value="article">Article</option>
        <option value="drawing-broadcast">Drawing Broadcast</option>
      </select>
      <hr />
      <label for="article-text">Article Text:</label>
      <textarea name="article-text" rows="8" cols="80" placeholder="Article text..."></textarea>
    </form>
  </div>
</template>
<script>
export default {
  name: 'newCourseTool',
};
</script>
<style lang="scss" scoped>
</style>
