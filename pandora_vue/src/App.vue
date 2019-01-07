<template>
  <div id="app">
    <router-view/>
    <upload-btn></upload-btn>
    <tabs />
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
