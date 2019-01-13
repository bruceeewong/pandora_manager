<template>
  <div class="home">
    <my-header :header-title="headerTitle"></my-header>
    <img alt="Vue logo" src="../assets/logo.png">
    <file-list :fileList="allFileList" @refreshFileList="refreshFileList"></file-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import FileList from '../components/FileList.vue'
import store from '@/store'

export default {
  name: 'home',
  components: {
    MyHeader,
    FileList
  },
  data () {
    return {
      headerTitle: 'All Files'
    }
  },
  computed: {
    allFileList () {
      return store.state.allFileList
    }
  },
  methods: {
    refreshFileList () {
      this.$emit('refreshFileList')
    }
  }
}
</script>
