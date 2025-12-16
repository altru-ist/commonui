import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    component: () => import('../layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('../modules/login/index.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('../layouts/AppLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../modules/dashboard/index.vue'),
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: 'owner-licenses',
        name: 'OwnerLicenses',
        component: () => import('../modules/owner-licenses/index.vue'),
        meta: {
          title: 'Owner Licenses'
        }
      },
      {
        path: 'license-types',
        name: 'LicenseTypes',
        component: () => import('../modules/license-types/index.vue'),
        meta: {
          title: 'License Types'
        }
      },
      {
        path: 'features',
        name: 'Features',
        component: () => import('../modules/features/index.vue'),
        meta: {
          title: 'Features'
        }
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('../modules/users/index.vue'),
        meta: {
          title: 'Users'
        }
      },
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('../modules/roles/index.vue'),
        meta: {
          title: 'Roles & Permissions'
        }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('../modules/settings/index.vue'),
        meta: {
          title: 'Settings'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

