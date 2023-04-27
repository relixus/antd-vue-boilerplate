<template>
    <span>
        <strong>API BASE URL:</strong> {{ configs.BASE_URL }}
    </span>
    <br>
    <span>
        <strong>Front End Environment:</strong> {{ configs.ENV }}
    </span>
    
</template>
<script setup>
    import { computed } from '@vue/reactivity';

    var configs = computed(() => {
        return {
            BASE_URL: process.env.VUE_APP_API_BASE_URL,
            ENV: process.env.NODE_ENV,
        }
    });
</script>