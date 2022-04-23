<template>
  <h1> Helcom to our threads forum! </h1>

  <ThreadList />
</template>

<script>
  /*eslint-disable*/
  import sourceData from './data.json'
  export default {
    data() {
      return {
        threads: sourceData.threads,
        posts: sourceData.posts,
        users: sourceData.users
      }
    },
    methods: {
      postById(postId) {
        return this.posts.find(p => p.id === postId)
      },
      userById(userId) {
        return this.users.find(p => p.id === userId)
      }
    }
  }
</script>

<style scoped>
</style>
