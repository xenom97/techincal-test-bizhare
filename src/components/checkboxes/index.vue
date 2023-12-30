<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { ICheckbox } from './index'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  options: {
    type: Array as PropType<ICheckbox[]>,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedItems = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <div class="checkbox__wrapper">
    <div v-for="(option, idx) in options" :key="option.value" class="checkbox">
      <input
        type="checkbox"
        :value="option.value"
        v-model="selectedItems"
        :id="`option-${idx}-${option.value}`"
      />
      <label :for="`option-${idx}-${option.value}`">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.checkbox__wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #eee;
  border-radius: 4px;
  padding: 8px;
  margin: 8px 0;
  max-height: 300px;
  overflow-y: auto;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

label {
  font-size: 14px;
  cursor: pointer;
}

input[type='checkbox'] {
  width: 20px;
  height: 20px;
  accent-color: var(--color-teal);
  cursor: pointer;
}
</style>
