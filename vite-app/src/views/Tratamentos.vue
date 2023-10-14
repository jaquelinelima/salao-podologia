<template>
  <div>
    <navbar/>
    <tratamentos />
  </div>
</template>
<script>
import Navbar from '../components/NavbarComponent.vue'
import Tratamentos from '../components/TratamentosComponent.vue'
export default {
  components: {
    Navbar,
    Tratamentos,
  },
};
</script>