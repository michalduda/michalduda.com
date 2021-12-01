<template>
  <div class="border-with-box">
    <span ref="box">
      <slot />
    </span>
    <div
      class="border-with-box__mark"
      v-for="(box, index) in boxes"
      :key="index"
      :style="generateStyle(box)"
    ></div>
    <div
      :class="`border-with-box__indicator border-with-box__indicator--${number}`"
      v-for="number in 8"
      :key="number"
    ></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      container: {},
      boxes: []
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.getBoxes()
    })

    this.getBoxes()
  },
  methods: {
    getBoxes () {
      this.boxes = this.$refs.box.getClientRects()
      this.container = this.$refs.box.getBoundingClientRect()
    },
    generateStyle (box) {
      const top = box.top - this.container.top
      return `
        top: ${top}px;
        height: ${box.height * 1.1}px;
        width: ${box.width + 10}px
      `
    }
  }
}
</script>

<style lang="scss">
.border-with-box {
  // border: 2px dashed black;
  line-height: 1.2;
  padding: 0 0.5rem 2rem 0;
  position: relative;
  color: white;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='3' stroke-dasharray='8%2c 9' stroke-dashoffset='2' stroke-linecap='square'/%3e%3c/svg%3e");
  @include xl {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='2' stroke-linecap='square'/%3e%3c/svg%3e");
  }
}

.border-with-box__mark {
  line-height: 1.125;
  background: black;
  color: white;
}
.border-with-box__mark {
  position: absolute;
  z-index: -1;
  background: black;
}

.border-with-box__indicator {
  width: 6px;
  height: 6px;
  border: 1px solid black;
  background: white;
  transform: translate(-50%, -50%);
  position: absolute;

  @include xl {
    width: 10px;
    height: 10px;
    border-width: 2px;
  }

  &--1,
  &--2,
  &--3 {
    top: 0;
  }

  &--4,
  &--5 {
    top: 50%;
  }

  &--6,
  &--7,
  &--8 {
    top: 100%;
  }

  &--1,
  &--4,
  &--6 {
    left: 0;
  }

  &--2,
  &--7 {
    left: 50%;
  }

  &--3,
  &--5,
  &--8 {
    left: 100%;
  }
}
</style>
