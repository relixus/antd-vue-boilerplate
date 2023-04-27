<template>
    <span>
        <a-typography-title :level="2">About Page</a-typography-title>
    </span>
    <a-divider></a-divider>
    <span>
        <strong>API BASE URL:</strong> {{ configs.BASE_URL }}
    </span>
    <br>
    <span>
        <strong>Front End Environment:</strong> {{ configs.ENV }}
    </span>
    <a-divider></a-divider>
    <a-typography>Simulate Errors</a-typography>
    <a-button @click="simulate400">400</a-button>
</template>
<script setup>
    import { computed } from '@vue/reactivity';
    import http from '@/commons/http_common';


    const simulate400 = () => {
        http.get('/errorresponse/400');
    }


    var configs = computed(() => {
        return {
            BASE_URL: process.env.VUE_APP_API_BASE_URL,
            ENV: process.env.NODE_ENV,
        }
    });

    
    
</script>