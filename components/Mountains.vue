<script setup>
const { data } = await useFetch(`https://api.nuxtjs.dev/mountains`);
console.log(data);
</script>

<template>
  <section class="bg-white py-10">
    <div class="container mx-auto space-y-5">
      <h2 class="text-4xl font-medium text-dark">Mountains ({{ data.length }})</h2>

      <div class="grid grid-cols-3 gap-5">
        <div
          v-for="mountain in data"
          class="hover:shadow-lg shadow transition-all group rounded-md overflow-hidden"
        >
          <img
            :src="mountain.image"
            alt=""
            class="max-h-52 w-full object-cover group-hover:scale-110 transition-all"
          />
          <div class="p-5">
            <h3 class="text-xl font-medium text-primary tracking-wider">{{ mountain.title }}</h3>
            <p class="line-clamp-3">{{ mountain.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
