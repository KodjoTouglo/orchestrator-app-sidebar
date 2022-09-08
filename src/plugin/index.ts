import  SideBar  from '@/components/SideBar.vue'


const SideBarPlugin = {
  install(Vue: any) {
    Vue.component("SideBar", SideBar);
  }
}

if (typeof window !== "undefined" && window.Vue){
  window.Vue.use(SideBarPlugin);
}

export default SideBarPlugin;
