<template>
<div class="colorPanel">
  <div class="color" :style="colorStyle"></div>
  <div class="info">
    <div class="name">
      {{ name }}
    </div>
    <div class="format">
      {{ color }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'colorPanel',
  props: {
    color: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    colorStyle () {
      return {
        background: this.color
      }
    }
  }
}
</script>

<style lang="css" scoped>
.colorPanel {
  display: flex;
  margin: 5px;
}

.info {
  padding: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.format {
  color: lightgray;
}

.color {
  width: 64px;
  height: 64px;
  border-radius: 8px;
}
</style>
