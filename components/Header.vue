<template>
  <header class="p-5 shadow-xl text-white">
    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <Logo class="h-14" />
      </NuxtLink>

      <ul class="hidden md:flex items-center gap-10 [&_.router-link-active]:text-green-500 text-xl">
        <li><NuxtLink to="about">About</NuxtLink></li>
        <li><NuxtLink to="blog">Blog</NuxtLink></li>
        <li><NuxtLink to="contact">Contact</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>
