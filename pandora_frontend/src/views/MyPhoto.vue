<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
    <file-list :fileList="photoList" @refreshFileList="refreshFileList"></file-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import FileList from '../components/FileList.vue'
import store from '@/store'

export default {
  name: 'MyPhoto',
  computed: {
    photoList () {
      return store.state.allFileList.filter(file => {
        return /(jpe?g|png|gif)$/.test(file.type)
      })
    }
  },
  data () {
    return {
      headerTitle: 'Photos'
    }
  },
  components: {
    MyHeader,
    FileList
  },
  methods: {
    refreshFileList () {
      this.$emit('refreshFileList')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
