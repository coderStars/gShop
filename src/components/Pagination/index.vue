<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="$emit('changePageNum',currentPage - 1)">上一页</button>
    <button v-if="startToEnd.start > 1" @click="$emit('changePageNum', 1)">1</button>
    <button v-if="startToEnd.start > 2" >···</button>

    <button v-for="(page, index) in startToEnd.end" 
          v-if="page >= startToEnd.start" :key="index" 
          :class="{active: currentPage === page}"
           @click="$emit('changePageNum', page)">{{page}}</button>


    <button v-if="startToEnd.end < totalPageNum -1">···</button>
    <button v-if="startToEnd.end < totalPageNum" @click="$emit('changePageNum', totalPageNum)">{{totalPageNum}}</button>
    <button :disabled="currentPage === totalPageNum" @click="$emit('changePageNum',currentPage + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{totalSize}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    currentSize: Number,
    totalSize: Number,
    continueNum: Number
  },
  computed: {
    totalPageNum() {
      return Math.floor(this.totalSize / this.currentSize);
    },
    startToEnd() {
      let { currentPage, totalPageNum, continueNum } = this;
      let start,end

      if (totalPageNum < continueNum) {
        start = 1,
        end = totalPageNum
      }else {
        start = currentPage -  Math.floor(continueNum / 2 )
        end = currentPage +  Math.floor(continueNum / 2 )

        let disNum
        if(start < 1) {
          disNum = start - 1
          start = 1
          end = end - disNum

        }else if(end > totalPageNum) {
          disNum = end - totalPageNum
          end = totalPageNum
          start = start - disNum
        }
      }

      return {start,end}
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
