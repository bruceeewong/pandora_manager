<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
    <file-list :fileList="musicList" @refreshFileList="refreshFileList"></file-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import FileList from '../components/FileList.vue'
import store from '@/store'

export default {
  name: 'MyMusic',
  computed: {
    musicList () {
      return store.state.allFileList.filter(file => {
        return /(mp3|wav|flac)$/.test(file.type)
      })
    }
  },
  data () {
    return {
      headerTitle: 'Musics'
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
