<template>
  <div class="bg-white py-20 sm:py-30">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto text-center max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-secundary sm:text-4xl">Nosso Espaço</h2>
        <p class="mt-6 text-base leading-7 text-gray-600">Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.</p>
      </div>
      <div class="mx-auto mt-16  max-w-2xl flex-col grid grid-cols-3 gap-8 lg:mx-0 lg:mt-10 lg:max-w-none lg:flex-row lg:items-end">
        <div v-for="area in areas" :key="area.title" class="cursor-pointer flex flex-col-reverse justify-between transform transition-all duration-700 hover:scale-110 gap-y-2 rounded-2xl bg-white p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-5">
          <img :src="area.image" class="rounded-2xl" alt="">
          <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p class="text-2xl font-light tracking-tight text-primary">{{ area.title }}</p>
            <p class="text-base leading-7 text-gray-400">{{ area.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      areas : [
        {
          image: '../images/gt.jpg',
          title: 'Podologia',
          description: 'Cuidado com a saúde docscs pés.',
        },
        {
          image: '../images/manicure.jpg',
          title: 'Manicure',
          description: 'Cuidado com a sdsdsaúde dos pés.',
        },
        {
          image: '../images/pedicure.jpg',
          title: 'Pedicure',
          description: 'Cuidado com a swqweúde dos pés.',
        },
        {
          image: '../images/depila.jpg',
          title: 'Depilação',
          description: 'Cuidado com a saúdqeqwewqee dos pés.',
        },
        {
          image: '../images/sobrancelha.jpg',
          title: 'Design de Sobrancelhas',
          description: 'Cuidado com a saúde dosqweqwe pés.',
        },
        {
          image: '../images/aromaterapia.jpg',
          title: 'Aromaterapia',
          description: 'Cuidado com a saúde doeeees pés.',
        },
      ]
    }
  }
}


</script>