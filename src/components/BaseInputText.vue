<script lang="ts">
import { defineComponent, type PropType } from "vue";

type ILinkTakes = string | File;

export default defineComponent({
  props: {
    modelValue: {
      type: String as PropType<ILinkTakes>,
    },
  },

  emits: {
    ["update:modelValue"]: (payload: string) => payload,
    ["update:fileValue"]: (payload: File | undefined) => payload,
  },

  methods: {
    onInputChange(e: Event) {
      if (this.$attrs.type) {
        if (
          typeof this.$attrs.type === "string" &&
          this.$attrs.type === "file"
        ) {
          const value = (e.target as HTMLInputElement).files?.[0];
          this.$emit("update:fileValue", value);
          this.$emit("update:modelValue", (e.target as HTMLInputElement).value);
          return;
        }
      }

      const value = (e.target as HTMLInputElement).value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>

<template>
  <div class="relative">
    <div
      class="absolute top-[50%] right-3 text-xl z-50 -translate-y-[50%] text-gray-200"
    >
      <slot name="icon"></slot>
    </div>

    <input
      :value="modelValue"
      @input="onInputChange"
      v-bind="$attrs"
      class="CustomBaseInputText"
    />
  </div>
</template>

<style scoped lang="postcss">
.CustomBaseInputText {
  @apply pt-4 pr-9 pb-4 pl-4 py-2 bg-gray-800 text-white outline-1 
  focus:outline-double outline-blue-500 focus:shadow-md 
focus:shadow-blue-500/50 transition-all duration-500 border-none 
  rounded-lg w-full;
}
</style>
