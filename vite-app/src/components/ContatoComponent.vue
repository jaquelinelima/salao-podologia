<template>
  <div class="relative isolate bg-white">  
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#ffc0bb]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
      <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ffc0bb] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="py-14">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto text-center max-w-2xl">        
          <h2 class="text-lg font-bold leading-8 tracking-tight text-secundary">CONTATO</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Acompanhe nossas redes</p>
          <div class="flex pt-8">
            <div v-for="area in areas" :key="area" class="cursor-pointer flex transform transition-all duration-700 rounded-2xl lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-center ">
              <a :href="area.link">
                <Icon :icon="area.icon" class="w-16 h-16 text-secundary transition-all duration-300 hover:text-tertiary hover:scale-110" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 ">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=R.%20Bernadino%20de%20Lima%20Paes,%206,%20Pedra%20Bela%20-%20SP,%2012990-000%20Eliana%20Lima%20Pod%C3%B3loga&ie=UTF8&t=&z=18&iwloc=B&output=embed" style=""></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Mande seu Feedback ou marque um horário.</p>
          <div class="relative mb-4">
            <label for="nome" class="leading-7 text-sm text-gray-600">Nome</label>
            <input type="text" id="nome" name="nome" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secundary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secundary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Mensagem</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secundary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-white bg-secundary border-0 py-2 px-6 transition-colors duration-300 focus:outline-none hover:bg-tertiary rounded text-lg">Enviar</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
const areas = [
  {
    icon: 'uil:instagram-alt',
    link: `https://www.instagram.com/eliana.limapodologia/`,
  },
  {
    icon: 'uil:whatsapp-alt',
    link: `https://wa.me//551511942780485?text=Olá!%20Gostaria%20de%20marcar%20um%20horário...`,
  }
]
</script>