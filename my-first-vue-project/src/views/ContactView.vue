
<script setup>
import { ref, watch } from 'vue';
import { useStorage } from '@/composables/useStorage';

let food = useStorage('food', 'salad');
let age = useStorage('age', 90);
let obj = useStorage('obj',{'one': 'one'});
setTimeout(() => {
  obj.value ={'changed': 'Changed Completely'};
}, 2000);

</script>

<template>
    <div class="contact">
      <p>
        What is your favourite food ? <input type="text" v-model="food" @input="write('food', food)">
        <br>
        {{ food }}
      </p>
      <p>
        What is age ? <input type="text" v-model="age" @input="write('age', age)">
        <br>
        {{ age }}
      </p>
    </div>
  </template>
  
  <style>
  </style>
  