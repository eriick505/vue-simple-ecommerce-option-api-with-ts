<script lang="ts">
import { defineComponent } from "vue";

import TheLoginContent from "@/layouts/TheLoginContent.vue";
import SignInForm from "@/layouts/SignInForm.vue";

export default defineComponent({
  components: {
    TheLoginContent,
    SignInForm,
  },
});
</script>

<template>
  <TheLoginContent
    title="Sign in to your account"
    type="signin"
    linkTakes="register"
  >
    <template #form>
      <SignInForm />
    </template>
  </TheLoginContent>
</template>

<style scoped></style>
