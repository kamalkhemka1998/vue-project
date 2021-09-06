<template>
  <div :style="{ color: $store.state.colorCode }" class="counter">
    {{ $store.state.counter }}
  </div>
  <div class="counter-squared">
    {{ $store.state.counter }}
    <sup>2</sup> = {{ $store.getters.counterSquared }}
  </div>
</template>

<script>
export default {};
</script>

<style></style>
