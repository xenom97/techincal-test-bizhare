<script setup lang="ts">
import { computed } from 'vue'

import Input from '@/components/input/index.vue'
import Button from '@/components/button/index.vue'

const props = defineProps({
  search: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:search'])

const internalSearch = computed({
  get: () => props.search,
  set: (val: string) => {
    emit('update:search', val)
  }
})
</script>

<template>
  <div class="list-header">
    <Input v-model="internalSearch" placeholder="Cari nama bisnis" type="search" icon="search" />
    <Button theme="outline" text="Kategori" icon="option" class="list-header__button" />
  </div>
</template>

<style scoped>
.list-header {
  display: flex;
  gap: 6px;
  align-items: center;
  margin: 16px 0;
}

.list-header__button {
  margin-left: 4px;
  width: 80px;
}

:deep(.list-header__button span) {
  display: none;
}

@media screen and (min-width: 768px) {
  .list-header__button {
    margin-left: 12px;
    width: 100%;
  }

  :deep(.list-header__button span) {
    display: block;
  }
}
</style>
