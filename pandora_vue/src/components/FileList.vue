<template>
  <div class="file-list">
    <template v-if="fileList.length > 0">
      <ul>
        <li
          v-for="file in fileList"
          :key="file.id"
          :class="[checkActive(file.id) ? 'active' : '']"
          @click="selectFile(file)"
        >
          <div class="file-wrap">
            <div class="file-header">
              <img class="file-type-img" src="../assets/logo.png" alt="">
            </div>
            <div class="file-content">
              <div class="file-content-wrap">
                <h3 class="file-name">
                  {{ file.author }} - {{ file.name }}.{{ file.type }}
                </h3>
                <p class="file-uploadtime">
                  {{ file.uploadTime }}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <edit-tabs
        v-if="selectedFile !== null"
        :tabList="editList"
        @tabClick="tabClick"
      />
      <file-info-panel
        v-if="isShowInfo"
        :file="selectedFile"
        @closeInfo="closeInfo"
      ></file-info-panel>
    </template>
    <template v-else>
      <div class="no-file">
        <h3>没有文件</h3>
        <p>点击右下角"+"按扭上传文件</p>
      </div>
    </template>
  </div>
</template>

<script>
// views
import FileInfoPanel from './FileInfoPanel.vue'

// components
import EditTabs from './EditTabs.vue'

export default {
  name: 'fileList',
  components: {
    EditTabs,
    FileInfoPanel
  },
  props: {
    fileList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      editList: [
        {
          name: '查看详情'
        },
        {
          name: '下载'
        },
        {
          name: '删除'
        },
        {
          name: '取消选择'
        }
      ],
      selectedFile: null,
      isShowInfo: false
    }
  },
  computed: {
  },
  methods: {
    selectFile (file) {
      if (this.selectedFile === null) {
        this.selectedFile = file
      } else {
        if (this.selectedFile.id !== file.id) {
          this.selectedFile = file
        } else {
          this.selectedFile = null
        }
      }

      // let index = this.selectedFiles.indexOf(id)
      // if (index === -1) {
      //   this.selectedFiles.push(id)
      // } else {
      //   this.selectedFiles.splice(index, 1)
      // }
    },
    checkActive (id) {
      if (this.selectedFile !== null) {
        return this.selectedFile.id === id
      } else {
        return false
      }
      // return (this.selectedFiles.indexOf(id) !== -1)
    },
    checkoutFile () {
      this.isShowInfo = true
    },
    downloadFile () {},
    deleteFile () {},
    cancelSelect () {
      this.selectedFile = null
    },
    tabClick (index) {
      switch (index) {
        case 0: this.checkoutFile()
          break
        case 1: break
        case 2: break
        case 3: this.cancelSelect()
          break
        default: break
      }
    },
    closeInfo () {
      this.isShowInfo = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

$h100: 60px;
.active {
  background: #ccc;
  border-top: 1px solid #fff;
}
.file-list {
  width: 100%;
  margin-bottom: 1px;
  background: #fff;
}
ul {
  width: 100%;
  @include flex(column, space-around);

  li {
    width: 100%;
    margin: 0 auto;
    height: $h100;
    line-height: 4px;
    cursor: pointer;
    border: {
      top: 1px solid #ccc;
    };
    &:last-child {
      border-bottom: 1px solid #ccc;
    }
  }
}
.file-wrap {
  width: 100%;
  height: $h100;
  @include flex(row, flex-start);
}
.file-header {
  width: 80px;
  height: $h100;
  @include flex(column, space-around);

  .file-type-img {
    width: 30px;
    height: 30px;
  }
}
.file-content {
  width: 100%;
  height: $h100;
  box-sizing: border-box;
  padding: 10px;

  .file-content-wrap {
    width: 100%;
    height: 40px;
    @include flex(column, space-around, flex-start);
  }
}
.file-name {
  line-height: 16px;
  text-align: left;
  font-size: 16px;
}
.file-uploadtime {
  line-height: 10px;
  text-align: left;
  font-size: 10px;
}
.no-file {
  width: 100%;
  text-align: center;
  margin-top: 50px;

  > h3 {
    color: $vue-color;
  }
  > p {
    color: rgb(150, 150, 150);
    margin-top: 20px;
  }
}
</style>
