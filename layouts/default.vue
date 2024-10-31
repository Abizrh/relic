<template>
  <div>Dashboard</div>
</template>
<!-- <template> -->
<!--   <div class="min-h-screen" :style="{ backgroundColor: theme.background }"> -->
<!--     <aside -->
<!--       class="fixed left-0 top-0 z-40 h-full w-64 bg-white neubrutalism overflow-y-auto custom-scrollbar" -->
<!--     > -->
<!--       <div class="p-4"> -->
<!--         <NuxtLink to="/" class="flex mb-4"> -->
<!--           <NuxtImg src="/logo.svg" class="h-9" /> -->
<!--           <span class="ml-3 self-center font-bold"> Relic </span> -->
<!--         </NuxtLink> -->
<!---->
<!--         <nav class="space-y-4"> -->
<!--           <NuxtLink -->
<!--             v-for="item in menuItems" -->
<!--             :key="item.path" -->
<!--             :to="item.path" -->
<!--             class="block p-3 bg-white neubrutalism" -->
<!--             :class="{ 'theme-secondary': $route.path === item.path }" -->
<!--           > -->
<!--             {{ item.name }} -->
<!--           </NuxtLink> -->
<!--         </nav> -->
<!--       </div> -->
<!--     </aside> -->
<!---->
<!--     <main class="pl-64 min-h-screen"> -->
<!--       <div class="p-8"> -->
<!--         <slot /> -->
<!--       </div> -->
<!--     </main> -->
<!---->
<!--     <!-- <aside -->
-->
<!--     <!--   class="fixed right-0 top-0 z-40 h-full w-64 bg-white neubrutalism overflow-y-auto custom-scrollbar lg:hidden" -->
-->
<!--     <!-- > -->
-->
<!--     <!--   <div class="p-4"> -->
-->
<!--     <!--     <nav class="space-y-4"> -->
-->
<!--     <!--       <NuxtLink -->
-->
<!--     <!--         v-for="item in menuItems" -->
-->
<!--     <!--         :key="item.path" -->
-->
<!--     <!--         :to="item.path" -->
-->
<!--     <!--         class="block p-3 bg-white neubrutalism" -->
-->
<!--     <!--         :class="{ 'theme-secondary': $route.path === item.path }" -->
-->
<!--     <!--       > -->
-->
<!--     <!--         {{ item.name }} -->
-->
<!--     <!--       </NuxtLink> -->
-->
<!--     <!--     </nav> -->
-->
<!--     <!--   </div> -->
-->
<!--     <!-- </aside> -->
-->
<!--   </div> -->
<!-- </template> -->
<!---->
<!-- <script setup lang="ts"> -->
<!-- const { theme } = useTheme(); -->
<!---->
<!-- const menuItems = [ -->
<!--   { name: "Home", path: "/" }, -->
<!--   // { name: "About", path: "/about" }, -->
<!--   // { name: "Projects", path: "/projects" }, -->
<!--   // { name: "Contact", path: "/contact" }, -->
<!--   { name: "Style", path: "/style" }, -->
<!-- ]; -->
<!-- </script> -->
<!-- <style scoped> -->
<!-- .custom-scrollbar::-webkit-scrollbar { -->
<!--   width: 8px; /* Lebar scrollbar */ -->
<!-- } -->
<!---->
<!-- .custom-scrollbar::-webkit-scrollbar-track { -->
<!--   background: #f1f1f1; /* Warna background track */ -->
<!--   border-radius: 10px; -->
<!-- } -->
<!---->
<!-- .custom-scrollbar::-webkit-scrollbar-thumb { -->
<!--   background: #888; /* Warna thumb scrollbar */ -->
<!--   border-radius: 10px; -->
<!--   transition: background 0.3s ease; -->
<!-- } -->
<!---->
<!-- .custom-scrollbar::-webkit-scrollbar-thumb:hover { -->
<!--   background: #555; /* Warna thumb saat dihover */ -->
<!-- } -->
<!-- </style> -->
