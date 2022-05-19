<script lang="ts">
import { defineComponent } from "vue";

import TheLoginContent from "@/layouts/TheLoginContent.vue";
import SignUpForm from "@/layouts/SignUpForm.vue";

export default defineComponent({
  components: {
    TheLoginContent,
    SignUpForm,
  },
});
</script>

<template>
  <TheLoginContent title="Create a new account" type="signup" linkTakes="login">
    <template #form>
      <SignUpForm />
    </template>
  </TheLoginContent>
</template>

<style scoped></style>
