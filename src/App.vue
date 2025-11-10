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

