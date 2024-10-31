<template>
  <div class="space-y-8">
    <Card class="!p-8">
      <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
      <p class="text-lg mb-6">Get in touch with our team.</p>
      <form class="space-y-4">
        <div>
          <label class="block mb-2 font-bold">Name</label>
          <input type="text" class="w-full p-2 border-2 border-black neubrutalism" />
        </div>
        <div>
          <label class="block mb-2 font-bold">Email</label>
          <input type="email" class="w-full p-2 border-2 border-black neubrutalism" />
        </div>
        <div>
          <label class="block mb-2 font-bold">Message</label>
          <textarea class="w-full p-2 border-2 border-black neubrutalism" rows="4"></textarea>
        </div>
        <Button variant="primary">Send Message</Button>
      </form>
    </Card>
  </div>
</template>