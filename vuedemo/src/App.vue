<template>
  <div class="app-container" id="scrollWrap">
    <div>
      <v-app-bar color="#725a9c" height="45px" class="fix-zindex">
        <div class="my-2">
          <v-btn class="title" text normal color="primary" @click="goback" :disabled="isHomePage">
            <v-icon>mdi-chevron-left</v-icon>vuedemo
          </v-btn>
        </div>

        <v-spacer></v-spacer>
      </v-app-bar>
      <div style="width:100%;height:45px;"></div>
    </div>

    <transition name="fade" mode="out-in">
      <router-view class="main"></router-view>
    </transition>

    <v-bottom-navigation v-model="defaultBtn" class="footer" color="#7659a0">
      <router-link tag="div" to="/homepage" class="reset-height">
        <v-btn value="/homepage">
          <span>首页</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

      <router-link tag="div" to="/weather" class="reset-height">
        <v-btn value="/weather">
          <span>天气</span>
          <v-icon>mdi-white-balance-sunny</v-icon>
        </v-btn>
      </router-link>

      <router-link tag="div" to="/cart" class="reset-height">
        <v-btn value="/cart">
          <span>购物车</span>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </router-link>

      <router-link tag="div" to="/account" class="reset-height">
        <v-btn value="/account">
          <span>用户</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-navigation>
  </div>
</template> 
<script>
import slider from "../src/components/subcomponent/slider.vue";
export default {
  data() {
    return {
      showNav: true,
      message: "",
      defaultBtn:'/homepage',
      isHomePage: false,
      routeName: "homepage",
      expand: false
    };
  },
  methods: {
    goback() {
      //返回上一页
      this.$router.go(-1);
      // var i = 1;
      // this.defaultBtn = this.$store.state.routername[ this.$store.state.routername.length-i];
      // i = i + 1

      // this.defaultBtn =
    }
  },
  watch: {
    //后退时监听route 改变tabbar achieve状态
    "$route.path": function(newVal) {
      this.defaultBtn =this.$route.path
    }
  },
  components: {
    "music-view": slider
  }
};
</script>  
 
<style scoped>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
}
.card {
  position: absolute;
}
.fix-zindex{
  position: fixed;
  z-index: 10;
  top: 0;
}
.app-container {
  overflow-x: auto;
  margin-bottom: 45px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index:10;
}

.reset-height {
  height: 100%;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.title {
  width: 100px;
}
</style>  
