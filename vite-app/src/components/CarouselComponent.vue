<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import './assets/style.css';
</script>

<template>
  <swiper class="flex justify-items-center cursor-grab :cursor-grabbing">
    <swiper-slide><img src="../../public/images/podologia.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../public/images/teste90.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../public/images/teste80.jpg" alt=""></swiper-slide>
  </swiper>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
