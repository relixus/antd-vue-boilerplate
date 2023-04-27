<template>
    <a-menu theme="dark" mode="inline">
        <a-menu-item key="home">
            <router-link :to="{ name: 'Home' }">
                <home-outlined />
                <span>Home</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="about">
            <router-link :to="{ name: 'About' }">
                <info-circle-outlined />
                <span>About</span>
            </router-link>
        </a-menu-item>

    </a-menu>
</template>
<script setup>
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
</script>