# Agent Rules for CommonUI Web Template

This document outlines the rules and conventions that AI agents and developers must follow when working on this project.

## Project Structure

### Module-Based Architecture
- **All view pages must be organized as modules** under `src/modules/`
- Each module is a folder containing an `index.vue` file as the default page
- Module folder names should use kebab-case (e.g., `owner-licenses`, `license-types`)
- Example structure:
  ```
  src/modules/
    dashboard/
      index.vue
    owner-licenses/
      index.vue
  ```

### File Organization
- Router configuration: `src/router/index.ts`
- Main application: `src/App.vue`
- Entry point: `src/main.ts`
- Global styles: `src/style.css` and `tailwind.css`

## Styling Rules

### Tailwind CSS 4 Only
- **MUST use Tailwind CSS 4 utility classes exclusively** for all styling
- **NEVER use custom CSS** in `<style>` blocks or separate CSS files
- **NEVER use inline styles** unless absolutely necessary for dynamic values
- All styling must be done through Tailwind utility classes

### Tailwind Conventions
- Use responsive breakpoints: `max-md:`, `max-xl:`, etc.
- Use semantic color classes: `text-gray-900`, `bg-blue-100`, etc.
- Use spacing utilities: `p-8`, `gap-6`, `mt-4`, etc.
- Use layout utilities: `flex`, `grid`, `max-w-[1400px]`, etc.

### Common Patterns
- Page container: `p-8 max-w-[1400px] mx-auto max-md:p-4`
- Grid layouts: `grid gap-6 grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1`
- Cards: `bg-white rounded-lg shadow-sm`
- Icons: `w-6 h-6` for 24px icons, `w-4 h-4` for 16px icons

## Vue Router

### Route Configuration
- All routes must be defined in `src/router/index.ts`
- Routes must use lazy loading: `component: () => import('../modules/[module-name]/index.vue')`
- Each route must have:
  - `path`: URL path (kebab-case)
  - `name`: Route name (PascalCase)
  - `component`: Lazy-loaded module component
  - `meta.title`: Page title for breadcrumbs

### Navigation
- Use `router.push()` for programmatic navigation
- Menu items must map to routes via `menuIdToRouteMap`
- Active menu items are determined by route name via `routeToMenuIdMap`

## Vue.js Conventions

### Composition API
- **MUST use Vue 3 Composition API** with `<script setup lang="ts">`
- Use `ref()` for reactive primitives
- Use `computed()` for derived state
- Use `watch()` when needed for side effects

### Component Structure
- Template first, then script, no style blocks
- Use TypeScript for all scripts
- Import types from `@ist/commonui-components` when available

### CommonUI Components
- Use CommonUI components from `@ist/commonui-components`
- Components are globally registered, no need to import
- Use proper component props and events as per CommonUI documentation
- **Prefer CommonUI components over custom HTML elements** (e.g., use `CuiCard` instead of custom divs, `CuiButton` instead of button elements)

### CommonUI Best Practices

#### CuiCard Component
- **NEVER add padding to the root level div inside CuiCard**
- Apply padding to child elements instead (e.g., content wrappers, button containers)
- Use `variant="custom"` for custom layouts with full control over content
- Use `elevation="shadow"` or `elevation="border"` for card styling
- For equal-height cards in grids, add `h-full` class to each `CuiCard` and `items-stretch` to the grid container

#### Grid Layouts with Cards
- When creating grids with cards, ensure equal height by:
  - Adding `items-stretch` to the grid container
  - Adding `h-full` class to each `CuiCard` component
- Example: `<div class="grid gap-6 grid-cols-4 items-stretch"><CuiCard class="h-full">...</CuiCard></div>`

#### Dark Mode Support
- Always add dark mode variants using Tailwind `dark:` prefix
- Common patterns:
  - Backgrounds: `bg-white dark:bg-gray-800`
  - Text: `text-gray-900 dark:text-gray-100` for headings, `text-gray-500 dark:text-gray-400` for body text
  - Shadows: `shadow-sm dark:shadow-gray-900/20`
  - Colored backgrounds: `bg-blue-100 dark:bg-blue-900/30`
  - Colored text/icons: `text-blue-600 dark:text-blue-400`

## TypeScript Rules

### Type Safety
- **Always use TypeScript** - no JavaScript files
- Define interfaces for complex objects
- Use type annotations for function parameters and return types
- Leverage Vue's type inference where appropriate

