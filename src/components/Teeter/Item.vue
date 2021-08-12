<template>
  <div id="itemId" :class="'layout-h layout-center-center item ' + shape">
    <span class="weight">
      {{ item.weight + "kg" }}
    </span>
  </div>
</template>

<script>
import { SHAPES } from "../../config";
import { mapMutations } from "vuex";
import MUTATION_TYPES from "../../store/mutation-types"; //OK

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    rightItem: {
      type: Boolean,
      default: false,
    },
    onBoard: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapMutations([MUTATION_TYPES.TEETER_WIDTH]),

    shape() {
      return SHAPES[this.item.shape];
    },
    updateTeeterWidth() {
      const itemIdEl = document.getElementById("itemId");
      if (itemIdEl) {
        // this finds falling item left, we need items' left on teeter
        const itemIdElLeft = Math.round(
          itemIdEl.getBoundingClientRect().left / 100
        );
        // console.log("itemIdEl", itemIdElLeft);
      return itemIdElLeft;
      }

      return true;
    },
  },

  mounted() {
    // console.log("right items prop", this.rightItem)
    this.setItemColor();

    this.updateItemPosition(this.item.left);
  },
  watch: {
    "item.left"(newVal) {
      this.updateItemPosition(newVal);
    },
    updateTeeterWidth(newVal) {
      console.log("newVal", newVal);
    },
  },
  methods: {
    updateItemPosition(left) {
      // console.log("left", left)
      const { width } = this.$el.getBoundingClientRect();
      // console.log("width", width)
      const start = this.rightItem ? 50 : 0;

      this.$el.style.left =
        this.rightItem && left > 25
          ? `calc(${start + left}% - ${width}px)`
          : `${start + left}%`;
    },
    setItemColor() {
      const { color } = this.item;

      if (this.shape === "triangle") {
        this.$el.style.borderBottomColor = color;
      } else {
        this.$el.style.backgroundColor = color;
      }
      if (this.onBoard) {
        this.$el.style.transform += "translateY(-100%)";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  position: absolute;
  transition: left 100ms ease-in;
  .weight {
    color: white;
    font-size: 15px;
  }

  &.circle {
    border-radius: 50%;
  }
  &.rectangle {
    border-radius: 3px;
    height: 50px !important;
    width: 80px !important;
  }
  &.rectangle,
  &.circle {
    width: 60px;
    height: 60px;
  }

  &.triangle {
    width: 0;
    height: 0;
    border-bottom: 60px solid;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;

    .weight {
      margin: auto;
      position: absolute;
      top: 30px;
    }
  }
}
</style>