<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
    <file-list :fileList="videoList" @refreshFileList="refreshFileList"></file-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import FileList from '../components/FileList.vue'
import store from '@/store'

export default {
  name: 'MyVideo',
  computed: {
    videoList () {
      return store.state.allFileList.filter(file => {
        return /(mp4|avi)$/.test(file.type)
      })
    }
  },
  data () {
    return {
      headerTitle: 'Videos'
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
