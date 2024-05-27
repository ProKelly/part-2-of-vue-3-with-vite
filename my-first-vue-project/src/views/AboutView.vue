<script>
import flash from '@/mixins/flash.js';
export default {
  mixins: [flash],
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="flash('it works on the home page!')">click me</button>
  </div>
</template>

<style>
</style>
