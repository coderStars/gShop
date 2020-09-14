<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- <Floor v-for="(floor, index) in floorList" :floor="floor" :key="floor.id"></Floor> -->
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import Rank from "./Rank";
import { mapState } from 'vuex';

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Like,
    Floor,
    Brand,
    Rank
  },
  mounted() {
    this.getFloorList();
  },
  methods: {
    getFloorList() {
      this.$store.dispatch("getFloorList");
      console.log();
    }
  },
  computed: {
    ...mapState({"floorList": state => state.home.floorList})
  }
};
</script>

<style>
</style>