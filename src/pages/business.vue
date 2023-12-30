<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { getBusinessCategories, getBusinessList } from '@/api/business'
import type { IBusiness, ICategory } from '@/api/response.interface'
import BusinessListHeader from '@/components/business/list-header.vue'
import BusinessList from '@/components/business/list.vue'
import Pagination from '@/components/pagination/index.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref<string>('')
const businessList = ref<IBusiness[]>([])
const categoryList = ref<ICategory[]>([])

const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0
})

const onPageChange = (page: number) => {
  pagination.currentPage = page
}

const fetchBusinesses = async () => {
  try {
    const res = await getBusinessList({
      businessName: search.value,
      listCategory: [],
      page: pagination.currentPage,
      size: pagination.pageSize
    })

    if (res.success) {
      businessList.value = res.data?.content || []
      pagination.total = res.data.totalPages
    }
  } catch (error) {
    console.log('Failed to fetch businesses: ', error)
  }
}

const fetchCategories = async () => {
  try {
    const res = await getBusinessCategories()

    if (res.success) {
      categoryList.value = res.data || []
    }
  } catch (error) {
    console.log('Failed to fetch categories: ', error)
  }
}

watch(
  () => router.currentRoute.value.query,
  (_query) => {
    search.value = (_query.search as string) || ''
    pagination.currentPage = parseInt(_query.page as string) || 1

    fetchBusinesses()
  },
  { immediate: true }
)

watch([search, () => pagination.currentPage], ([_search, _currentPage]) => {
  router.push({
    query: {
      search: _search,
      page: _currentPage
    }
  })
})

onMounted(() => {
  fetchCategories()
})
</script>

<template>
  <div class="container">
    <BusinessListHeader v-model:search="search" />

    <BusinessList :list="businessList" />

    <Pagination
      :current-page="pagination.currentPage"
      :per-page="pagination.pageSize"
      :total-pages="pagination.total"
      @change="onPageChange"
    />
  </div>
</template>
