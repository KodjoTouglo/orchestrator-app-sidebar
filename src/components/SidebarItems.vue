<template>
  <div>
    <div v-if="!subMenus">
      <div>
        <router-link :to="link" class="sidebar-link-app" :id="id" append exact>
          <span class="sidebar-link-title">{{ title }}</span>
        </router-link>
      </div>
    </div>
    <div v-else>
      <div class="containSubmenu">
        <a
          href=""
          :id="id"
          class="sidebar-link-app sidebar-link-app-left-align"
          :class="{ activeMenu: showMenu || childActive }"
          @click.prevent="showSubMenu"
        >
          <div class="sidebar-link-app-left">
            <div
              v-if="subMenus"
              class="vsm--arrow"
              :class="{ 'vsm--arrow_open': showMenu }"
            >
            </div>
          </div>
          <span class="sidebar-link-containSubMenu-title">{{ title }} </span>
        </a>
        <transition
          name="expand"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave"
        >
          <div v-show="showMenu">
            <ul :id="id">
              <li
                v-for="(subMenu, index) in subMenus"
                :key="index"
                @click="activeChildMenu()"
              >
                <sidebar-items
                  :title="subMenu.title"
                  :link="subMenu.link"
                  :icon="subMenu.icon"
                  :id="subMenu.id"
                  :subMenus="subMenu.subMenus"
                  :showmenu="showmenu"
                  :isOpen="isOpen"
                >
                </sidebar-items>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SidebarItems",
  props: ["title", "link", "icon", "subMenus", "showmenu", "isOpen", "id"],
  data() {
    return {
      showMenu: this.showmenu,
      childActive: false,
      subMenusO: this.subMenus,
    };
  },
  methods: {
    enter(el: any) {
      el.style.height = "auto";
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el: any) {
      el.style.height = "auto";
    },
    leave(el: any) {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    },
    showSubMenu() {
      this.showMenu = !this.showMenu;
    },
    activeChildMenu() {
      this.childActive = true;
    },
  },
  watch: {
    $route() {
      this.childActive = false;
    },
  },
  mounted() {
    this.subMenusO?.filter((subMenu: any) => {
      if (window.location.pathname == subMenu.link) {
        return this.activeChildMenu();
      } else {
        return;
      }
    });
  },
});
</script>

<style lang="scss">
@import "sidebaritems.scss";
</style>
