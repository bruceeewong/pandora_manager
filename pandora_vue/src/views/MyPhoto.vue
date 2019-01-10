<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
    <file-list :fileList="photoList"></file-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import FileList from '../components/FileList.vue'

export default {
  name: 'MyPhoto',
  data () {
    return {
      headerTitle: 'Photo',
      photoList: [
        {
          id: '1',
          name: '苦行僧',
          author: 'GAI',
          type: 'jpg',
          uploadTime: '2019-01-11',
          path: './assets/1.mp3'
        },
        {
          id: '2',
          name: '时间是金',
          author: '王闪火',
          type: 'png',
          uploadTime: '2019-01-11',
          path: './assets/1.mp3'
        },
        {
          id: '3',
          name: '小人物',
          author: '艾热',
          type: 'gif',
          uploadTime: '2019-01-11',
          path: './assets/1.mp3'
        }
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