### Type Definitions
- Define interfaces in the same file or create shared type files
- Use `Record<string, string>` for key-value mappings
- Use `as string` for type assertions when necessary (route names, etc.)

## Code Quality

### Naming Conventions
- Components: PascalCase (e.g., `Dashboard.vue`)
- Files: kebab-case (e.g., `owner-licenses/index.vue`)
- Variables/functions: camelCase (e.g., `handleMenuItemClick`)
- Constants: UPPER_SNAKE_CASE or camelCase with `const`
- Types/Interfaces: PascalCase (e.g., `BreadcrumbItem`)

### Code Organization
- Keep components focused and single-purpose
- Extract reusable logic into composables when needed
- Group related functionality together
- Use descriptive variable and function names

### Best Practices
- Use `computed` for derived state instead of methods
- Use `ref` for mutable reactive state
- Avoid unnecessary re-renders
- Keep template logic minimal - move complex logic to script

## File Structure Rules

### Module Files
- Each module folder contains `index.vue` as the entry point
- Additional components can be added in the same module folder
- Module-specific composables/types can be added in the module folder

### Import Paths
- Use relative paths for local imports
- Use `@/` alias for `src/` directory (if configured)
- Use package names for external dependencies

## Common Patterns

### Breadcrumbs
- Breadcrumbs are computed based on current route
- Always include "Home" as the first breadcrumb
- Add route meta title as the second breadcrumb

### Menu Items
- Menu items are defined in `App.vue`
- Menu item IDs must match route paths (kebab-case)
- Use `active-item-id` prop to highlight current route

### Toast Notifications
- Use `useToast()` composable from CommonUI
- Show user feedback for actions
- Use appropriate severity levels: `info`, `success`, `warn`, `error`

## Prohibited Practices

### ❌ DO NOT:
- Create custom CSS files or `<style>` blocks
- Use inline styles (except for dynamic values)
- Create view files outside the `modules/` directory
- Use Vue 2 Options API syntax
- Write JavaScript files (use TypeScript)
- Hardcode routes - use router navigation
- Create global CSS classes
- Use CSS preprocessors (SCSS, Less, etc.)
- Add padding to the root level div inside `CuiCard` components
- Use custom HTML elements when CommonUI components are available

### ✅ DO:
- Use Tailwind utility classes for all styling
- Organize pages as modules with `index.vue`
- Use Vue Router for navigation
- Use TypeScript for type safety
- Use Composition API with `<script setup>`
- Follow the established folder structure
- Use CommonUI components

## Examples

### Correct Module Structure
```vue
<template>
  <div class="p-8 max-w-[1400px] mx-auto max-md:p-4">
    <CuiCard title="Page Title">
      <p>Content here</p>
    </CuiCard>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>
```

### Correct Route Definition
```typescript
{
  path: '/my-page',
  name: 'MyPage',
  component: () => import('../modules/my-page/index.vue'),
  meta: {
    title: 'My Page'
  }
}
```

### Correct Styling
```vue
<div class="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
  <span class="text-gray-900 text-lg font-semibold">Title</span>
</div>
```

### Correct CuiCard Usage
```vue
<!-- ✅ CORRECT: No padding on root div, padding on child elements -->
<CuiCard variant="custom" elevation="shadow" class="h-full">
  <div class="flex flex-col h-full">
    <div class="p-6">
      <!-- Content with padding -->
    </div>
    <div class="px-6 pb-6">
      <!-- Button area with padding -->
    </div>
  </div>
</CuiCard>

<!-- ❌ INCORRECT: Padding on root div -->
<CuiCard variant="custom" elevation="shadow">
  <div class="p-6">
    <!-- Content -->
  </div>
</CuiCard>
```

### Correct Grid with Equal Height Cards
```vue
<div class="grid gap-6 grid-cols-4 items-stretch">
  <CuiCard variant="custom" elevation="shadow" class="h-full">
    <!-- Card content -->
  </CuiCard>
  <CuiCard variant="custom" elevation="shadow" class="h-full">
    <!-- Card content -->
  </CuiCard>
</div>
```

## Summary

1. **Modules**: All pages in `src/modules/[module-name]/index.vue`
2. **Styling**: Tailwind 4 utility classes only, no custom CSS
3. **Router**: Vue Router with lazy-loaded modules
4. **Vue**: Composition API with `<script setup lang="ts">`
5. **TypeScript**: Always use TypeScript, define types
6. **Components**: Use CommonUI components from `@ist/commonui-components`

Follow these rules consistently to maintain code quality and project structure.

