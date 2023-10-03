<template>
  <div class="min-h-screen flex flex-col justify-between bg-dark">
    <Header class="sticky top-0 bg-inherit" />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>
