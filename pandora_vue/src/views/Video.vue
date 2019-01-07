<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'

export default {
  name: 'video',
  data () {
    return {
      headerTitle: 'Video'
    }
  },
  components: {
    MyHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
