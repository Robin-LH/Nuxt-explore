<template>
  <div class="min-h-screen flex flex-col justify-between bg-dark-primary">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const appConfig = useAppConfig();
console.log(appConfig);
</script>
