<template>
  <header class="shadow-xl text-white sticky top-0 bg-inherit z-10">
    <div class="container mx-auto p-5 flex items-center justify-between">
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
