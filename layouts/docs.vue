<script setup lang="ts">
import { ref } from "vue";
// import { Separator } from "@/components/ui/separator";

const route = useRoute();
const { theme } = useTheme();
const openDropdowns = ref({});

useHead({
  meta: [{ property: "og:title", content: `Relic - ${route.meta.title}` }],
});

const menuItems = [
  { name: "Introduction", path: "/docs/introduction" },
  { name: "Guide", path: "/docs/guide" },
];

const componentItems = [
  {
    name: "Shadcn",
    path: "/docs/introduction",
    children: [
      { name: "Button", path: "/docs/introduction" },
      { name: "Badge", path: "/docs/introduction" },
    ],
  },
  {
    name: "Vue",
    path: "/docs/guide",
    children: [
      { name: "Button", path: "/docs/introduction" },
      { name: "Badge", path: "/docs/introduction" },
    ],
  },
];

const toggleDropdown = (item) => {
  if (item.children) {
    openDropdowns.value[item.path] = !openDropdowns.value[item.path];
  }
};

const isActiveRoute = (item) => {
  if (item.children) {
    return item.children.some((child) => child.path === route.path);
  }
  return route.path === item.path;
};
</script>
<template>
  <div class="min-h-screen" :style="{ backgroundColor: theme.background }">
    <aside
      class="fixed left-0 top-0 z-40 h-full w-64 bg-white neubrutalism overflow-y-auto custom-scrollbar"
    >
      <div class="p-4">
        <NuxtLink to="/" class="flex mb-4">
          <NuxtImg src="/logo.svg" class="h-9" />
          <span class="ml-3 self-center font-bold"> Relic </span>
        </NuxtLink>
        <nav class="space-y-4">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="block p-3 bg-white neubrutalism"
            :class="{ 'theme-secondary': $route.path === item.path }"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- <Separator class="my-6" /> -->

        <nav class="space-y-4 my-4">
          <div v-for="item in componentItems" :key="item.path" class="relative">
            <!-- Parent menu item -->
            <div
              class="flex items-center justify-between p-3 bg-white neubrutalism cursor-pointer"
              :class="{ 'theme-secondary': isActiveRoute(item) }"
              @click="toggleDropdown(item)"
            >
              <NuxtLink v-if="!item.children" :to="item.path">
                {{ item.name }}
              </NuxtLink>
              <span v-else>{{ item.name }}</span>

              <!-- Dropdown arrow -->
              <svg
                v-if="item.children"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': openDropdowns[item.path] }"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <!-- Dropdown content -->
            <div
              v-if="item.children"
              v-show="openDropdowns[item.path]"
              class="ml-4 mt-2 space-y-2"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.path"
                :to="child.path"
                class="block p-2 bg-white neubrutalism hover:bg-gray-50"
                :class="{ 'theme-secondary': $route.path === child.path }"
              >
                {{ child.name }}
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </aside>

    <main class="pl-64 min-h-screen">
      <div class="p-8">
        <slot />
      </div>
    </main>
  </div>
</template>
<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px; /* Lebar scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1; /* Warna background track */
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888; /* Warna thumb scrollbar */
  border-radius: 10px;
  transition: background 0.3s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555; /* Warna thumb saat dihover */
}
</style>
