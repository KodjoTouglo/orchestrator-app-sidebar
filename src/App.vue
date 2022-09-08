<template>
  <div>
    <SideBar
      :menus="menus"
      :showmenu="showmenu"
      :isOpen="isOpen"
      :showSide="showSide"
    >
    </SideBar>
    <router-view></router-view>
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
              title: "test-0",
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

<style lang="scss">
@import "app.scss";
</style>
