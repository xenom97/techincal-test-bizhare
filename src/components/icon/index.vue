<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { icons, type IconName } from './index'

const props = defineProps({
  name: {
    type: String as PropType<IconName>,
    required: true
  }
})

const iconComponent = computed(() => icons[props.name] || null)
</script>

<template>
  <component :is="iconComponent"></component>
</template>
.
