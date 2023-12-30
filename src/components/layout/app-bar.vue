<script setup lang="ts">
import Icon from '@/components/icon/index.vue'
import { onMounted, ref, onBeforeUnmount } from 'vue'

const isScrolled = ref<boolean>(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="app-bar" :class="{ 'app-bar--shadow': isScrolled }">
    <div class="app-bar__content container">
      <Icon name="arrow-left" />
      <h1>Daftar Bisnis</h1>
      <Icon name="message" />
    </div>
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
}
</style>
