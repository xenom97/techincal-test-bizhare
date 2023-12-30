<script setup lang="ts">
import LayoutAppBar from '@/components/layout/app-bar.vue'
</script>

<template>
  <div>
    <LayoutAppBar />

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
