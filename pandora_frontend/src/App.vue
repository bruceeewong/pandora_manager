<template>
  <div id="app">
    <router-view />
    <upload-btn @showUploadPanel="showUploadPanel()"></upload-btn>
    <upload-panel v-if="isShowUploadPanel" @closeUploadPanel="closeUploadPanel()"></upload-panel>
    <tabs :tabList="tabList" />
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import UploadBtn from '@/components/UploadBtn.vue'
import UploadPanel from '@/components/UploadPanel.vue'

export default {
  name: 'app',
  components: {
    Tabs,
    UploadBtn,
    UploadPanel
  },
  data () {
    return {
      tabList: [
        {
          name: '照片',
          url: '/photo'
        },
        {
          name: '视频',
          url: '/video'
        },
        {
          name: '首页',
          url: '/'
        },
        {
          name: '音乐',
          url: '/music'
        },
        {
          name: '文档',
          url: '/doc'
        }
      ],
      isShowUploadPanel: false
    }
  },
  methods: {
    showUploadPanel () {
      this.isShowUploadPanel = true
    },
    closeUploadPanel () {
      this.isShowUploadPanel = false
    }
  }
}
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
  }
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
}
</style>
