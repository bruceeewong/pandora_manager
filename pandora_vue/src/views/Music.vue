<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
    <file-list></file-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import FileList from '../components/FileList.vue'

export default {
  name: 'music',
  data () {
    return {
      headerTitle: 'Music'
    }
  },
  components: {
    MyHeader,
    FileList
  }
}
</script>

<style lang="scss" scoped>

</style>
