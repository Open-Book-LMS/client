<template>
  <div id='editItem'>
    <form class="edit-item-form">
      <label class="form-label" for="name">Name</label>
      <input type="text" name="name" placeholder="Course Item Name" v-model="editItem.name"/>
      <label for="description">Description</label>
      <textarea name="description" placeholder="Item Summary..." v-model="editItem.description"></textarea>
      <hr />
      <div class="tool-form">
        <label for="article-text">Article Text</label>
        <textarea name="article-text" rows="8" cols="80" placeholder="Article text..." v-model="editItem.data.article_text"></textarea>
      </div>
      <button @click.prevent="sendItem">Save</button>
    </form>
  </div>
</template>
<script>
// import Axios from 'axios';

export default {
  name: 'editItem',
  data() {
    return {
      editItem: {
        name: '',
        description: '',
        start_date: '20171015',
        end_date: '20171015',
        grading_rubric: [],
        gradebook: '',
        course_id: '',
        data: {},
        config: {},
      },
    };
  },
  watch: {
    $route(newRoute) {
      // eslint-disable-next-line
      this.$store.dispatch('getCurrentCourseItem', newRoute.params.assignId)
      .then(() => {
        this.editItem.name = this.$store.state.currentItem.name;
        this.editItem.description = this.$store.state.currentItem.description;
        this.editItem.gradebook = this.$store.state.currentItem.gradebook;
        this.editItem.course_id = this.$store.state.currentCourse;
        this.editItem.data = this.$store.state.currentItem;
      });
    },
  },
  methods: {
    getCourseInfo() {
      this.$store.dispatch('getCurrentCourseItem', this.assignId);
    },
    // sendItem() {
    //   Axios.post(`http://localhost:3000/course/${this.editItem.course_id}/assignment`, this.newItem)
    //   .then((response) => {
    //     this.$store.dispatch('getCourseItems', { courseId: this.editItem.course_id });
    //     //eslint-disable-next-line
    //     this.$router.push(`${response.data._id}`);
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped>
.edit-item-form {
  display: flex;
  flex-flow: column;
  width: 90%;
  margin:auto;
  margin-top: 20px;
}
.form-label {
 margin: auto;
}
</style>
