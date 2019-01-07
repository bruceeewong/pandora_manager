<template>
  <div class="file-list">
    <ul>
      <li v-for="(file, index) in files" :key="index">
        {{ file.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'fileList',
  data () {
    return {
      files: [
        {
          name: '1.mp3',
          path: './assets/1.mp3'
        },
        {
          name: '2.mp3',
          path: './assets/2.mp3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.file-list {
  width: 100%;
  margin-bottom: 10px;
  background: #eee;

  ul {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;

    li {
      width: 100%;
      margin: 0 auto;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-bottom: 1px solid#fff;
    }
  }
}
</style>
