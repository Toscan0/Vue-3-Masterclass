<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

<script>
  import ThreadList from '../ThreadList'
  import sourceData from '../../data/data.json'

  export default {
    components: {
      ThreadList
    },
    data () {
      return {
        threads: sourceData.threads
      }
    }
  }
</script>
