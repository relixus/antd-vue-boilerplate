<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo" />
            <side-bar></side-bar>
        </a-layout-sider>
        <a-layout>
            <a-layout-header >
                <header-bar></header-bar>
            </a-layout-header>
            <a-layout-content>
                <div style="padding: 10px;">
                    <view-layout></view-layout>
                </div>
            </a-layout-content>
            <a-layout-footer>
                <footer-bar></footer-bar>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script setup>
import SideBar from './SideBar.vue';
import ViewLayout from './ViewLayout.vue';
import HeaderBar from './HeaderBar.vue';
import FooterBar from './FooterBar.vue';
import { ref } from 'vue';

const collapsed = ref(false);
</script>
<style>
.logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}
</style>