<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
    <file-list :fileList="docList"></file-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import FileList from '../components/FileList.vue'

export default {
  name: 'MyDoc',
  data () {
    return {
      headerTitle: 'Documents',
      docList: [
        // {
        //   id: '1',
        //   name: '自我介绍',
        //   author: 'bruski',
        //   type: 'doc',
        //   uploadTime: '2019-01-11',
        //   path: './assets/论文.doc'
        // },
        // {
        //   id: '2',
        //   name: '毕业论文',
        //   author: 'bruski',
        //   type: 'doc',
        //   uploadTime: '2019-01-11',
        //   path: './assets/论文.doc'
        // },
        // {
        //   id: '3',
        //   name: '帅气指南',
        //   author: 'bruski',
        //   type: 'doc',
        //   uploadTime: '2019-01-11',
        //   path: './assets/论文.doc'
        // }
      ]
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
