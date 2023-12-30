<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { getBusinessCategories, getBusinessList } from '@/api/business'
import type { IBusiness, ICategory } from '@/api/response.interface'
import BusinessListHeader from '@/components/business/list-header.vue'
import BusinessList from '@/components/business/list.vue'
import Pagination from '@/components/pagination/index.vue'
import Card from '@/components/card/index.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref<string>('')
const businessList = ref<IBusiness[]>([])
const categoryList = ref<ICategory[]>([])
const filteredCategoryIds = ref<string[]>([])

const isFetching = ref(false)

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
    isFetching.value = true

    const res = await getBusinessList({
      businessName: search.value,
      listCategory: filteredCategoryIds.value,
      page: pagination.currentPage,
      size: pagination.pageSize
    })

    if (res.success) {
      businessList.value = res.data?.content || []
      pagination.total = res.data.totalPages
    }
  } catch (error) {
    console.log('Failed to fetch businesses: ', error)
  } finally {
    isFetching.value = false
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

    if (typeof _query.categoryIds === 'string') {
      filteredCategoryIds.value = [_query.categoryIds]
    } else {
      filteredCategoryIds.value = (_query.categoryIds as string[]) || []
    }

    fetchBusinesses()
  },
  { immediate: true }
)

watch(
  [search, filteredCategoryIds, () => pagination.currentPage],
  ([_search, _categoryIds, _currentPage], [_prevSearch, _prevCategoryIds]) => {
    // Reset page if search or category is changed
    const isSearchChanged = _search !== _prevSearch
    const isCategoryIdsChanged = JSON.stringify(_categoryIds) !== JSON.stringify(_prevCategoryIds)

    if (isSearchChanged || isCategoryIdsChanged) {
      _currentPage = 1
    }

    router.push({
      query: {
        search: _search,
        categoryIds: _categoryIds,
        page: _currentPage
      }
    })
  }
)

onMounted(() => {
  fetchCategories()
})
</script>

<template>
  <div class="container">
    <BusinessListHeader
      v-model:search="search"
      :categories="categoryList"
      v-model:category-ids="filteredCategoryIds"
    />

    <Card class="card-info" v-if="!businessList.length || isFetching">
      {{ isFetching ? 'Sedang mengambil data...' : 'Opss! Data tidak ditemukan' }}
    </Card>

    <template v-else>
      <BusinessList :list="businessList" />

      <Pagination
        :current-page="pagination.currentPage"
        :per-page="pagination.pageSize"
        :total-pages="pagination.total"
        @change="onPageChange"
      />
    </template>
  </div>
</template>

<style scoped>
.card-info {
  text-align: center;
  margin-top: 30px;
  color: #666;
  padding: 20px;
}
</style>
