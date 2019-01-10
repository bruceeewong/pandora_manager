<template>
  <div id="app">
    <router-view/>
    <upload-btn></upload-btn>
    <tabs :tabList="tabList" />
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import UploadBtn from '@/components/UploadBtn.vue'

export default {
  name: 'app',
  components: {
    Tabs,
    UploadBtn
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
      ]
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
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
