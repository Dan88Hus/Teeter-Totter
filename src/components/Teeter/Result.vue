<template>
  <div>
    <div
      id="modal-container"
      :class="{six: status === 'end'}"
    >
      <div class="modal-background">
        <div class="modal">
          <div class="layout-v layout-center">
            <h3>
              Hope you enjoyed!
            </h3>
            <button
              @click="resetGame"
              class="btn btn-primary"
            >
              <span>Re-Start</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['status'])
  },
  methods: {
    ...mapActions(['resetGame'])
  },
}
</script>

<style lang="scss">
</style>