<script setup lang="ts">
const technologies = [
  {
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    "alt": "PostgreSQL logo",
    "name": "PostgreSQL"
  },
  {
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    "alt": "HTML logo",
    "name": "HTML"
  },
  {
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    "alt": "CSS logo",
    "name": "CSS"
  },
  {
    "image": "https://icon.icepanel.io/Technology/svg/Java.svg",
    "alt": "Java logo",
    "name": "Java"
  },
  {
    "image": "/images/javascript.png",
    "alt": "JavaScript logo",
    "name": "JavaScript"
  },
  {
    "image": "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
    "alt": "Git logo",
    "name": "Git"
  },
  {
    "image": "https://www.svgrepo.com/show/394174/github.svg",
    "alt": "GitHub logo",
    "name": "GitHub"
  }
]
</script>

<template>
  <section>
    <SectionHeading title="Languages" />
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"><TechStackCard v-for="technology in technologies" :key="technology.name" v-bind="technology" /></div>
  </section>
</template>
