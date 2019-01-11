<template>
  <div class="bottom-tabs">
    <ul class="tabs-wrap">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        @click="tabClick(index)"
      >
        {{ tab.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EditTabs',
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
    },
    tabClick (index) {
      this.$emit('tabClick', index)
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
  z-index: 9999;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  box-shadow: 0px -2px 5px rgba(1,1,1,0.1);
}
ul {
  list-style: none;
  li {
    width: 20%;
    cursor: pointer;
    color: $vue-color;
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
.tab-link {
  text-decoration: none;
  color: $vue-color;
}
a:nth-child(3) {
  color: red;
}
</style>
