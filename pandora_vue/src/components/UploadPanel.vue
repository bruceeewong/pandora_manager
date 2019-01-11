<template>
  <div class="upload-page">
    <div class="upload-wrap">
      <div class="upload-panel">
        <div class="upload-header">
          <h3>上传文件</h3>
        </div>
        <div class="upload-content">
         <form action="http://localhost:3000/api/upload" method="post" enctype="multipart/form-data">
           <div class="form-control">
             <input type="file" class="input-file" name="file">
           </div>
           <div class="form-bottom">
             <button type="submit">上传</button>
           </div>
         </form>
        </div>
      </div>
      <button
        class="btn-close"
        @click="closeUploadPanel"
      >x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadPanel',
  data () {
    return {
    }
  },
  methods: {
    closeUploadPanel () {
      this.$emit('closeUploadPanel')
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/global.scss';

.upload-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 667px;
  background: {
    color: rgba(1, 1, 1, 0.6);
  };
  z-index: 10000;
  @include flex(column, center, center);
}
.upload-wrap {
  width: 70%;
  height: 500px;
}
.upload-panel {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  background: {
    color: #fff;
  }
  position: relative;
}
.upload-header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: $vue-color;
  color: #fff;
  margin-bottom: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.upload-content {
  p {
    margin-bottom: 10px;
  }
}
.form-bottom {
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: absolute;
  left: 0px;
  bottom: 20px;
  text-align: center;

  button {
    width: 80%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: $vue-color;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
  }
}
.form-control {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.input-file {
  width: 80%;
}
.btn-close {
  display: block;
  width: 30px;
  height: 30px;
  margin: 20px auto;
  border-radius: 50%;
  border: transparent;
  background: $vue-color;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  color: #fff;
}
</style>
