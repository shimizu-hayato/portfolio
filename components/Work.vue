<template lang="pug">
section#work(
  class="w-full flex items-center py-28 relative z-10 xl:min-h-screen flex-col md:flex-row bg-black"
)
  div(class="mx-auto 2xl:w-[80%] w-10/12 h-full")
    div(class="flex flex-col lg:flex-row h-full w-full")
      div(class="basis-full lg:self-center lg:w-1/2")
        h2(
          class="text-amber-300 inline-block font-display font-bold text-brand lg:text-xl uppercase mb-4"
        ) Work 
        h3(class="text-white font-display font-bold text-4xl lg:text-5xl mb-8") My Skills
        p(
          class="text-white leading-relaxed max-w-prose mb-12"
        ) 私が現在習得しているスキルは以下の通りです。データアナリティクス、ウェブ、インフラと様々なスキルがあります。
      div(class="basis-full lg:self-center mt-10 lg:mt-0 lg:ml-28 lg:w-1/2")
        div(class="mb-3 text-lg font-medium text-blue-600 relative") Python
          div(class="w-full h-7 bg-gray-200 rounded-full dark:bg-gray-700")
            div(
              class="h-7 bg-blue-600 font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 95%"
            ) 95%
        div(class="mb-3 text-lg font-medium text-amber-500 relative") AWS
          div(class="w-full h-7 bg-gray-200 rounded-full dark:bg-gray-700")
            div(
              class="h-7 bg-amber-500 font-medium text-amber-100 text-center p-1 leading-none rounded-full"
              style="width: 70%"
            ) 70%
        div(class="mb-3 text-lg font-medium text-white text-red-600 relative") html/css/Javascript
          div(class="w-full h-7 bg-gray-200 rounded-full dark:bg-gray-700")
            div(
              class="h-7 bg-red-600 font-medium text-red-100 text-center p-1 leading-none rounded-full"
              style="width: 50%"
            ) 50%
        div(class="mt-16 pt-3 border-t flex flex-wrap")
          .flex.mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100"
          ) Django
          .flex.mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100"
          ) pytest
          .flex.mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100"
          ) requests
          .flex.mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100"
          ) selenium
          .flex.mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100"
          ) scrapy
          .flex.mr-2.my-1.px-2.tracking-wider.border.cursor-default.clear-left(
            class="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100"
          ) pandas
          .flex.mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100"
          ) sklearn
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100"
          ) TensorFlow
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100"
          ) matplotlib
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-amber-100"
          ) EC2
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-amber-100"
          ) RDS
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-amber-100"
          ) Lambda
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-amber-100"
          ) S3
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-amber-100"
          ) CloudWatch
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-red-600 border-red-600 hover:bg-red-600 hover:text-red-100"
          ) Vue3
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-red-600 border-red-600 hover:bg-red-600 hover:text-red-100"
          ) Nuxt3
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-red-600 border-red-600 hover:bg-red-600 hover:text-red-100"
          ) tailwindcss
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-white border-white hover:bg-white hover:text-black"
          ) SQL
          .mr-2.my-1.px-2.tracking-wider.border.cursor-default(
            class="text-white border-white hover:bg-white hover:text-black"
          ) Spark
</template>


<style scoped lang='scss'>
.logo {
  font-family: 'Gunplay';
}

.author_logo {
  font-family: 'Impact';
}
</style>