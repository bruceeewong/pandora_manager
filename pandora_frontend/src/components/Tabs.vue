<template>
  <div class="bottom-tabs">
    <ul class="tabs-wrap">
      <li
        v-for="(item, index) in tabList"
        :key="index"
        @click="switchPage(item.url, index)"
        :class="{ 'active' : (isActive === index) ? true : false}"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabList: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      isActive: 2
    }
  },
  methods: {
    switchPage (url, index) {
      this.$router.push(url)
      this.isActive = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

.bottom-tabs {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9998;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: $vue-color;
  color: #fff;
  box-shadow: 0px -2px 5px rgba(1,1,1,0.1);
}
ul {
  list-style: none;
  li {
    width: 20%;
    cursor: pointer;
  }
}
.tabs-wrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
.active {
  background: #fff;
  color: $vue-color;
  border-top: 1px solid $vue-color;
}
</style>
