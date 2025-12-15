<template>
  <CuiApp :breadcrumb-items="breadcrumbs">
    <template #menu>
      <CuiMainMenu
        title="Digital Rights"
        subtitle="Management System"
        :items="menuItems"
        :collapsed="isMenuCollapsed"
        active-item-id="dashboard"
        @item-click="handleMenuItemClick"
        @toggle-collapse="handleMenuToggle"
      />
    </template>

    <template #header>
      <CuiHeader
        :breadcrumb-items="breadcrumbs"
        :show-search="true"
        search-placeholder="Search..."
        :avatar-interactive="true"
        avatar-src=""
        login-status="logged-in"
        @avatar-click="handleAvatarClick"
        @search-complete="handleSearch"
      >
        <template #actions>
          <CuiButton variant="secondary-text" size="medium" icon-only aria-label="Notifications">
            <span class="material-symbols-rounded">notifications</span>
          </CuiButton>
          <CuiThemeToggle />
        </template>
      </CuiHeader>
    </template>

    <div class="main-content">
      <div class="dashboard-cards">
        <div class="stat-card">
          <div class="stat-card-content">
            <div class="stat-card-body">
              <div class="stat-header">
                <div class="stat-icon-wrapper stat-icon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 class="stat-title">Väntande betalningar</h3>
              </div>
              <p class="stat-description">Betalningar som väntar på hantering</p>
              <div class="stat-value-wrapper">
                <div class="stat-value">12</div>
              </div>
            </div>
            <button class="stat-action-button">
              Hantera betalningar
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
                <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-card-content">
            <div class="stat-card-body">
              <div class="stat-header">
                <div class="stat-icon-wrapper stat-icon-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 class="stat-title">Barnkapacitet</h3>
              </div>
              <p class="stat-description">Över alla enheter</p>
              <div class="stat-value-wrapper">
                <div class="stat-value">
                  342
                  <span class="stat-value-secondary">/ 384</span>
                </div>
              </div>
            </div>
            <button class="stat-action-button">
              Se detaljer
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
                <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-card-content">
            <div class="stat-card-body">
              <div class="stat-header">
                <div class="stat-icon-wrapper stat-icon-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon">
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="M12 11h4"></path>
                    <path d="M12 16h4"></path>
                    <path d="M8 11h.01"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                </div>
                <h3 class="stat-title">Barnansökningar</h3>
              </div>
              <p class="stat-description">Ohanterade ansökningar</p>
              <div class="stat-value-wrapper">
                <div class="stat-value">23</div>
              </div>
            </div>
            <button class="stat-action-button">
              Hantera ansökningar
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
                <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-card-content">
            <div class="stat-card-body">
              <div class="stat-header">
                <div class="stat-icon-wrapper stat-icon-red">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="22" x2="16" y1="11" y2="11"></line>
                  </svg>
                </div>
                <h3 class="stat-title">Nyligen uppsagda</h3>
              </div>
              <p class="stat-description">Lärare som sagt upp sig</p>
              <div class="stat-value-wrapper">
                <div class="stat-value">4</div>
              </div>
            </div>
            <button class="stat-action-button">
              Hantera uppsägningar
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
                <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
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
  </CuiApp>

  <CuiToast position="top-right" />
  <ModalsPortal />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from '@ist/commonui-components'
import type { MenuEntry } from '@ist/commonui-components'

// BreadcrumbItem type definition
interface BreadcrumbItem {
  label: string
  href: string
}

const toast = useToast()

const isMenuCollapsed = ref(false)

const breadcrumbs = ref<BreadcrumbItem[]>([
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' }
])

const menuItems: MenuEntry[] = [
  {
    id: 'dashboard',
    type: 'item',
    label: 'Dashboard',
    icon: 'dashboard'
  },
  {
    id: 'licenses',
    type: 'group',
    label: 'Licenses',
    icon: 'description',
    expanded: false,
    children: [
      {
        id: 'owner-licenses',
        type: 'item',
        label: 'Owner Licenses',
        icon: 'badge'
      },
      {
        id: 'license-types',
        type: 'item',
        label: 'License Types',
        icon: 'category'
      }
    ]
  },
  {
    id: 'features',
    type: 'item',
    label: 'Features',
    icon: 'tune',
    badge: '3'
  },
  {
    id: 'accounts',
    type: 'group',
    label: 'Accounts',
    icon: 'people',
    expanded: false,
    children: [
      {
        id: 'users',
        type: 'item',
        label: 'Users',
        icon: 'person'
      },
      {
        id: 'roles',
        type: 'item',
        label: 'Roles & Permissions',
        icon: 'admin_panel_settings'
      }
    ]
  },
  {
    id: 'settings',
    type: 'item',
    label: 'Settings',
    icon: 'settings'
  }
]


const handleMenuToggle = (collapsed: boolean) => {
  isMenuCollapsed.value = collapsed
}

const handleMenuItemClick = (item: MenuEntry) => {
  // Update breadcrumbs based on selected menu item
  const newBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ]

  if (item.type === 'item') {
    newBreadcrumbs.push({
      label: item.label,
      href: `/${item.id}`
    })
  }

  breadcrumbs.value = newBreadcrumbs
}

const handleAvatarClick = () => {
  toast.add({
    severity: 'info',
    summary: 'Profile',
    detail: 'Opening user profile...',
    life: 3000
  })
}

const handleSearch = (event: { originalEvent: Event; query: string }) => {
  console.log('Search query:', event.query)
  toast.add({
    severity: 'info',
    summary: 'Search',
    detail: `Searching for: ${event.query}`,
    life: 3000
  })
}

const showToast = () => {
  toast.add({
    severity: 'success',
    summary: 'Welcome!',
    detail: 'Welcome to Digital Rights Management System',
    life: 3000
  })
}
</script>

<style scoped>
.main-content {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
}
</style>
