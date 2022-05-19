<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckoutList",
});
</script>

<template>
  <section class="flex justify-between items-center text-white">
    <div class="flex items-center">
      <img src="http://via.placeholder.com/180x240" alt="text" />

      <div class="ml-4">
        <h3 class="text-xl">Air Red Pants</h3>
        <span>Category: <b>Food</b></span>
      </div>
    </div>

    <div>
      <span class="text-xl font-bold">R$ 450.00</span>
    </div>

    <div>
      <span class="inline mr-2">Quantity:</span>
      <span
        ><input
          type="number"
          name="quantity"
          class="w-20 p-1 rounded border-[1px] outline-slate-700 bg-transparent"
      /></span>
    </div>
  </section>
</template>
