<template>
  <div class="home">
    <my-header :header-title="headerTitle"></my-header>
    <img alt="Vue logo" src="../assets/logo.png">

  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'

export default {
  name: 'home',
  data () {
    return {
      headerTitle: 'Home'
    }
  },
  components: {
    MyHeader
  }
}
</script>
