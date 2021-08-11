<template>
  <!-- <div class="layout-h layout-center layout-around-justified"> -->
  <div class="container">
    <div class="row">
      <div class="col">
        <div>Total Weight: {{ leftTotalSum }}</div>
      </div>
      <div class="col">
        <div>Total Weight: {{ rightTotalSum }}</div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div>Momentum: {{ leftItemMomentum }}</div>
      </div>
      <div class="col">
        <div>Momentum: {{ rightItemMomentum }}</div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "leftTotalSum",
      "rightTotalSum",
      "leftItemMomentum",
      "rightItemMomentum",
    ]),
  },
};
</script>

<style lang="scss" scoped>
</style>