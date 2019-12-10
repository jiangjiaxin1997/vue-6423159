<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
  </div>
</template>
<script>
  import Header from './components/Header'
  import Tab from './components/Tab'
  export default {
    components:{Header,Tab}
  }

</script>
<style lang="less">
  Header{
    height: 44px;
    width: 375px;
    background: cadetblue;
    color: yellow;
  }
  Tab{
    height: 44px;
    width: 375px;
    background: black;
    color: yellow;
  }

</style>
