<template>
  <div>
    <my-header :header-title="headerTitle"></my-header>
    <file-list :fileList="musicList"></file-list>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
import FileList from '../components/FileList.vue'

export default {
  name: 'MyMusic',
  data () {
    return {
      headerTitle: 'Music',
      musicList: [
        {
          id: '1',
          name: '苦行僧',
          author: 'GAI',
          type: 'mp3',
          uploadTime: '2019-01-11',
          path: './assets/1.mp3'
        },
        {
          id: '2',
          name: '时间是金',
          author: '王闪火',
          type: 'mp3',
          uploadTime: '2019-01-11',
          path: './assets/1.mp3'
        },
        {
          id: '3',
          name: '小人物',
          author: '艾热',
          type: 'mp3',
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
