<script lang="ts">
import { defineComponent } from "vue";

import BaseInputText from "@/components/BaseInputText.vue";
import BaseButton from "@/components/BaseButton.vue";
import IconUser from "@/components/icons/IconUser.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconPadlock from "@/components/icons/IconPadlock.vue";

export default defineComponent({
  components: {
    BaseInputText,
    BaseButton,
    IconUser,
    IconEmail,
    IconPhone,
    IconPadlock,
  },

  data() {
    return {
      register: {
        name: "",
        phone: "",
        email: "",
        password: "",
      },
    };
  },

  computed: {
    textButtonSubmit() {
      return this.$store.state.auth.loading ? "LOADING..." : "SIGN UP";
    },
  },

  methods: {
    async handleSubmit() {
      await this.$store.dispatch("authRegisterUser", this.register);
    },
  },
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-4 grid md:grid-cols-[1fr_185px] gap-3">
      <div>
        <BaseInputText
          v-model="register.name"
          required
          placeholder="Name"
          type="text"
        >
          <template #icon>
            <IconUser />
          </template>
        </BaseInputText>
      </div>
      <div>
        <BaseInputText
          v-model="register.phone"
          required
          placeholder="Phone"
          type="tel"
        >
          <template #icon>
            <IconPhone />
          </template>
        </BaseInputText>
      </div>
    </div>
    <div class="mb-4">
      <BaseInputText
        v-model="register.email"
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
        v-model="register.password"
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
