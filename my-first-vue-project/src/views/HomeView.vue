<script setup>

import { useflash } from '@/composables/useflash.js';

let { flash } = useflash();

</script>
<template>
  <main>
    <button @click="flash('it works on the home page!')">click me</button>
  </main>
</template>

<style> 
  
</style>
