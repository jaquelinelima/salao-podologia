<template>
  <div>
    <navbar/>
    <about />
    <certificados />
    <footer-component />
  </div>
</template>
<script>
import Navbar from '../components/NavbarComponent.vue'
import About from '../components/AboutComponent.vue'
import Certificados from '../components/CertificadosComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  components: {
    Navbar,
    About,
    Certificados,
    FooterComponent
  },
};
</script>