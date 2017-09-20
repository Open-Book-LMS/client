<template>
  <div id='newCourseTool'>
    <form class="new-item-form">
      <label class="form-label" for="name">Name</label>
      <input type="text" name="name" placeholder="Course Item Name" v-model="newItem.name"/>
      <label class="form-label">Item Dates</label>
      <div class="date-wrapper">
        <input type="date" /><input type="date" />
      </div>
      <label for="description">Description</label>
      <textarea name="description" placeholder="Item Summary..." v-model="newItem.description"></textarea>
      <label for="type">Type</label>
      <select name="type" v-model="newItem.tool_type">
        <option value="ART">Article</option>
        <option value="CBC">Drawing Broadcast</option>
      </select>
      <hr />
      <div v-if="newItem.tool_type === 'ART'" class="tool-form">
        <label for="article-text">Article Text</label>
        <textarea name="article-text" rows="8" cols="80" placeholder="Article text..." v-model="newItem.data.article_text"></textarea>
      </div>
      <button @click.prevent="sendItem">Submit</button>
    </form>
  </div>
</template>
<script>
import Axios from 'axios';

export default {
  name: 'newCourseTool',
  data() {
    return {
      newItem: {
        name: '',
        description: '',
        start_date: '20171015',
        end_date: '20171015',
        tool_type: '',
        grading_rubric: [],
        gradebook: false,
        course_id: this.$store.state.currentCourse,
        data: {
          article_text: '',
        },
        config: {},
      },
    };
  },
  methods: {
    sendItem() {
      Axios.post(`https://open-book-lms.herokuapp.com/course/${this.newItem.course_id}/assignment`, this.newItem)
      .then((response) => {
        this.$store.dispatch('getCourseItems', { courseId: this.newItem.course_id });
        //eslint-disable-next-line
        this.$router.push(`${response.data._id}`);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .new-item-form {
    display: flex;
    flex-flow: column;
    width: 90%;
    margin:auto;
    margin-top: 20px;
  }
  .form-label {
   margin: auto;
 }
 .date-wrapper {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
 }
</style>
