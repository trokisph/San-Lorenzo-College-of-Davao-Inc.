<template>
  <div>
    <header class="top">
      <div class="header-area header-sticky fixed">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-6">
              <div class="logo">
                <a href="index.html">
                  <img src="../assets/css/img/logo/logo.png" alt="eduhome" />
                </a>
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12">
              <div class="content-wrapper one">
                <!-- Main Menu Start -->
                <div class="main-menu one text-right">
                 <Nav />
                </div>
                <div class="mobile-menu hidden-lg hidden-md one"></div>
                <!-- Main Menu End -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components : {
    Nav
  }
};
</script>

<style scoped lang="scss">
</style>
