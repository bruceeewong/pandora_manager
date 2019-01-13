<template>
  <div class="upload-page">
    <div class="upload-wrap">
      <div class="upload-panel">
        <div class="upload-header">
          <h3>上传文件</h3>
        </div>
        <div class="upload-content">
         <form>
           <div class="form-control">
             <input type="file" class="input-file" name="fileUpload" @change="addFile($event)">
           </div>
           <div class="result-text">
             <p
              v-show="isGetResult"
              :class="[uploadResut ? 'text-success' : 'text-fail']">
               {{ resultText }}
              </p>
           </div>
           <div class="form-bottom">
             <button
              :class="[isSelectFile ? '' : 'btn-not-select']"
              :disabled="!isSelectFile"
              @click.prevent="uploadFile">
                上传
              </button>
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
import url from '../api/ajax/url.js'

export default {
  name: 'UploadPanel',
  data () {
    return {
      isGetResult: false,
      uploadResut: false,
      fileUpload: null
    }
  },
  computed: {
    resultText () {
      return this.uploadResut ? '文件上传成功' : '文件上传失败!'
    },
    isSelectFile () {
      return (!!this.fileUpload)
    }
  },
  methods: {
    initState () {
      this.isGetResult = false
      this.uploadResut = false
      this.fileUpload = null
    },
    uploadFile () {
      if (!this.fileUpload) {
        return
      }

      console.log(this.fileUpload)

      let fd = new FormData()
      fd.append('fileUpload', this.fileUpload)

      let xhr = new XMLHttpRequest()
      xhr.open('POST', url.uploadFile, true)
      xhr.send(fd)

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this.uploadResut = true
          this.isGetResult = true
        } else {
          this.uploadResut = false
          this.isGetResult = true
        }
      }
    },
    addFile (event) {
      const file = event.target.files[0]

      if (file) {
        this.fileUpload = file
        console.log(file)
      } else {
        this.fileUpload = null
      }
    },
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
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
.result-text {
  width: 60%;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  margin-top: 80px;
  color: #fff;
}
.text-success {
  background: $vue-color;
}
.text-fail {
  background: rgba(236, 66, 66, 0.938);
}
.btn-not-select {
  background: #999 !important;
}
</style>
