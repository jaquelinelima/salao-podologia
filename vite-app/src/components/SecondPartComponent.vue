<template>
  <!-- <div class="mx-auto max-w-7xl px-6 sm:mt-20 lg:px-8"> -->
  <div class="relative isolate bg-white pb-32 sm:pt-32">
    
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#ffc0bb]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
      <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ffc0bb] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="font-bold leading-7 text-lg text-secundary">TRATAMENTOS</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Algumas especialidades</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">Sempre em busca de especialização, a fim de oferecer atendimentos e tratamentos cada vez mais aprimorados e excepcionais.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div v-for="feature in features" :key="feature.name" class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secundary">
              <Icon :icon="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            {{ feature.name }}
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const features = [
  {
    name: 'Podologia Preventiva',
    description:
      'Abordagem dedicada à prevenção e cuidado dos pés, focando em evitar problemas futuros e promover a saúde dos membros inferiores.',
    icon: 'icon-park-outline:foot',
  },
  {
    name: 'Podopediatria',
    description:
      'Previne o desenvolvimento de problemas futuros, permitindo que as crianças cresçam com pés saudáveis e evitem complicações que possam afetar a qualidade de vida e a mobilidade no futuro.',
    icon: 'mingcute:foot-line',
  },
  {
    name: 'Pés Diabéticos',
    description:
      'Este ramo da Podologia concentra-se no estudo, prevenção e tratamento de pé diabético, para prevenir complicações desses pés que são de risco.',
    icon: 'fluent-emoji-high-contrast:footprints',
  },
  {
    name: 'Podologia Geriátrica',
    description:
      'Especialidade que se concentra no cuidado e tratamento dos pés de pessoas idosas, centrada na prevenção e tratamento de problemas que podem ocorrer devido ao envelhecimento natural do corpo.',
    icon: 'fluent-emoji-high-contrast:foot'
  },
]
</script>