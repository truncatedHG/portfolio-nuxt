<template>
  <section class="hero min-h-[58vh]" aria-labelledby="intro-title">
    <div class="hero-content grid w-full max-w-none items-center gap-12 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
      <div class="name">
        <h1 id="intro-title" class="text-6xl leading-[1.05] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-8xl">Aldrian <span class="text-primary">Diaz</span></h1>
        <p class="mt-7 max-w-md text-lg leading-relaxed text-base-content/75 sm:text-xl">An aspiring database administrator.</p>
      </div>
      <div class="content relative mx-auto w-full max-w-sm lg:max-w-none">
        <div class="absolute -inset-3 rotate-3 rounded-[2.5rem] border border-primary/20 sm:-inset-4" aria-hidden="true"></div>
        <div class="avatar block overflow-hidden rounded-[2rem] border border-primary/15 shadow-xl shadow-primary/10">
          <div class="aspect-[4/5] w-full"><img class="h-full w-full object-cover" src="/images/aldrian.JPEG" alt="A self portrait" fetchpriority="high"></div>
        </div>
      </div>
    </div>
  </section>
</template>
