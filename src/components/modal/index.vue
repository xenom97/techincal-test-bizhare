<script setup lang="ts">
import { computed } from 'vue'
import Card from '@/components/card/index.vue'
import Icon from '@/components/icon/index.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const isShow = computed({
  get: () => props.modelValue,
  set: (val: boolean) => {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isShow" class="modal__overlay">
        <Card class="modal">
          <button class="modal__btn-close" @click="isShow = false">
            <Icon name="close" />
          </button>

          <h3>{{ title || 'Title' }}</h3>

          <div class="modal__content">
            <slot></slot>
          </div>
        </Card>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal__overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  padding: 16px;
  min-width: 480px;
}

.modal__btn-close {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.modal__content {
  margin-top: 16px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
