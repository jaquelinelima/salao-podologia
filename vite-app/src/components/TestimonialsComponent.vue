<template>
  <div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#ffc0bb]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
      <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ffc0bb] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-bold leading-8 tracking-tight text-secundary">DEPOIMENTOS</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pessoas maravilhosas que passaram por aqui</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <figure class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
          <blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
            <p>{{ `“${featuredTestimonial.body}”` }}</p>
          </blockquote>
          <figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
            <img class="h-10 w-10 flex-none rounded-full bg-gray-50" :src="featuredTestimonial.author.imageUrl" alt="" />
            <div class="flex-auto">
              <div class="font-semibold">{{ featuredTestimonial.author.name }}</div>
              <div class="text-gray-600">{{ `@${featuredTestimonial.author.handle}` }}</div>
            </div>
            <div v-for="i in 5" :key="i" class="text-secundary">
              <p class="sr-only">5 de 5 estrelas.</p>
              <StarIcon class="h-5 w-5" aria-hidden="true" />
            </div>
          </figcaption>
        </figure>
        <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
          <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
            <figure v-for="testimonial in column" :key="testimonial.author.handle" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote class="text-gray-900">
                <p>{{ `“${testimonial.body}”` }}</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                <div>
                  <div class="font-semibold">{{ testimonial.author.name }}</div>
                  <div class="text-gray-600">{{ `@${testimonial.author.handle}` }}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';
const featuredTestimonial = {
  body: 'Eliana é uma profissional que dispensa comentários, sempre busca oferecer uma solução para o problema, adequa seus horários a necessidade do cliente. Estou fazendo um tratamento com órtese e fiquei com muito medo, Eliana com paciência me convenceu a fazer o tratamento e minhas unhas estão ficando perfeitas. Super recomendo.',
  author: {
    name: 'Renata Viana Morais',
    handle: 'renatavianademorais',
    imageUrl:
      'https://lh3.googleusercontent.com/a-/AD_cMMRyWaVrz_FHfaIcQsOW5SN5wWJAEKoyTS0nktW_D5POq6U=w60-h60-p-rp-mo-br100',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Excelente trabalho,  profissional tranquila,  capacitada,  eu recomendo.',
        author: {
          name: 'Rosangela Carmo Oliveira Santos',
          handle: 'lesliealexander',
          imageUrl:
            'https://lh3.googleusercontent.com/a-/AD_cMMQxEyIaAsio0IWyKtBXcSEqIJFSBoFOcCldkkEFTOvy1eLj=w66-h66-p-rp-mo-ba4-br100',
        },
      },
      {
        body: 'Ótima profissional! Atendimento excelente. Eu amei e super recomendo',
        author: {
          name: 'Emily Mayumi',
          handle: 'emy.mayumi',
          imageUrl:
            'https://lh3.googleusercontent.com/a-/AD_cMMSWgDc44LK4dFEzMqT3fRj22Ty4KZcYhaqRln1OqJuyCGcq=w66-h66-p-rp-mo-ba3-br100',
        },
      },
    ],
    [
      {
        body: 'Ótima experiência. Meus pés estão muito bem cuidados e continuarei assim. Profissional nota 1.000. Uma simpatia e excelente profissional.',
        author: {
          name: 'Beth Dias',
          handle: 'beth.cantora',
          imageUrl:
            'https://lh3.googleusercontent.com/a-/AD_cMMSz1YIH6gnScHtjVFvzJuJFe6Cbh3X--PNgTFg0Ehk2wQkx=w66-h66-p-rp-mo-ba3-br100',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'Profissional muito competente, discreta, local agradável, equipamentos confortáveis, todo cuidado necessário com higiene e saúde. Recomendo!',
        author: {
          name: 'Vera Lúcia Mauricio',
          handle: 'vera.mauricio',
          imageUrl:
            'https://lh3.googleusercontent.com/a-/AD_cMMTfGayaldpc9PlDCPji-_Fh36VIo9_36jsQXvEk1Hy3HEOA=w66-h66-p-rp-mo-br100',
        },
      },
    ],
    [
      {
        body: 'Melhor atendimento!!! Profissional excelente!!!',
        author: {
          name: 'Tauana Sayuri',
          handle: 'tauanasayuri',
          imageUrl:
            'https://lh3.googleusercontent.com/a-/AD_cMMTS4hgQ2-OD3IUAaBg6hkRap_pm_CHpkrYRbn8EgvPkDcPv=w66-h66-p-rp-mo-br100',
        },
      },
      {
        body: 'Eliana é uma profissional maravilhosa, cuidadosa e atenciosa sempre propondo a melhor solução em podologia.',
        author: {
          name: 'Alessandra Lomazini',
          handle: 'alomabrasil',
          imageUrl:
            'https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-8%2F138%2F1019138%2Fe6gbqbP6%2Feaaea02cd4f146d5a81206f3beb377b9&methods=resize%2C600%2C5000',
        },
      },
    ],
  ],
]
</script>