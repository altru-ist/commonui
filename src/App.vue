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

.dashboard-cards {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 24px;
}

.stat-card {
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
}

.stat-card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
}

.stat-card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.stat-header {
  display: flex;
  align-items: center;
}

.stat-icon-wrapper {
  border-radius: 9999px;
  padding: 12px;
}

.stat-icon-blue {
  background-color: rgb(219, 234, 254);
}

.stat-icon-green {
  background-color: rgb(220, 252, 231);
}

.stat-icon-orange {
  background-color: rgb(255, 237, 213);
}

.stat-icon-red {
  background-color: rgb(254, 226, 226);
}

.stat-icon {
  width: 24px;
  height: 24px;
}

.stat-icon-blue .stat-icon {
  color: rgb(37, 99, 235);
  stroke: rgb(37, 99, 235);
}

.stat-icon-green .stat-icon {
  color: rgb(22, 163, 74);
  stroke: rgb(22, 163, 74);
}

.stat-icon-orange .stat-icon {
  color: rgb(234, 88, 12);
  stroke: rgb(234, 88, 12);
}

.stat-icon-red .stat-icon {
  color: rgb(220, 38, 38);
  stroke: rgb(220, 38, 38);
}

.stat-title {
  color: rgb(17, 24, 39);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 12px;
}

.stat-description {
  color: rgb(107, 114, 128);
  font-size: 14px;
  line-height: 20px;
  margin-top: 12px;
}

.stat-value-wrapper {
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  margin-top: 12px;
}

.stat-value {
  color: rgb(17, 24, 39);
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
}

.stat-value-secondary {
  color: rgb(107, 114, 128);
  font-size: 20px;
  line-height: 28px;
  margin-left: 4px;
}

.stat-action-button {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
  color: rgb(100, 116, 139);
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-action-button:hover {
  color: rgb(71, 85, 105);
}

.arrow-icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 1200px) {
  .dashboard-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }

  .dashboard-cards {
    grid-template-columns: 1fr;
  }
}
</style>
