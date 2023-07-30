<template>
  <div>
    <navbar/>
    <hero />
    <section-two />
    <second-part />
    <testimonials />
    <contato />
    <!-- <carousel-component/> -->
    <footer-component />
  </div>
</template>
<script>
import Navbar from '../components/NavbarComponent.vue'
import Testimonials from '../components/TestimonialsComponent.vue'
import SecondPart from '../components/SecondPartComponent.vue'
import Hero from '../components/HeroComponent.vue'
import SectionTwo from '../components/SectionTwoComponent.vue'
// import CarouselComponent from '../components/CarouselComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import Contato from '../components/ContatoComponent.vue'
export default {
  components: {
    Navbar,
    Hero,
    SecondPart,
    Testimonials,
    SectionTwo,
    Contato,
    // CarouselComponent,
    FooterComponent
  },
};
</script>