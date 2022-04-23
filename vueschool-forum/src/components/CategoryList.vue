<template>
  <ForumList v-for="category in categories"
             :key="category.id"
             :forums="getForumsForCategory(category)"
             :title="category.name"
             :category-id="category.id" />
</template>

<script>
import ForumList from './ForumList'
import sourceData from '../data/data.json'
export default {
  components: { ForumList },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  methods: {
    getForumsForCategory (category) {
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style scoped>
</style>
