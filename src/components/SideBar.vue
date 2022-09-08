<template>
  <div class="app-bar">
    <div
        class="sidebar-app"
        :class="{ activeSide: !showside, disableSide: showside }"
    >
      <nav class="nav-app">
        <ul>
          <li v-for="menu in menus" :key="menu.id">
            <sidebar-items
                :title="menu.titleMenu"
                :link="menu.link"
                :icon="menu.menuIcon"
                :subMenus="menu.subMenus"
                :showmenu="showmenu"
                :isOpen="isOpen"
                :id="menu.id">
            </sidebar-items>
          </li>
        </ul>
      </nav>
    </div>
    <div class="section">
      <button class="toggle-btn" @click.prevent="toggleSidebar">
        <span class="material-icons" v-if="showside">keyboard_arrow_left</span>
        <span class="material-icons" v-if="!showside">keyboard_arrow_right</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SidebarItems from "@/components/SidebarItems.vue";

export default Vue.extend({
  name: "SideBar",
  components: {
    SidebarItems,
  },
  props:{
    /**
     * Sets the menus and submenus in sidebar
     */
    menus:{
      type: Array,
      default: () => []
    },
    /**
     * Submenu open close state
     */
    isOpen:{
      type: Boolean,
      default: true
    },
    /**
     * Show menus
     */
    showmenu:{
      type: Boolean,
      default: true,
    },
    /**
     * Show SideBar
     */
    showSide:{
      type: Boolean,
      default: true,
    },
    /**
     * Sets icons for menus and submenus
     */
    icon:{
      type: String,
      default: ""
    },
    /**
     * Sets link (href tag) for the menus and submenus in sidebar
     */
    link:{
      type: String,
      default: ""
    },
    /**
     * Menu title
     */
    title:{
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showside: this.showSide,
    };
  },
  methods: {
    /**
     * Toggle sidebar
     */
    toggleSidebar(): any {
      this.showside = !this.showside;
      console.log(this.showside);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "sidebar.scss";
</style>
