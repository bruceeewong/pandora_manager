<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'

export default {
  name: 'photo',
  data () {
    return {
      headerTitle: 'Photo'
    }
  },
  components: {
    MyHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
