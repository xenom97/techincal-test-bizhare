<script setup lang="ts">
import { computed, type PropType } from 'vue'
import Icon from '@/components/icon/index.vue'
import type { IconName } from '@/components/icon/index'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  icon: {
    type: String as PropType<IconName>,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const internalValue = computed({
  get: () => props.modelValue,
  set: (val: string) => {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <div class="input">
    <Icon v-if="icon" :name="icon" class="input__icon" />

    <input
      v-bind="props"
      v-model="internalValue"
      class="input__field"
      :class="{ 'input__field--search': type === 'search' }"
    />
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  position: relative;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: var(--shadow-outline);
}

.input:focus-within {
  box-shadow: 0 0 0 2px var(--color-gray);
}

.input__icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.input__field--search {
  padding-left: 48px !important;
}

.input__field {
  padding: 8px 12px;
  width: 100%;
  font-size: 14px;
}
</style>
