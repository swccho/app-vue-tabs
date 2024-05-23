<template>

  <div class="main-body">

    <div class="hero-container">
      <h1 class="hero-title">Vue Tab</h1>


<div class="text-center">
  <div class="nav-tabs">
    <div class="nav-tab" v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === tab }" @click="changeTab(tab)" :data-target="tab.target">{{ tab.label }}</div>
    <div class="underline" :style="{ width: underlineWidth, left: underlineLeft }"></div>
  </div>
</div>

      <div v-for="(content, index) in contents" :key="index" :id="content.id" class="tab-content" :class="{ active: activeTab?.target === content.id }">
        <h1>{{ content.title }}</h1>
        <p>{{ content.text }}</p>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: 'VueTab',
  data(){
    return{
      tabs: [
        { label: 'Home', target: 'home' },
        { label: 'About', target: 'about' },
        { label: 'Contact', target: 'contact' },
      ],
      contents: [
        { id: 'home', title: 'Welcome to the Home Page', text: 'This is the home section.' },
        { id: 'about', title: 'About Us', text: 'This is the about section.' },
        { id: 'contact', title: 'Contact Us', text: 'This is the contact section.' },
      ],
      activeTab: null,
      underlineWidth: 0,
      underlineLeft: 0
    }
  },
  mounted() {
    this.activeTab = this.tabs[0];
    this.updateUnderline();
    window.addEventListener('resize', this.updateUnderline);
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
      console.log(this.activeTab,'a')
      console.log(this.contents,'c')
      this.updateUnderline();
    },
    updateUnderline() {
      const activeTabIndex = this.tabs.findIndex(tab => tab === this.activeTab);
      const activeTabElement = this.$el.querySelector(`.nav-tab:nth-child(${activeTabIndex + 1})`);
      if (activeTabElement) {
        this.underlineWidth = `${activeTabElement.offsetWidth}px`;
        this.underlineLeft = `${activeTabElement.offsetLeft}px`;
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateUnderline);
  }
};

</script>

