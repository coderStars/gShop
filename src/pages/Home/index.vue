<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import Rank from './Rank'

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('getCartgoryList')
  },
  components: {
    ListContainer,
    Recommend,
    Like,
    Floor,
    Brand,
    Rank
  }
}
</script>

<style>

</style>