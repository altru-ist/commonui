<template>
  <CuiApp :breadcrumb-items="breadcrumbs">
    <template #menu>
      <CuiMainMenu
        title="CommonUI Web Template"
        subtitle="Template for CommonUI"
        :items="menuItems"
        :collapsed="isMenuCollapsed"
        :active-item-id="activeMenuItemId"
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
        :avatar-src="userAvatar"
        login-status="logged-in"
        :avatar-menu-items="avatarMenuItems"
        @search-complete="handleSearch"
      >
        <template #actions>
          <CuiButton variant="secondary-text" size="medium" icon-only aria-label="Notifications">
            <span class="material-symbols-rounded">notifications</span>
          </CuiButton>
          <CuiThemeToggle variant="secondary-text" icon-only />
        </template>
      </CuiHeader>
    </template>

    <router-view />
  </CuiApp>

  <CuiToast position="top-right" />
  <ModalsPortal />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from '@ist/commonui-components'
import type { MenuEntry } from '@ist/commonui-components'

// BreadcrumbItem type definition
interface BreadcrumbItem {
  label: string
  href: string
}

// User profile interface
interface UserProfile {
  id: string
  name: string
  role: string
  avatar: string
  email: string
}

const router = useRouter()
const route = useRoute()
const toast = useToast()

const isMenuCollapsed = ref(false)
const userProfile = ref<UserProfile | null>(null)

// Load user profile from localStorage on mount
onMounted(() => {
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    try {
      userProfile.value = JSON.parse(savedUser)
    } catch (error) {
      console.error('Failed to parse user profile from localStorage', error)
    }
  }
})

// Compute avatar URL based on user profile name
const userAvatar = computed(() => {
  if (userProfile.value) {
    const encodedName = encodeURIComponent(userProfile.value.name)
    return `https://ui-avatars.com/api/?name=${encodedName}&background=6366f1&color=fff&size=42`
  }
  return 'https://ui-avatars.com/api/?name=User&background=6366f1&color=fff&size=42'
})

// Map route names to menu item IDs
const routeToMenuIdMap: Record<string, string> = {
  Dashboard: 'dashboard',
  OwnerLicenses: 'owner-licenses',
  LicenseTypes: 'license-types',
  Features: 'features',
  Users: 'users',
  Roles: 'roles',
  Settings: 'settings'
}

// Compute active menu item ID based on current route
const activeMenuItemId = computed(() => {
  return routeToMenuIdMap[route.name as string] || 'dashboard'
})

// Compute breadcrumbs based on current route
const breadcrumbs = computed<BreadcrumbItem[]>(() => {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ]

  if (route.meta?.title) {
    items.push({
      label: route.meta.title as string,
      href: route.path
    })
  }

  return items
})

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
  // Map menu item IDs to route paths
  const menuIdToRouteMap: Record<string, string> = {
    'dashboard': '/dashboard',
    'owner-licenses': '/owner-licenses',
    'license-types': '/license-types',
    'features': '/features',
    'users': '/users',
    'roles': '/roles',
    'settings': '/settings'
  }

  if (item.type === 'item' && item.id) {
    const routePath = menuIdToRouteMap[item.id]
    if (routePath) {
      router.push(routePath)
    }
  }
}

// Avatar menu items
const avatarMenuItems = computed(() => [
  {
    label: userProfile.value?.name || 'Profile',
    icon: 'person',
    disabled: true,
    command: () => {
      // Disabled - just shows user name
    }
  },
  {
    separator: true
  },
  {
    label: 'Profile Settings',
    icon: 'person',
    command: () => {
      toast.add({
        severity: 'info',
        summary: 'Profile',
        detail: `Opening ${userProfile.value?.name || 'user'} profile...`,
        life: 3000
      })
    }
  },
  {
    label: 'Settings',
    icon: 'settings',
    command: () => {
      router.push('/settings')
    }
  },
  {
    separator: true
  },
  {
    label: 'Logout',
    icon: 'logout',
    command: () => {
      handleLogout()
    }
  }
])

const handleSearch = (event: { originalEvent: Event; query: string }) => {
  console.log('Search query:', event.query)
  toast.add({
    severity: 'info',
    summary: 'Search',
    detail: `Searching for: ${event.query}`,
    life: 3000
  })
}

const handleLogout = () => {
  // Clear authentication tokens and user data
  localStorage.removeItem('authToken')
  localStorage.removeItem('user')
  userProfile.value = null
  
  toast.add({
    severity: 'success',
    summary: 'Logged Out',
    detail: 'You have been successfully logged out.',
    life: 3000
  })

  // Redirect to login page
  router.push('/login')
}
</script>

