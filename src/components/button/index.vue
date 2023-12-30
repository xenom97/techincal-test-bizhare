<script setup lang="ts">
import { computed, type PropType } from 'vue'
import Icon from '@/components/icon/index.vue'
import type { IconName } from '@/components/icon/index'

const props = defineProps({
  theme: {
    type: String,
    default: 'default',
    validator: (value: string) => {
      return ['default', 'outline'].includes(value)
    }
  },
  block: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String as PropType<IconName>,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => ({
  button: true,
  'button--default': props.theme === 'default',
  'button--outline': props.theme === 'outline',
  'button--block': props.block
}))
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <Icon v-if="icon" :name="icon" height="16px" />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 180px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  box-shadow: var(--shadow-outline);
  border: 2px solid var(--color-blue);
}

.button:focus-within {
  box-shadow: 0 0 0 2px var(--color-gray);
}

.button--block {
  max-width: none;
}

.button--default {
  background: var(--color-blue);
  color: white;
}

.button--default:hover {
  opacity: 0.8;
  cursor: pointer;
}

.button--outline {
  background: transparent;
  color: var(--color-blue);
}

.button--outline:hover {
  opacity: 0.8;
  background: var(--color-blue);
  color: white;
}

.button:disabled {
  opacity: 0.5;
}
</style>
