<template>
  <div class="w-full max-w-4xl">
    <div class="text-center mb-8">
      <h1 class="text-gray-900 dark:text-gray-100 text-3xl font-bold leading-8 mb-2">Select Profile</h1>
      <p class="text-gray-500 dark:text-gray-400 text-base leading-6">Choose a profile to sign in</p>
    </div>

    <div class="grid gap-6 grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 items-stretch">
      <CuiCard
        v-for="profile in profiles"
        :key="profile.id"
        variant="custom"
        elevation="shadow"
        class="h-full cursor-pointer transition-all hover:shadow-md dark:hover:shadow-gray-900/30"
        @click="handleProfileSelect(profile)"
      >
        <div class="flex flex-col items-center p-6 h-full">
          <div class="rounded-full p-4 bg-blue-100 dark:bg-blue-900/30 mb-4">
            <img
              :src="profile.avatar"
              :alt="profile.name"
              class="w-16 h-16 rounded-full"
            />
          </div>
          <h3 class="text-gray-900 dark:text-gray-100 text-lg font-semibold leading-6 mb-1">
            {{ profile.name }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-5 text-center mb-4">
            {{ profile.role }}
          </p>
          <CuiButton
            variant="primary"
            size="medium"
            :loading="isLoading && selectedProfileId === profile.id"
            class="w-full mt-auto"
            @click.stop="handleProfileSelect(profile)"
          >
            Sign In
          </CuiButton>
        </div>
      </CuiCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from '@ist/commonui-components'

interface Profile {
  id: string
  name: string
  role: string
  avatar: string
  email: string
}

const router = useRouter()
const toast = useToast()

const isLoading = ref(false)
const selectedProfileId = ref<string | null>(null)

const profiles: Profile[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Administrator',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff&size=128',
    email: 'john.doe@example.com'
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Manager',
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=10b981&color=fff&size=128',
    email: 'jane.smith@example.com'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    role: 'Developer',
    avatar: 'https://ui-avatars.com/api/?name=Bob+Johnson&background=f59e0b&color=fff&size=128',
    email: 'bob.johnson@example.com'
  },
  {
    id: '4',
    name: 'Alice Williams',
    role: 'Designer',
    avatar: 'https://ui-avatars.com/api/?name=Alice+Williams&background=ef4444&color=fff&size=128',
    email: 'alice.williams@example.com'
  }
]

const handleProfileSelect = async (profile: Profile) => {
  selectedProfileId.value = profile.id
  isLoading.value = true
  
  try {
    // Simulate login API call
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Store profile data to localStorage
    localStorage.setItem('authToken', `token-${profile.id}`)
    localStorage.setItem('user', JSON.stringify(profile))
    
    toast.add({
      severity: 'success',
      summary: 'Login Successful',
      detail: `Welcome back, ${profile.name}!`,
      life: 3000
    })
    
    // Redirect to dashboard
    router.push('/dashboard')
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Login Failed',
      detail: 'Unable to sign in. Please try again.',
      life: 3000
    })
  } finally {
    isLoading.value = false
    selectedProfileId.value = null
  }
}
</script>

