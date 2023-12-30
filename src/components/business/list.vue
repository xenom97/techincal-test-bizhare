<script setup lang="ts">
import type { IBusiness } from '@/api/response.interface'
import Card from '@/components/card/index.vue'
import { generateColor } from '@/utils/color'
import type { PropType } from 'vue'

defineProps({
  list: {
    type: Array as PropType<IBusiness[]>,
    default: () => []
  }
})
</script>

<template>
  <section class="business-list">
    <Card
      v-for="(item, i) in list"
      :key="i"
      class="business-list__item"
      :badge-color="generateColor(item.businessCategoryId)"
      :badge-text="item.businessCategoryName"
    >
      <img :src="item.logoUrl" :alt="item.businessName" loading="lazy" />

      <template #footer>
        <h3>{{ item.businessName }}</h3>
        <p style="margin-top: 4px">{{ item.businessCore }}</p>
      </template>
    </Card>
  </section>
</template>

<style scoped>
.business-list {
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 16px;
}

@media screen and (min-width: 768px) {
  .business-list {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
}

@media screen and (min-width: 1280px) {
  .business-list {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
}

.business-list__item img {
  width: 100%;
}
</style>
