<template>
  <div id="app">
    <Header />
    <transition name="fade">
        <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components : {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

@import 'assets/css/bootstrap.min.css';
@import 'assets/css/animate.css';
@import 'assets/css/meanmenu.css';
@import 'assets/css/magnific-popup.css';
@import 'assets/css/font-awesome.min.css';
@import 'assets/css/et-line-icon.css';
@import 'assets/css/reset.css';
@import 'assets/css/ionicons.min.css';
@import 'assets/css/material-design-iconic-font.min.css';
@import 'assets/css/style.css';
@import 'assets/css/responsive.css';

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
