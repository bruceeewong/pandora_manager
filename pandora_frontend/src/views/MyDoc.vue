<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
    <file-list :fileList="docList" @refreshFileList="refreshFileList"></file-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import FileList from '../components/FileList.vue'
import store from '@/store'

export default {
  name: 'MyDoc',
  computed: {
    docList () {
      return store.state.allFileList.filter(file => {
        return /(txt|docx?)$/.test(file.type)
      })
    }
  },
  data () {
    return {
      headerTitle: 'Documents'
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
