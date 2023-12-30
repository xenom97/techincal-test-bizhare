<script setup lang="ts">
import Icon from '@/components/icon/index.vue'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import Modal from '@/components/modal/index.vue'

const isScrolled = ref<boolean>(false)
const isShowMessageModal = ref<boolean>(false)

const router = useRouter()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const goBack = () => {
  router.back()
}

const openMessage = () => {
  isShowMessageModal.value = true
}
</script>

<template>
  <nav class="app-bar" :class="{ 'app-bar--shadow': isScrolled }">
    <div class="app-bar__content container">
      <button @click="goBack">
        <Icon name="arrow-left" />
      </button>

      <h1>Daftar Bisnis</h1>

      <button @click="openMessage">
        <Icon name="message" />
      </button>
    </div>

    <Modal v-model="isShowMessageModal" title="Pesan">
      <h4>Opss! Tidak ada pesan</h4>
    </Modal>
  </nav>
</template>

<style scoped>
.app-bar {
  width: 100%;
  padding: 16px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}

.app-bar--shadow {
  box-shadow: var(--shadow-card);
}

.app-bar__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 !important;
}

.app-bar button {
  cursor: pointer;
}
</style>
