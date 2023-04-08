<template>
  <teleport to="body">
    <div class="modal">
      <div class="backdrop"></div>
      <div class="modalContent">
        <button class="closeBtn"><TheIcon icon="close" /></button>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>
<script setup>
import TheIcon from './TheIcon.vue';
</script>
