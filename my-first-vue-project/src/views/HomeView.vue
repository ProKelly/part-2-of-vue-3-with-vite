<script setup>
// import { useflash } from '@/composables/useflash.js';
// let { flash } = useflash();
import TabbableTextarea from '@/components/TabbableTextarea.vue';
import { ref } from 'vue';

let content = ref('test content')

</script>
<template>
  <main>

    <TabbableTextarea v-model="content" style="width: 100%; height: 300px;"/>

    <button @click="flash('Information','it works on the home page!', 'info')">click me</button>
  </main>
</template>

<style> 
  
</style>
