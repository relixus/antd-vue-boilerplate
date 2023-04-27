<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo" />
            <app-bar></app-bar>
        </a-layout-sider>
        <a-layout>
            <a-layout-content>
                <view-layout></view-layout>
            </a-layout-content>
        </a-layout>
    </a-layout>
    
   
</template>
<script setup>
    import AppBar from './AppBar.vue';
    import ViewLayout from './ViewLayout.vue';
    import {ref} from 'vue';

    const collapsed = ref(false);
</script>
<style>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>