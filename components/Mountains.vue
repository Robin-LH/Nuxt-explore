<script setup>
const { data } = await useFetch(`https://api.nuxtjs.dev/mountains`);
</script>

<template>
  <section class="py-10">
    <div class="container mx-auto space-y-5 px-5">
      <div class="space-y-3">
        <h2 class="text-4xl font-medium text-white">Mountains ({{ data.length }})</h2>
        <hr />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="mountain in data">
          <MountainCard :mountain="mountain" />
        </div>
      </div>
    </div>
  </section>
</template>
