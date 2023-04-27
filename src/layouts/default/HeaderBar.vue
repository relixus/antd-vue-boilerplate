<template>
    <a-row justify="end">

        <div>
            
            <a-avatar :size="large">
                <template #icon>
                    <user-outlined />
                </template>
            </a-avatar>
            <span style="margin-left: 5px;">
                <a-dropdown>
                    
                    <a class="ant-dropdown-link" style="color: white;">
                        {{ currentUser.fullname  }}
                        <down-outlined />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="1">
                               <a href="#">Reset Password</a>
                            </a-menu-item>
                            <a-menu-item key="1">
                               <a href="#" @click.prevent="logout">Log Out</a>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </span>
        </div>
    </a-row>
</template>
<script setup>
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';
import { computed } from 'vue';
import { useAuthStore } from '@/store/auth';
import router from '@/router';

const authStore = useAuthStore();

const currentUser = computed(() => {
    return authStore.user;
});

const logout = () => {
    authStore.logOut();
    router.push({ name: 'Login' });
}
</script>