<template>
  <div id='newCourseTool'>
    <form>
      <label for="name">Name:</label>
      <input type="text" name="name" placeholder="Course Item Name" v-model="newItem.name"/>
      <label for="description">Description:</label>
      <textarea name="description" placeholder="Item Summary..." v-model="newItem.description"></textarea>
      <label for="type">Type:</label>
      <select name="type" v-model="newItem.type">
        <option value="article">Article</option>
        <option value="drawing-broadcast">Drawing Broadcast</option>
      </select>
      <hr />
      <label for="article-text">Article Text:</label>
      <textarea name="article-text" rows="8" cols="80" placeholder="Article text..." v-model="data.article_text"></textarea>
    </form>
  </div>
</template>
<script>
export default {
  name: 'newCourseTool',
  data() {
    return {
      newItem: {
        name: '',
        description: '',
        type: '',
        data: {
          article_text: '',
        },
        config: {},
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
