<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'

export default {
  name: 'doc',
  data () {
    return {
      headerTitle: 'Documents'
    }
  },
  components: {
    MyHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
