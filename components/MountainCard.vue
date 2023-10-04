<script setup>
const { mountain } = defineProps(["mountain"]);
</script>

<template>
  <div
    class="hover:shadow-lg shadow transition-all group rounded-md overflow-hidden bg-dark-secondary"
  >
    <div class="overflow-hidden">
      <img
        :src="mountain.image"
        alt=""
        class="max-h-44 w-full object-cover group-hover:scale-110 transition-all"
      />
    </div>

    <div class="p-5">
      <h3 class="text-xl font-medium text-base-primary tracking-wider">
        {{ mountain.title }}
      </h3>
      <p class="line-clamp-3 text-white">{{ mountain.description }}</p>
    </div>
  </div>
</template>
