<template>
  <a-button type="primary" @click="add">{{ x }}</a-button>
</template>

<script setup>
import { ref } from 'vue'
const x = ref(0);
function add() {
  x.value++;
}

</script>