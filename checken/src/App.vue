<template>
  <div id="app">
    <Header></Header>
<<<<<<< HEAD
=======
    <Tab></Tab>
>>>>>>> recommend
  </div>
</template>
<script>
  import Header from './components/Header'
<<<<<<< HEAD
 export default {
    components:{Header}
 }
=======
  import Tab from './components/Tab'
  export default {
    components:{Header,Tab}
  }

>>>>>>> recommend
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
