<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "docs",
});
const { theme, updateTheme } = useTheme();

const localTheme = ref({ ...theme.value });
const borderWidth = ref(parseInt(theme.value.borderWidth));
const shadowSize = ref(parseInt(theme.value.shadowSize));

watch(borderWidth, (value) => {
  localTheme.value.borderWidth = `${value}px`;
});

watch(shadowSize, (value) => {
  localTheme.value.shadowSize = `${value}px`;
});

const applyTheme = () => {
  updateTheme(localTheme.value);
};

const resetTheme = () => {
  localTheme.value = {
    primary: "#000000",
    secondary: "#FFD700",
    background: "#FAFAFA",
    borderWidth: "2px",
    shadowSize: "5px",
  };
  borderWidth.value = 2;
  shadowSize.value = 5;
  updateTheme(localTheme.value);
};
const sampleCode = `
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Ensure line numbers stay fixed while scrolling horizontally */
pre {
  position: relative;
  padding-left: 3rem;
}

code {
  display: inline-block;
  min-width: 100%;
}
`;
</script>
<template>
  <div class="space-y-8">
    <Card class="!p-8">
      <h1 class="text-4xl font-bold mb-4">Theme Configuration</h1>
      <p class="text-lg mb-6">Customize the appearance of your application</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">Colors</h2>

          <div>
            <label class="block mb-2 font-bold">Primary Color</label>
            <div class="flex gap-4 items-center">
              <input
                type="color"
                v-model="localTheme.primary"
                class="h-10 w-20 neubrutalism"
              />
              <span>{{ localTheme.primary }}</span>
            </div>
          </div>

          <div>
            <label class="block mb-2 font-bold">Secondary Color</label>
            <div class="flex gap-4 items-center">
              <input
                type="color"
                v-model="localTheme.secondary"
                class="h-10 w-20 neubrutalism"
              />
              <span>{{ localTheme.secondary }}</span>
            </div>
          </div>

          <div>
            <label class="block mb-2 font-bold">Background Color</label>
            <div class="flex gap-4 items-center">
              <input
                type="color"
                v-model="localTheme.background"
                class="h-10 w-20 neubrutalism"
              />
              <span>{{ localTheme.background }}</span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-bold">Style</h2>

          <div>
            <label class="block mb-2 font-bold">Border Width</label>
            <input
              type="range"
              v-model="borderWidth"
              min="1"
              max="10"
              class="w-full neubrutalism"
            />
            <span>{{ localTheme.borderWidth }}</span>
          </div>

          <div>
            <label class="block mb-2 font-bold">Shadow Size</label>
            <input
              type="range"
              v-model="shadowSize"
              min="1"
              max="20"
              class="w-full neubrutalism"
            />
            <span>{{ localTheme.shadowSize }}</span>
          </div>
        </div>
      </div>

      <div class="mt-8 space-y-6">
        <h2 class="text-2xl font-bold">Preview</h2>
        <div class="flex gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button>Default Button</Button>
        </div>
        <div class="flex gap-4">
          <Badge variant="primary" class="neubrutalism">Primary Button</Badge>
          <Badge variant="brutalism" class="">Secondary Button</Badge>
          <Badge>Default Button</Badge>
        </div>
        <Card>
          <h3 class="text-xl font-bold">Sample Card</h3>
          <p>This is how your cards will look with the current theme.</p>
        </Card>
      </div>

      <div class="mt-8 space-y-6">
        <CodeBox :code="sampleCode" language="css" />
      </div>

      <div class="mt-8 flex gap-4">
        <Button variant="primary" @click="applyTheme">Apply Theme</Button>
        <Button @click="resetTheme">Reset to Default</Button>
      </div>
    </Card>
  </div>
</template>
