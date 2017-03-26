<template>
<div class="indexPage">
  <h2>幸运星</h2>
  <colorPanel name="此方蓝" color="#6592E3" />
  <colorPanel name="美幸粉" color="#FFCAD1" />
  <colorPanel name="桐家紫" color="#C6A8EF" />
  <colorPanel name="黑井黄" color="#EFE291" />
</div>
</template>

<script>
import colorPanel from '../components/colorPanel'

export default {
  name: 'indexPage',
  components: {
    colorPanel
  }
}
</script>

<style lang="css" scoped>
.indexPage {
  width: 960px;
  margin: 0 auto;
}
</style>
