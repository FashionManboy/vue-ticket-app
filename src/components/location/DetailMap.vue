<template>
  <div id="map-wrapper">
    <div class="back-icon" @click="$emit('update:show',false)">
      <i class="icon-circle-left"></i>
    </div>
    <div class="mymap" id="container"></div>
  </div>
</template>

<script>
  import AMap from 'AMap'

  export default {
    data() {
      return {}
    },
    mounted() {
      this.loadmap()
    },
    methods: {
      loadmap() {
        const map = new AMap.Map('container', {
          zoom: 13,
          resizeEnable: true
        })
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
          map.addControl(new AMap.ToolBar())
          map.addControl(new AMap.Scale())
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mymap {
    margin: 0 auto;
    width: 90%;
    height: 75%;
  }
  .back-icon{
    margin: 20px 0 20px 20px;
    color: white;
  }
  .icon-circle-left{
    font-size: 32px;
  }
</style>
