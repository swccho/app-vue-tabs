import VueTab from "@/components/VueTab.vue";

const TabPlugin = {
install(Vue){
    Vue.component('VueTab' , VueTab)
}
}

export default TabPlugin;