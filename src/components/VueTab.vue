<template>

  <div class="main-body">
    <h1 class="main-header">Vue Tab</h1>

    <!--Theme one-->
    <div class="hero-container">

      <h3 class="theme-title">Theme one</h3>

      <div class="theme-one">
        <div class="text-center">
          <div class="nav-tabs">
            <div class="nav-tab" v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === tab }"
                 @click="changeTab(tab)" :data-target="tab.target">{{ tab.label }}
            </div>
            <div class="underline" :style="{ width: underlineWidth, left: underlineLeft }"></div>
          </div>
        </div>

        <div v-for="(content, index) in contents" :key="index" :id="content.id" class="tab-content"
             :class="{ active: activeTab?.target === content.id }">
          <h1>{{ content.title }}</h1>
          <p>{{ content.text }}</p>
        </div>
      </div>


    </div>


    <!--Theme two-->
    <div class="hero-container">

      <h3 class="theme-title">Theme two</h3>

      <div class="theme-two">
        <div class="text-center">
          <div class="nav-tabs2">
            <div class="nav-tab2" v-for="(tab, index) in tabs2" :key="index" :class="{ active: activeTab2 === tab }"
                 @click="changeTab2(tab)" :data-target="tab.target">{{ tab.label }}
            </div>
            <div class="background" :style="{ width: bgWidth, left: bgLeft }"></div>
          </div>
        </div>

        <div v-for="(content, index) in contents2" :key="index" :id="content.id" class="tab-content2"
             :class="{ active: activeTab2?.target === content.id }">
          <h1>{{ content.title }}</h1>
          <p>{{ content.text }}</p>
        </div>
      </div>


    </div>


    <!--Theme three-->
    <div class="hero-container">

      <h3 class="theme-title">Theme two</h3>

      <div class="theme-two">
        <div class="text-center">
          <div class="nav-tabs2">
            <div class="nav-tab2" v-for="(tab, index) in tabs2" :key="index" :class="{ active: activeTab2 === tab }"
                 @click="changeTab2(tab)" :data-target="tab.target">{{ tab.label }}
            </div>
            <div class="background" :style="{ width: bgWidth, left: bgLeft }"></div>
          </div>
        </div>

        <div v-for="(content, index) in contents2" :key="index" :id="content.id" class="tab-content2"
             :class="{ active: activeTab2?.target === content.id }">
          <h1>{{ content.title }}</h1>
          <p>{{ content.text }}</p>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: 'VueTab',
  data() {
    return {
      tabs: [
        {label: 'Home', target: 'home'},
        {label: 'About', target: 'about'},
        {label: 'Contact', target: 'contact'},
      ],
      contents: [
        {id: 'home', title: 'Welcome to the Home Page', text: 'This is the home section.'},
        {id: 'about', title: 'About Us', text: 'This is the about section.'},
        {id: 'contact', title: 'Contact Us', text: 'This is the contact section.'},
      ],

      tabs2: [
        {label: 'Home', target: 'home2'},
        {label: 'About', target: 'about2'},
        {label: 'Contact', target: 'contact2'},
      ],

      contents2: [
        {id: 'home2', title: 'Welcome to the Home Page', text: 'This is the home section.'},
        {id: 'about2', title: 'About Us', text: 'This is the about section.'},
        {id: 'contact2', title: 'Contact Us', text: 'This is the contact section.'},
      ],

      activeTab: null,
      underlineWidth: 0,
      underlineLeft: 0,

      activeTab2: null,
      bgWidth: 0,
      bgLeft: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.fixedHeader)


    this.activeTab = this.tabs[0];
    this.activeTab2 = this.tabs2[0];
    this.updateUnderline();
    window.addEventListener('resize', this.updateUnderline);

    this.updateBg();
    window.addEventListener('resize', this.updateBg);

  },
  methods: {

    /*Function to make the header position from normal to fixed */

    fixedHeader() {
      let header = document.querySelector('.main-header');
      if (window.scrollY > 100) {
        header.classList.add('fixed-header')
        header.classList.add('slide-bottom')
      } else {
        header.classList.remove('fixed-header')
        header.classList.remove('slide-bottom')
      }
    },


    changeTab(tab) {
      this.activeTab = tab;
      this.updateUnderline();
    },

    changeTab2(tab) {
      this.activeTab2 = tab;
      this.updateBg();
    },


    updateUnderline() {
      const activeTabIndex = this.tabs.findIndex(tab => tab === this.activeTab);
      const activeTabElement = this.$el.querySelector(`.nav-tab:nth-child(${activeTabIndex + 1})`);
      if (activeTabElement) {
        this.underlineWidth = `${activeTabElement.offsetWidth}px`;
        this.underlineLeft = `${activeTabElement.offsetLeft}px`;
      }
    },

    updateBg() {
      const activeTabIndex = this.tabs2.findIndex(tab => tab === this.activeTab2);
      const activeTabElement = this.$el.querySelector(`.nav-tab2:nth-child(${activeTabIndex + 1})`);

      if (activeTabElement) {
        this.bgWidth = `${activeTabElement.offsetWidth}px`;
        this.bgLeft = `${activeTabElement.offsetLeft}px`;
        console.log(activeTabElement, 'ac')
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateUnderline);
    window.removeEventListener('resize', this.updateBg);
  }
};

</script>

