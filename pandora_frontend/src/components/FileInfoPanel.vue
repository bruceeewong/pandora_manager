<template>
  <div class="info-page">
    <div class="info-wrap">
      <div class="info-panel">
        <div class="info-header">
          <h3>{{ file.name }}.{{ file.type }}</h3>
        </div>
        <div class="info-content">
          <p class="info-type"
            v-for="(value, key) in fileInfo"
            :key="key"
          >
            {{ nameMapping(key) }}: {{ value }}
          </p>
        </div>
      </div>
      <button
        class="btn-close"
        @click="closeInfo"
      >x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileInfo',
  props: {
    file: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  computed: {
    fileInfo () {
      let fileInfoTmp = {}
      for (let key in this.file) {
        if (key !== 'id' && key !== 'name') {
          fileInfoTmp[key] = this.file[key]
        }
      }
      return fileInfoTmp
    }
  },
  methods: {
    closeInfo () {
      this.$emit('closeInfo')
    },
    nameMapping (key) {
      switch (key) {
        case 'author': return '作者'
        case 'type': return '类型'
        case 'uploadTime': return '上传时间'
        case 'path': return '文件位置'
        default: return key
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/global.scss';

.info-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;;
  background: {
    color: rgba(1, 1, 1, 0.6)
  };
  z-index: 10000;
  @include flex(column, center, center);
}
.info-wrap {
  width: 70%;
  height: 500px;
}
.info-panel {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  background: {
    color: #fff;
  }
}
.info-header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: $vue-color;
  color: #fff;
  margin-bottom: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  > h3 {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.info-content {
  p {
    margin-bottom: 10px;
  }
}
.info-type {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
