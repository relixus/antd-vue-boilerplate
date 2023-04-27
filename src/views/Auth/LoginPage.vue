<template>
    <a-row type="flex" style="padding-top: 100px; ">
        <a-col :flex="2"></a-col>
        <a-col :flex="2" style="background-color: white; z-index: 100;">
            <div style="border: 1px solid #ddd; padding: 10px;">
                <div style="text-align: center;">
                    <a-typography-title :level="3">Login</a-typography-title>
                </div>
                <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }" style="z-index: 100;">
                    <a-form-item label="Username">
                        <a-input v-model:value="credentials.username" placeholder="Username" />
                    </a-form-item>
                    <a-form-item v-model:value="credentials.password" label="Password">
                        <a-input-password placeholder="Password" />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
                        <a-button type="primary" html-type="submit" @click.prevent="login">
                            Log in
                        </a-button>
                    </a-form-item>
                    <a-typography-text style="margin-left: 100px;" type="danger">{{ negativeMessage }}</a-typography-text>
                </a-form>
            </div>
        </a-col>
        <a-col :flex="2"></a-col>
    </a-row>
</template>
<script setup>
    import { useAuthStore } from '@/store/auth';
    import router from '@/router';
    import { ref } from 'vue';

    const authStore = useAuthStore();
    
    const negativeMessage = ref('');

    const credentials = ref({
        username: '',
        password: ''
    } );
    
    const login = () => {
        const result = authStore.attemptLogIn({ username: credentials.value.username, password: credentials.value.password });
        if (result.success) {
            router.push({ name: 'Home' });
        }
        else{
            negativeMessage.value = result.message;
        }
    }

</script>