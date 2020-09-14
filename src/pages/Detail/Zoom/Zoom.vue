<template>
  <div class="spec-preview">
    <img :src="defaultImg.imgUrl" />
    <div class="event" @mousemove="move" ref="event"></div>
    <div class="big">
      <img :src="defaultImg.imgUrl" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props: ['skuImageList'],
    data() {
      return {
        currentIndex: 0
      }
    },
    mounted() {
      this.$bus.$on('changeImg', this.changeImg)
    },
    methods: {
      changeImg(index) {
        this.currentIndex = index
      },
      move(e) {
        let event = this.$refs.event
        let mask = this.$refs.mask

        let eventX = e.offsetX
        let eventY = e.offsetY

        let moveX = eventX - mask.offsetWidth/2
        let moveY = eventY - mask.offsetHeight/2

        if(moveX<0) {
          moveX = 0
        }else if(moveX > mask.offsetWidth) {
          moveX = mask.offsetWidth
        }

        if(moveY<0) {
          moveY = 0
        }else if(moveY > mask.offsetHeight) {
          moveY = mask.offsetHeight
        }

        mask.style.left = moveX + 'px'
        mask.style.top = moveY + 'px'
        
      }
    },
    computed: {
      defaultImg() {
        return this.skuImageList[this.currentIndex] || {}
      }
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>