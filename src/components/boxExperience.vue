<template>
  <div class="relative border-l-4 border-white py-3">
    <i class="icon icon-suitcase text-black"></i>
    <div class="flex flex-col px-9 py-8 text-xl bg-white/20 rounded-r-lg">
      <span> {{ title }} </span>
      <span> {{ date }} - {{ endDate }} </span>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
   defineProps(['title', 'date', 'endDate'])
</script>

<style scoped>
  .icon {
    @apply flex items-center justify-center absolute p-2 rounded-full bg-white w-[45px] h-[45px] text-2xl;
    top: calc(50% - 25px);
    left: -25px;
  }
</style>
