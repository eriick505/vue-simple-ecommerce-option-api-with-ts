<script lang="ts">
import { defineComponent } from "vue";

import TheModal from "@/layouts/TheModal.vue";

import BaseInputText from "@/components/BaseInputText.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInputSelect from "@/components/BaseInputSelect.vue";
import IconCurrency from "@/components/icons/IconCurrency.vue";
import IconFolderInfo from "@/components/icons/IconFolderInfo.vue";
import IconPicture from "@/components/icons/IconPicture.vue";

interface IProductFields {
  name: string;
  price: string;
  categoryId: string;
  product_image: {
    preview?: string;
    raw?: File;
    fileName?: string;
  };
}

export default defineComponent({
  name: "ProductCreateForm",

  components: {
    TheModal,
    BaseInputText,
    BaseButton,
    BaseInputSelect,
    IconCurrency,
    IconFolderInfo,
    IconPicture,
  },

  data() {
    return {
      formFields: {
        name: "",
        price: "",
        categoryId: "",
        product_image: {
          preview: "",
          raw: undefined,
          fileName: "",
        },
      } as IProductFields,

      optionList: [] as { id: string; description: string }[] | undefined,

      successMessage: "",

      inputFile: "",
    };
  },

  computed: {
    textButtonSubmit() {
      return this.$store.state.product.isLoading.postProductCreate
        ? "CREATING..."
        : "CREATE PRODUCT";
    },
  },

  watch: {
    "$store.state.product.categoryList"() {
      this.optionList = this.$store.state.product.categoryList?.map((cat) => ({
        id: cat.categoryId,
        description: cat.name,
      }));
    },
  },

  methods: {
    onInputUploadChange(file: File | undefined) {
      if (file) {
        this.formFields.product_image.preview =
          window.URL.createObjectURL(file);
        this.formFields.product_image.raw = file;
      }
    },

    async handleSubmit() {
      const formData = new FormData();

      if (!this.formFields.product_image.raw) return;

      formData.append("name", this.formFields.name);
      formData.append("price", this.formFields.price);
      formData.append("categoryId", this.formFields.categoryId);
      formData.append("product_image", this.formFields.product_image.raw);

      const message = await this.$store.dispatch("postProductCreate", formData);

      if (message) {
        this.successMessage = message;
      }
    },
  },

  mounted() {
    this.$store.dispatch("getCategoryList", undefined);
  },
});
</script>

<template>
  <TheModal>
    <template #modalContent>
      <h2 class="text-2xl font-bold mb-4">Create Product</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <BaseInputText
            v-model="formFields.name"
            required
            placeholder="Product Name"
            type="text"
          >
            <template #icon><IconFolderInfo /></template>
          </BaseInputText>
        </div>

        <div class="mb-0 md:mb-4 grid md:grid-cols-[180px_1fr] md:gap-2">
          <div class="mb-4 md:mb-0">
            <BaseInputText
              v-model="formFields.price"
              required
              placeholder="Price"
              type="text"
            >
              <template #icon><IconCurrency /></template>
            </BaseInputText>
          </div>

          <div
            v-if="!$store.state.product.isLoading.getCategoryList"
            class="mb-4 md:mb-0"
          >
            <BaseInputSelect
              v-model="formFields.categoryId"
              :option-list="optionList"
              required
            />
            <p v-if="$store.state.product.isLoading.getCategoryList">
              Loading...
            </p>
          </div>
        </div>

        <div class="mb-4">
          <BaseInputText
            v-model="formFields.product_image.fileName"
            @update:fileValue="onInputUploadChange"
            required
            placeholder="Product Image"
            type="file"
          >
            <template #icon><IconPicture /></template>
          </BaseInputText>
        </div>

        {{ inputFile }}

        <div
          class="w-full h-52 mb-4 flex justify-center items-center border-dotted border-4 border-blue-900"
        >
          <span
            v-if="formFields.product_image.preview"
            :style="{
              backgroundImage: formFields.product_image.preview
                ? `url('${formFields.product_image.preview}')`
                : 'none',
            }"
            class="block w-full h-full bg-contain bg-no-repeat bg-center"
          >
          </span>
          <span v-else>No product image selected</span>
        </div>

        <div>
          <BaseButton :text="textButtonSubmit" />
        </div>
      </form>

      <p v-if="successMessage" class="text-2x1 mt-3 text-green-600">
        {{ successMessage }}
      </p>
    </template>
  </TheModal>
</template>

<style scoped></style>
