<template>
  <div>
    <navbar/>
    <contato />
  </div>
</template>
<script>
import Navbar from '../components/NavbarComponent.vue'
import Contato from '../components/ContatoComponent.vue'
export default {
  components: {
    Navbar,
    Contato,
  },
};
</script>