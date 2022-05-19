<script lang="ts">
import { defineComponent } from "vue";

import BaseInputText from "@/components/BaseInputText.vue";
import BaseButton from "@/components/BaseButton.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
import IconPadlock from "@/components/icons/IconPadlock.vue";

export default defineComponent({
  components: {
    BaseInputText,
    BaseButton,
    IconEmail,
    IconPadlock,
  },

  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },

  computed: {
    textButtonSubmit() {
      return this.$store.state.auth.loading ? "LOADING..." : "SIGN IN";
    },
  },

  methods: {
    async handleSubmit() {
      await this.$store.dispatch("authLogin", this.login);
    },
  },
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <BaseInputText
        v-model="login.email"
        required
        placeholder="Email"
        type="email"
      >
        <template #icon>
          <IconEmail />
        </template>
      </BaseInputText>
    </div>

    <div class="mb-5">
      <BaseInputText
        v-model="login.password"
        required
        placeholder="Password"
        type="password"
      >
        <template #icon>
          <IconPadlock />
        </template>
      </BaseInputText>
    </div>

    <div>
      <BaseButton :text="textButtonSubmit" />
    </div>

    <p class="text-red-600 text-xl mt-4">{{ $store.state.auth.error }}</p>
  </form>
</template>

<style scoped></style>
