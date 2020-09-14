<template>
  <!--轮播-->
  <div class="swiper-container" id="mySwiper" ref="banner" :name="swiperList.length">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in swiperList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <a v-once>{{swiperList.length}}</a>
    <a>{{swiperList.length}}</a>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
import Swiper from "swiper";


export default {
  name: "SliderLoop",
  props: {
    swiperList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    swiperList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          console.log(this.swiperList.length, "--nextTick");
          console.log(this.$refs.banner, "--nextTick");
          new Swiper(this.$refs.banner, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination"
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
            cache: false
          });
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>