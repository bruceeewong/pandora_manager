<template>
  <div class="file-list">
    <ul>
      <li
        v-for="file in fileList"
        :key="file.id"
        :class="[checkActive(file.id) ? 'active' : '']"
        @click="selectFile(file.id)"
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
      v-if="selectedFileId !== -1"
      :tabList="editList"
    />
  </div>
</template>

<script>
import EditTabs from './EditTabs.vue'

export default {
  name: 'fileList',
  components: {
    EditTabs
  },
  props: {
    fileList: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      editList: [
        {
          name: '查看详情',
          url: '/checkout'
        },
        {
          name: '下载',
          url: '/download'
        },
        {
          name: '删除',
          url: '/delete'
        },
        {
          name: '取消选择',
          url: '#'
        }
      ],
      selectedFileId: -1
    }
  },
  computed: {
  },
  methods: {
    selectFile (id) {
      if (this.selectedFileId !== id) {
        this.selectedFileId = id
      } else {
        this.selectedFileId = -1
      }

      // let index = this.selectedFiles.indexOf(id)
      // if (index === -1) {
      //   this.selectedFiles.push(id)
      // } else {
      //   this.selectedFiles.splice(index, 1)
      // }
    },
    checkActive (id) {
      return this.selectedFileId === id
      // return (this.selectedFiles.indexOf(id) !== -1)
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
</style>
