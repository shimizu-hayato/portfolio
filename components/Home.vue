<template lang="pug">
section#home.h-screen.w-full.flex.py28.justify-center.items-center.transition-all.duration-75.top-0.bg-black
  div(class="mx-auto 2xl:w-[80%] w-10/12")
    h1(
      class="logo text-amber-300 font-display text-5xl leading-tight md:text-7xl md:leading-tight lg:text-9xl lg:leading-tight text-center"
    ) Programming <br/> and Analytics <br/> from the Future 
    div(class="flex items-start justify-center")
      a(
        href="#about"
        class="author_log content-center mt-16 btn btn-secondary btn-outline btn-lg"
      ) About Me
</template>


<style scoped lang='scss'>
#home {
  //background-color: black;
  color: white;
}

.logo {
  font-family: 'Gunplay';
}

.author_logo {
  font-family: 'Impact';
}
</style>