<script setup>
const router = useRoute();
const page = router.name === "index" ? "Home" : router.name;
</script>

<template>
  <section class="bg-white text-dark py-10">
    <div class="container mx-auto space-y-10 px-5 text-dark-primary">
      <h1 class="text-6xl font-medium">
        Hello, This is <span class="text-base-primary">{{ page }}</span> page
      </h1>
      <p class="text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rem blanditiis eaque ea
        corrupti iusto velit sed dolor vitae sunt, a, nulla culpa quod soluta debitis adipisci
        officiis molestiae fugiat.
      </p>
      <UButton size="xl">Button</UButton>
    </div>
  </section>
</template>
