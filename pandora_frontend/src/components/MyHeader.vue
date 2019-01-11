<template>
  <header>
    <h1>{{ headerTitle }}</h1>
    <div class="divider"></div>
  </header>
</template>

<script>
export default {
  name: 'myHeader',
  props: {
    headerTitle: {
      type: String,
      default: 'Header Title'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  color: $vue-color;
}

.divider {
  width: 10%;
  margin: 10px auto;
  height: 2px;
  background: $vue-color;
}
</style>
