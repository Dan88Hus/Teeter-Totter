<template>
  <div>
    <div id="seasaw" :style="seasawStyle">
      <Item
        v-for="item in rightItems"
        :key="item.id"
        :item="item"
        :rightItem="true"
      />

      <Item v-for="item in leftItems" :key="item.id" :item="item" />
    </div>
    <div class="pivot">
      <span class="angle"> </span>
    </div>
    <!-- <pre>Tetter width: {{seasawWrapperEl}}</pre> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Item from "./Item";
import MUTATION_TYPES from "../../store/mutation-types";

export default {
  data() {
    return {
      sesawEl: null,
      sesawElWidth : 0,

    };
  },
  mounted() {
    

    // console.log("mounted");
    this.sesawEl = document.getElementById("seasaw");
    if (!this.sesawEl) {
      console.log("document Element is not loaded yet");
    } else {
      // console.log("sesawEl exist", this.sesawEl.getBoundingClientRect().width);
      // to keep teeter width 10
      this.sesawElWidth = Math.floor((this.sesawEl.getBoundingClientRect().width)/100)
      // console.log("this.sesawElWidth", this.sesawElWidth)
      this.updateTeeterWidth(this.sesawElWidth)
    }
  },
  components: {
    Item,
  },
  computed: {
    ...mapState(["rightItems", "leftItems"]),
    ...mapGetters(["sesawAngle"]),
    seasawStyle() {
      return {
        transform: `rotate(${this.sesawAngle}deg)`,
        transitionDuration: `${2500 / (Math.abs(this.sesawAngle) + 1)}ms`,
      };
    },
  },
  methods: {
    ...mapMutations([MUTATION_TYPES.SET_GAME_STATUS, MUTATION_TYPES.TEETER_WIDTH]),
    updateTeeterWidth(width) {
      this.teeterWidth(width)
    }
  },
  watch: {
    sesawAngle(newValue) {
      if (Math.abs(newValue) > 30) this.setGameStatus("end");
    },
  },
};
</script>
 
<style lang="scss" scoped>
.pivot {
  border-radius: 2px;
  border-bottom: 120px solid gray;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  width: 0;
  height: 0;
  margin: auto;
  position: relative;
  .angle {
    position: absolute;
    top: 60px;
    left: -60px;
    width: 120px;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    color: white;
  }
}
#seasaw {
  height: 5px;
  width: 105%;
  background-color: red;
  transition: 500ms ease-in;
  position: relative;
}
</style>