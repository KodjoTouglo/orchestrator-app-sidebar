## orchestrator-app-sidebar
A Vue 2 plugin to create a sidebar menu.

## Dependencies
The plugin was created with `Vue 2` and is designed to work with `vue-router` and `fontawesome-free`.


| Name                            | Version  |
|---------------------------------|----------|
| `vue`                           | `2.6.14` |
| `vue-router`                    | `3.5.1`  |
| `@fortawesome/fontawesome-free` | `6.0.0`  |

## Installation
```bash
npm install orchestrator-app-sidebar
```

## Global registration

*main.ts:*
```ts
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SideBar from "orchestrator-app-sidebar";
import "orchestrator-app-sidebar/dist/SideBar.css";
import "orchestrator-app-sidebar/src/app.scss";
import "orchestrator-app-sidebar/src/components/sidebaritems.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;
Vue.use(SideBar);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


```

## Local registration

*App.vue:*
```vue
<script>
import SideBar from "orchestrator-app-sidebar";
import "orchestrator-app-sidebar/dist/SideBar.css";
import "orchestrator-app-sidebar/src/app.scss";
import "orchestrator-app-sidebar/src/components/sidebaritems.scss";

export default {
  components: {
    SideBar
  }
}
</script>
```

## Basic usage

*App.vue:*
```vue
<template>
  <div>
    <side-bar
      :menus="menus"
      :showmenu="showmenu"
      :isOpen="isOpen"
      :showSide="showSide"
    >
    </side-bar>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      menus: [
        {
          link: "/settingsOrchestre",
          titleMenu: "SettingsOrchestre",
          menuIcon: "fa-face",
        },
        {
          link: "/featuresOrchestre",
          titleMenu: "Features",
          menuIcon: "streetview",
          subMenus: [
            {
              title: "PagesOrchestre",
              link: "/pagesOrchestre",
              icon: "streetview",
            },
            {
              title: "ElementsOrchestre",
              link: "/elementsOrchestre",
              icon: "streetview",
            },
          ],
        },
        {
          link: "/ServicesOrchestre",
          titleMenu: "Services",
          menuIcon: "face",
          subMenus: [
            {
              title: "App Design Orchestre",
              link: "/app-designOrchestre",
              icon: "account_circle",
            },
            {
              title: "Web Design Orchestre",
              link: "/web-designOrchestre",
              icon: "work",
            },
          ],
        },
        {
          link: "/OverviewOrchestre",
          titleMenu: "OverviewOrchestre",
          menuIcon: "settings",
        },
        {
          link: "/Test",
          titleMenu: "Test",
          menuIcon: "settings",
          subMenus: [
            {
              title: "Test 0",
              link: "/test-0",
              icon: "account_circle",
            },
            {
              title: "Test 1",
              link: "/test-1",
              icon: "work",
            },
          ],
        },
      ],
      showmenu: false,
      isOpen: false,
      showSide: true,
    };
  },
});
</script>

```

## Router config

*index.ts:*
```ts
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test-0",
    name: "Test",
    component: () => import("../views/TestZero.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

```

## How to fix typescript module has no type ?

*tsconfig.json:*
```json
"noImplicitAny": false,
"allowJs": true,
```
