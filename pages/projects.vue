<template>
  <div class="space-y-8">
    <Card class="!p-8">
      <h1 class="text-4xl font-bold mb-4">Our Projects</h1>
      <p class="text-lg mb-6">Explore our latest work and achievements.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card v-for="i in 4" :key="i">
          <h3 class="text-xl font-bold mb-2">Project {{ i }}</h3>
          <p class="mb-4">Description for project {{ i }} goes here.</p>
          <Button>View Details</Button>
        </Card>
      </div>
    </Card>
  </div>
</template>