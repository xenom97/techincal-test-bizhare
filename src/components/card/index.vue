<script setup lang="ts">
defineProps({
  badgeText: {
    type: String,
    default: ''
  },
  badgeColor: {
    type: String,
    default: 'gray'
  }
})
</script>

<template>
  <div class="card">
    <span v-if="badgeText" class="card__badge" :style="`background: ${badgeColor}`">
      {{ badgeText }}
    </span>

    <slot></slot>

    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: 8px;
  box-shadow: var(--shadow-card);
  overflow: hidden;
  background-color: white;
}

.card__footer {
  padding: 12px;
  margin-top: 10px;
  height: 100%;
  background-color: var(--color-light-gray);
}

.card__badge {
  position: absolute;
  top: 20px;
  right: 0;
  padding: 4px 8px;
  color: white;
  border-radius: 10px 0px 0px 10px;
  box-shadow: var(--shadow-card);
  min-width: 80px;
  text-align: center;
}
</style>
