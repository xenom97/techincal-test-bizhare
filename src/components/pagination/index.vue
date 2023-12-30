<script setup lang="ts">
import { computed } from 'vue'
import Button from '@/components/button/index.vue'

const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 3
  },
  totalPages: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['change'])

const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1
  }

  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons + 1
  }

  return props.currentPage - 1
})

const endPage = computed(() =>
  Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages)
)

const pages = computed(() => {
  const range = []

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage
    })
  }

  return range
})
const isInFirstPage = computed(() => props.currentPage === 1)
const isInLastPage = computed(() => props.currentPage === props.totalPages)

const onClickFirstPage = () => {
  emit('change', 1)
}
const onClickPreviousPage = () => {
  emit('change', props.currentPage - 1)
}
const onClickPage = (page: number) => {
  emit('change', page)
}
const onClickNextPage = () => {
  emit('change', props.currentPage + 1)
}
const onClickLastPage = () => {
  emit('change', props.totalPages)
}
const isPageActive = (page: number) => {
  return props.currentPage === page
}
</script>

<template>
  <div class="pagination">
    <div class="pagination__info">Halaman {{ currentPage }} dari {{ totalPages }}</div>
    <ul class="pagination__buttons">
      <li class="pagination__buttons-item">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          aria-label="Ke halaman pertama"
          class="pagination__buttons-item--text"
        >
          First
        </button>
      </li>

      <li class="pagination__buttons-item">
        <Button
          type="button"
          icon="chv-left"
          theme="outline"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          aria-label="Ke halaman sebelumnya"
        />
      </li>

      <li v-for="(page, i) in pages" :key="i" class="pagination__buttons-item">
        <Button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :theme="isPageActive(page.name) ? 'default' : 'outline'"
          :aria-label="`Go to page number ${page.name}`"
          :text="page.name.toString()"
        />
      </li>

      <li class="pagination__buttons-item">
        <Button
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
          icon="chv-right"
          theme="outline"
          aria-label="Ke halaman selanjutnya"
        />
      </li>

      <li class="pagination__buttons-item">
        <button
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
          aria-label="Ke halaman terakhir"
          class="pagination__buttons-item--text"
        >
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
}

.pagination__info {
  display: none;
  font-size: 16px;
  font-weight: 500;
}

.pagination__buttons {
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 8px;
}

.pagination__buttons-item {
  display: inline-block;
}

.pagination__buttons-item button {
  font-size: 16px;
}

.pagination__buttons-item--text {
  display: none;
  font-weight: 600;
}

.pagination__buttons-item--text:hover {
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .pagination {
    justify-content: space-between;
  }

  .pagination__info,
  .pagination__buttons-item--text {
    display: block;
  }
}
</style>
