<script setup lang="ts">
import { computed, ref, type PropType, watch } from 'vue'

import Input from '@/components/input/index.vue'
import Button from '@/components/button/index.vue'
import Modal from '@/components/modal/index.vue'
import Checkboxes from '@/components/checkboxes/index.vue'
import type { ICategory } from '@/api/response.interface'

const props = defineProps({
  search: {
    type: String,
    default: ''
  },
  categories: {
    type: Array as PropType<ICategory[]>,
    default: () => []
  },
  categoryIds: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})

const emit = defineEmits(['update:search', 'update:category-ids'])

const internalSearch = computed({
  get: () => props.search,
  set: (val: string) => {
    emit('update:search', val)
  }
})

const isShowModal = ref(false)
const selectedIds = ref<string[]>([])

watch(
  () => props.categoryIds,
  (_categoryIds) => {
    selectedIds.value = _categoryIds
  },
  { immediate: true }
)

const categoryOptions = computed(() =>
  props.categories.map((category) => ({
    label: category.paramName,
    value: category.paramCode
  }))
)

const applyFilter = () => {
  emit('update:category-ids', selectedIds.value)
  isShowModal.value = false
}

const categoryBtnText = computed(() => {
  let text = 'Kategori'

  if (props.categoryIds.length) {
    text += ` (${props.categoryIds.length})`
  }
  return text
})
</script>

<template>
  <div class="list-header">
    <Input v-model="internalSearch" placeholder="Cari nama bisnis" type="search" icon="search" />
    <Button
      theme="outline"
      :text="categoryBtnText"
      icon="option"
      class="list-header__button"
      @click="isShowModal = true"
    />

    <Modal v-model="isShowModal" modal-class="modal-category">
      <h5 class="modal-category__title">Kategori Bisnis</h5>

      <Checkboxes v-model="selectedIds" :options="categoryOptions" />

      <Button text="Terapkan" block @click="applyFilter" class="modal-category__btn" />
    </Modal>
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

.modal-category__title {
  font-size: 14px;
  font-weight: 500;
}

.modal-category__btn {
  margin-top: 24px;
}
</style>
