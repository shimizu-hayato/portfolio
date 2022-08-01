<template lang="pug">
section#about(
  class="w-full flex items-center py-28 relative z-10 xl:min-h-screen flex-col md:flex-row"
)
  img(
    class="object-cover object-center w-full max-h-screen relative -top-28 md:top-0 md:w-1/2 md:h-full md:pr-10 xl:pr-0 md:absolute"
    loading="lazy"
    width="756"
    height="1008"
    src="@/assets/img/about.png"
  )
  div(class="mx-auto w-10/12 2xl:w-[80%] h-full")
    div(class="flex flex-col md:flex-row h-full w-full")
      div(class="basis-1/2 md:self-center ml-auto xl:pl-20")
        h2(class="text-amber-300 font-display font-bold text-brand lg:text-xl uppercase mb-4") About
        div(class="inline-block")
          h3(
            class="font-bold text-4xl lg:text-5xl mb-8 font-mono overflow-hidden whitespace-nowrap"
          ) Hayato Shimizu
        p(class="text-neutrals-50/60 leading-relaxed max-w-prose") 
        | ポートフォリオをご覧いただきありがとうございます。<br> 
        | データサイエンティスト事業やAIの開発に携わってきた清水隼人と申します。<br>
        | 今まで経験した解析構築してきたデータ種類は多岐にわたり、必ずデータを目に見える形にして評価してきました。
        | 更にインフラ事業にも携わった経験もあり、クラウドでデータ運用する場合のノウハウもあります。<br>
        | 大量のデータをお持ちであれば１から構築・運用までお役に立てると思います。どうぞよろしくお願いいたします。
</template>