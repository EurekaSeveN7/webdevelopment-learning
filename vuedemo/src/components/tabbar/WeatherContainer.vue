<template>
  <div>
    <weather></weather>
  </div>
</template>
<script>
// import weather from "../weather/weather.vue";
const weather = ()=>import('../weather/weather.vue')
export default {
  data() {
    return {};
  },

  components: {
    weather
  }
};
</script> 
<style scoped>
</style>