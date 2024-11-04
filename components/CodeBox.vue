// components/CodeBox.vue
<template>
  <div class="relative overflow-hidden neubrutalism">
    <!-- Header with language label and copy button -->
    <div
      class="flex justify-between items-center px-4 py-2 bg-primary text-white"
    >
      <span class="text-sm font-mono">{{ language }}</span>
      <button
        @click="copyCode"
        class="text-sm px-3 py-1 rounded-md transition-colors z-50"
        :class="copied ? 'bg-green-500' : 'bg-gray-700 hover:bg-gray-600'"
      >
        {{ copied ? "Copied!" : "Copy" }}
      </button>
    </div>

    <!-- Code container with scroll -->
    <div
      class="relative max-h-[400px] overflow-auto bg-primary p-4"
      ref="codeContainer"
    >
      <!-- Code content -->
      <pre
        class="text-sm font-mono leading-6 overflow-visible pl-12"
        :class="`language-${language}`"
      ><code ref="codeBlock">{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: "javascript",
  },
});

const codeBlock = ref(null);
const copied = ref(false);
const codeContainer = ref(null);

const lineCount = computed(() => {
  return props.code.split("\n").length;
});

onMounted(() => {
  Prism.highlightElement(codeBlock.value);
});

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: black;
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
  background: black;
}

code {
  display: inline-block;
  min-width: 100%;
  background: black;
}
</style>
