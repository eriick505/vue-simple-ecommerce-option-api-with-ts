<script lang="ts">
import { defineComponent, type PropType } from "vue";

import IconChevron from "@/components/icons/IconChevron.vue";

type OptionList = { id: string | number; description: string }[] | undefined;

export default defineComponent({
  inheritAttrs: false,

  components: {
    IconChevron,
  },

  props: {
    modelValue: String,
    optionList: Object as PropType<OptionList>,
  },

  data() {
    return {
      selected: "",
      customArrow: false,
    };
  },

  emits: ["update:modelValue"],

  methods: {
    toggleCustomArrow() {
      this.customArrow = !this.customArrow;
    },

    onSelectChange(e: Event) {
      const valueSelected = (e.target as HTMLInputElement).value;
      this.$emit("update:modelValue", valueSelected);
    },
  },
});
</script>

<template>
  <div class="relative">
    {{ selected }}
    <span :class="{ active: customArrow }" class="baseInputSelectCustomArrow">
      <IconChevron />
    </span>
    <select
      @click="toggleCustomArrow"
      @blur="toggleCustomArrow"
      @change="onSelectChange"
      :value="modelValue"
      v-bind="$attrs"
      class="p-4 w-full rounded-lg bg-gray-800 text-white appearance-none"
    >
      <option disabled value="">Please select one</option>
      <option
        v-for="optionItem in optionList"
        :value="optionItem.id"
        :key="optionItem.id"
      >
        {{ optionItem.description }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="postcss">
.baseInputSelectCustomArrow {
  @apply absolute top-1/2 -translate-y-1/2 right-2 text-white transition-all text-2xl rotate-0 pointer-events-none;
}
.baseInputSelectCustomArrow.active {
  @apply rotate-180;
}
</style>
