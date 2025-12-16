<template>
  <div class="mx-auto max-md:p-4">
    <div class="grid gap-6 grid-cols-4 mb-6 max-xl:grid-cols-2 max-md:grid-cols-1 items-stretch">
      <CuiCard variant="custom" elevation="shadow" class="h-full">
        <div class="flex flex-col h-full">
          <div class="flex flex-col grow">
            <div class="flex items-center">
              <div class="rounded-full p-3 bg-blue-100 dark:bg-blue-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <h3 class="text-gray-900 dark:text-gray-100 text-sm font-medium leading-5 ml-3">Väntande betalningar</h3>
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-5 mt-3">Betalningar som väntar på hantering</p>
            <div class="flex items-end grow mt-3">
              <div class="text-gray-900 dark:text-gray-100 text-4xl font-bold leading-10">12</div>
            </div>
          </div>
          <div>
            <CuiButton variant="secondary-text" size="small">
              Hantera betalningar
              <span class="material-symbols-rounded ml-1">arrow_forward</span>
            </CuiButton>
          </div>
        </div>
      </CuiCard>

      <CuiCard variant="custom" elevation="shadow" class="h-full">
        <div class="flex flex-col h-full">
          <div class="flex flex-col grow">
            <div class="flex items-center">
              <div class="rounded-full p-3 bg-green-100 dark:bg-green-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-green-600 dark:text-green-400">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 class="text-gray-900 dark:text-gray-100 text-sm font-medium leading-5 ml-3">Barnkapacitet</h3>
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-5 mt-3">Över alla enheter</p>
            <div class="flex items-end grow mt-3">
              <div class="text-gray-900 dark:text-gray-100 text-4xl font-bold leading-10">
                342
                <span class="text-gray-500 dark:text-gray-400 text-xl leading-7 ml-1">/ 384</span>
              </div>
            </div>
          </div>
          <div>
            <CuiButton variant="secondary-text" size="small">
              Se detaljer
              <span class="material-symbols-rounded ml-1">arrow_forward</span>
            </CuiButton>
          </div>
        </div>
      </CuiCard>

      <CuiCard variant="custom" elevation="shadow" class="h-full">
        <div class="flex flex-col h-full">
          <div class="flex flex-col grow">
            <div class="flex items-center">
              <div class="rounded-full p-3 bg-orange-100 dark:bg-orange-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-orange-600 dark:text-orange-400">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 11h4"></path>
                  <path d="M12 16h4"></path>
                  <path d="M8 11h.01"></path>
                  <path d="M8 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-gray-900 dark:text-gray-100 text-sm font-medium leading-5 ml-3">Barnansökningar</h3>
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-5 mt-3">Ohanterade ansökningar</p>
            <div class="flex items-end grow mt-3">
              <div class="text-gray-900 dark:text-gray-100 text-4xl font-bold leading-10">23</div>
            </div>
          </div>
          <div>
            <CuiButton variant="secondary-text" size="small">
              Hantera ansökningar
              <span class="material-symbols-rounded ml-1">arrow_forward</span>
            </CuiButton>
          </div>
        </div>
      </CuiCard>

      <CuiCard variant="custom" elevation="shadow" class="h-full">
        <div class="flex flex-col h-full">
          <div class="flex flex-col grow">
            <div class="flex items-center">
              <div class="rounded-full p-3 bg-red-100 dark:bg-red-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-red-600 dark:text-red-400">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
              </div>
              <h3 class="text-gray-900 dark:text-gray-100 text-sm font-medium leading-5 ml-3">Nyligen uppsagda</h3>
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-5 mt-3">Lärare som sagt upp sig</p>
            <div class="flex items-end grow mt-3">
              <div class="text-gray-900 dark:text-gray-100 text-4xl font-bold leading-10">4</div>
            </div>
          </div>
          <div>
            <CuiButton variant="secondary-text" size="small">
              Hantera uppsägningar
              <span class="material-symbols-rounded ml-1">arrow_forward</span>
            </CuiButton>
          </div>
        </div>
      </CuiCard>
    </div>

    <CuiCard title="Welcome to Digital Rights" image-alt="Welcome">
      <p>This is your new application built with CommonUI.</p>
      <div class="mt-4">
        <CuiButton variant="primary" @click="showToast">Get Started</CuiButton>
      </div>
    </CuiCard>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <CuiCard title="Licenses" image-alt="Licenses">
        <p>Manage owner licenses and permissions.</p>
      </CuiCard>
      <CuiCard title="Features" image-alt="Features">
        <p>Configure application features and settings.</p>
      </CuiCard>
      <CuiCard title="Accounts" image-alt="Accounts">
        <p>Manage user accounts and roles.</p>
      </CuiCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast, CuiCard, CuiButton } from '@ist/commonui-components'

const toast = useToast()

const showToast = () => {
  toast.add({
    severity: 'success',
    summary: 'Welcome!',
    detail: 'Welcome to Digital Rights Management System',
    life: 3000
  })
}
</script>

