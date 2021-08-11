<template>
  <div id="falling-wrapper">
    <Item
      v-for="item in fallingItems"
      :id="'item-'+item.id"
      :key="item.id"
      :item="item"
      :onBoard="false"
      class="falling-item"
    />
  </div>
</template>

<script>

import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'; // OK
import Item from "./Item";
import MUTATION_TYPES from '../../store/mutation-types'; //OK

export default {
  components: {
    Item,
  },
  data () {
    return {
      sesaw: null,
      fallingItemTop: 0, // OK
      fallingIntervalId: null, //OK

      topLimit: 0 // OK
    }
  },
  mounted () { //OK
    window.addEventListener('keydown', this.moveItem); //OK
    this.sesaw = document.getElementById('seasaw');
    this.startFalling(); //OK
    this.calcBottomLimit(); //OK
  },
  beforeDestroy () { //OK
    window.removeEventListener('keydown', this.moveItem); //OK
    clearInterval(this.fallingIntervalId); //OK
  },
  watch: {
    status (newValue) { // OK
      if (newValue === 'play') { // OK
        window.addEventListener('keydown', this.moveItem);// OK
        this.startFalling(); //OK
      } else {// OK
        clearInterval(this.fallingIntervalId); //OK
        window.removeEventListener('keydown', this.moveItem);// OK
      }
    }
  },
  computed: {
    ...mapState(['fallingItems', 'status', 'dropSpeed']), // OK
    ...mapGetters(['sesawAngle']),
    fallingItem () {//OK
      return this.fallingItems[0]//OK
    },
    fallingItemEl () { //OK
      if (this.fallingItem) //OK
        return document.getElementById('item-' + this.fallingItems[0].id);//OK
      return null//OK
    },
    fallingWrapperEl () { // OK
      return document.getElementById('falling-wrapper'); // OK
    },
    sesawEl () {
      return document.getElementById('seasaw');
    },
  },
  methods: {
    ...mapActions(['hitTheSeasaw']),
    ...mapMutations({
      move: MUTATION_TYPES.MOVE_ITEM,
    }), // OK
    ...mapMutations([MUTATION_TYPES.SET_DROP_SPEED]),
    nextItem () { //OK
      const fallingItem = this.fallingItemEl.getBoundingClientRect(); //OK
      const fallingWrapper = this.fallingWrapperEl.getBoundingClientRect(); //OK
      const newLeft = ((fallingItem.left - fallingWrapper.left - Math.tan(this.sesawAngle * Math.PI / 180) * fallingItem.width) * 100) / fallingWrapper.width;

      this.fallingItemTop = 0; //OK

      this.setDropSpeed(this.dropSpeed + 1); //OK
      this.hitTheSeasaw(newLeft);
      this.startFalling(); ///OK
      this.calcBottomLimit(); //OK
    },
    calcBottomLimit () { //OK
      const fallingItem = this.fallingItemEl.getBoundingClientRect();//OK
      const fallingWrapper = this.fallingWrapperEl.getBoundingClientRect();//OK

      const b = fallingWrapper.width / 2 - (fallingItem.left - fallingWrapper.left);

      const a = Math.tan(this.sesawAngle * Math.PI / 180) * b;

      this.topLimit = fallingWrapper.height - a - fallingItem.height; //OK
    },
    startFalling () { //OK
      if (this.fallingIntervalId) clearInterval(this.fallingIntervalId)// OK

      this.fallingIntervalId = setInterval(() => { //OK
        if (this.fallingItemTop > this.topLimit) { //OK
          clearInterval(this.fallingIntervalId); //OK
          this.fallingIntervalId = null; //OK
          this.nextItem(); // OK
        }
        else { //OK
          this.fallingItemTop += 1; //OK
          this.fallingItemEl.style.top = `${this.fallingItemTop}px`; //OK
        }
      }, 20 / this.dropSpeed) //OK
    },
    moveItem (e) { //OK
      if (e.keyCode !== 39 && e.keyCode !== 37) // OK
        return; // OK

      const { left } = this.fallingItem; // OK
      const wrapperWidth = this.fallingWrapperEl.getBoundingClientRect().width; // OK
      const itemWidth = this.fallingItemEl.getBoundingClientRect().width; // OK
      const fraction = itemWidth / wrapperWidth * 100;

      if (e.keyCode === 39 && (left + fraction) > 49) return;
      if (e.keyCode === 37 && left < 1) return; // OK

      this.calcBottomLimit(); // OK

      const amount = e.keyCode === 39 ? 1 : -1; // OK
      // this.$store.commit('MOVE_ITEM', amount);
      this.move(amount) // OK
    }
  },
}
</script>

<style lang="scss" scoped>
#falling-wrapper {
  height: 50vh;
  position: relative;
}
.falling-item {
  z-index: 1;
}
</style>