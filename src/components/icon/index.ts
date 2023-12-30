import ArrowLeft from './list/arrow-left.vue'
import Message from './list/message.vue'
import Option from './list/option.vue'
import Search from './list/search.vue'
import ChvLeft from './list/chv-left.vue'
import ChvRight from './list/chv-right.vue'

export const icons = {
  'arrow-left': ArrowLeft,
  message: Message,
  option: Option,
  search: Search,
  'chv-left': ChvLeft,
  'chv-right': ChvRight
}

export type IconName = keyof typeof icons
