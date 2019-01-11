<template>
  <div class="upload">
    <button class="upload-btn"
      @click="showUploadPanel">+</button>
  </div>
</template>

<script>
export default {
  name: 'uploadBtn',
  methods: {
    showUploadPanel () {
      this.$emit('showUploadPanel')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

.upload {
  position: fixed;
  right: 5%;
  bottom: 100px;
}

.upload-btn {
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: none;
  border-radius: 50%;
  background: $vue-color;
  color: #fff;
  font-size: 2em;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
}
</style>
