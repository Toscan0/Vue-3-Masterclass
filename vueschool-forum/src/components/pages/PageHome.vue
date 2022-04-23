<template>
  <h1>Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script>
  import CategoryList from '../CategoryList'
  import sourceData from '../../data/data.json'

  export default {
    components: {
      CategoryList
    },
    data() {
      return {
        categories: sourceData.categories
      }
    }
  }
</script>
