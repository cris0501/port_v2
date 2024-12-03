<template>
    <div class="flex justify-center text-white relative z-[2]">
      <div class="flex flex-col items-end justify-center p-4 ext-left w-1/2">
        <span class="text-4xl text-yellow-400 font-bold"> Desarrollador Web </span>
        <span class="text-6xl font-bold"> Cristian Ramirez </span>
        <p class="w-3/4 mt-5">
          Hola! Soy Cristian, desarrollador full stack, siempre buscando el próximo desafío y emocionado por explorar nuevas fronteras en el mundo digital. Con estudios en física y matemáticas, la lógica es mi aliada en cada proyecto que emprendo.
          <br/>
          <br/>
          Como creyente en el cambio y la innovación, abrazo las metodologías ágiles como Scrum para impulsar la colaboración y la eficiencia en cada equipo en el que trabajo.
        </p>
      </div>
      <div class="flex flex-col w-1/2 items-center justify-center p-8 text-white text-left min-h-[95vh]">
        <span class="text-3xl mb-4"> Experiencia </span>
        <div class="w-2/3">
            <boxExperience title='NECSUS' date='Ago-2023' endDate='Actualidad'>
              <span> Desarrollador Full Stack </span>
              <ul class="list-disc ml-5 mt-2">
                <li>
                  CI
                  <div class="flex space-x-4 text-4xl my-2">
                    <i class="icon icon-docker"></i>
                    <i class="icon icon-jenkins"></i>
                    <i class="icon icon-gitlab"></i>
                  </div>
                </li>
                <li>
                  Frontend
                  <div class="flex space-x-4 text-4xl my-2">
                    <i class="icon icon-vue"></i>
                  </div>
                </li>
                <li>
                  Backed
                  <div class="flex space-x-4 text-4xl my-2">
                    <i class="icon icon-java text-yellow-400"></i>
                  </div>
                </li>
                <li>
                  DB
                  <div class="flex space-x-4 text-4xl my-2">
                    <i class="icon icon-mysql text-yellow-400"></i>
                    <i class="icon icon-apache"></i>
                    <i class="icon icon-redis"></i>
                    <i class="icon icon-mongodb"></i>
                  </div>
                </li>
              </ul>
            </boxExperience>
            <boxExperience title='SINTEC' date='Enero-2023' endDate='Ago-2023'>
              <span> Desarrollador Full Stack </span>
              <ul class="list-disc ml-5 mt-2">
                <li>
                  Frontend
                  <div class="flex space-x-4 text-4xl my-2">
                    <i class="icon icon-vue"></i>
                  </div>
                </li>
                <li>
                  Backed
                  <div class="flex space-x-4 text-4xl my-2">
                    <i class="icon icon-laravel"></i>
                  </div>
                </li>
                <li>
                  DB
                  <div class="flex space-x-4 text-4xl my-2">
                    <i class="icon icon-mysql text-yellow-400"></i>
                  </div>
                </li>
              </ul>
            </boxExperience> 
        </div>
      </div>
    </div>

    <div class="f-circle" />

    <div class="min-h-[50vh] text-white">
      <span> Proyectos </span>

      <div class="proyects">
        <div class="flex-1 basis-1/2 h-[500px] p-2">
          <div class="bg-blue-500 w-full h-full"></div>
        </div>
        <div class="flex-1 basis-1/2 h-[500px] p-2">
          <div class="bg-blue-500 w-full h-full"></div>
        </div>
        <div class="flex-1 basis-1/5 h-[300px] p-2">
          <div class="bg-blue-500 w-full h-full"></div>
        </div>
        <div class="flex-2 basis-1/2 h-[300px] p-2">
          <div class="bg-blue-500 w-full h-full"></div>
        </div>
        <div class="flex-2 basis-1/5 h-[300px] p-2">
          <div class="bg-blue-500 w-full h-full"></div>
        </div>
      </div>
    </div>

    <div class="stack flex flex-col justify-center space-y-10 items-center min-h-[80vh] mt-12 text-white">
      <span class="my-8"> Stack </span>

      <div class="flex stack">
        <div class="stack-vue"><i class="icon icon-vue"></i></div>
        <div class="stack-react"><i class="icon icon-react"></i></div>
      </div>

      <div class="flex stack">
        <div class="stack-laravel"><i class="icon icon-laravel"></i></div>
        <div class="stack-java text-yellow-400"><i class="icon icon-java"></i></div>
      </div>
    </div>
</template>

<script setup>
   import boxExperience from '@/components/boxExperience.vue'
   import { ref } from 'vue'
</script>

<style scoped>
  .f-circle {
    @apply rounded-full absolute inset-0 mx-auto;
    background: rgb(37,99,235);
    background: radial-gradient(circle, rgba(37,99,235,0.8) 0%, rgba(37,99,235,0) 40%);
    animation: blink 2s infinite ease-in-out alternate;
  }

  @keyframes blink {
    from {
      width: 70vw;
    }

    to {
      width: 100vw;
    }
  }

  .proyects {
     @apply flex flex-wrap justify-between;
  }

  .stack > div {
    @apply text-6xl rounded-full transition ease-in-out duration-200 space-x-10;
  }
  .stack-vue:hover {
    @apply bg-emerald-500/20;
    box-shadow: 0px 0px 10px 15px rgba(16, 185, 129, .2);
  }
  .stack-react:hover {
    @apply bg-cyan-400/20;
    box-shadow: 0px 0px 10px 15px rgba(34, 211, 238, .2);
  }
  .stack-laravel:hover {
    @apply bg-red-500/20;
    box-shadow: 0px 0px 10px 15px rgba(239, 68, 68, .2);
  }
  .stack-java:hover {
    @apply bg-yellow-400/20;
    box-shadow: 0px 0px 10px 15px rgba(250, 204, 21, .2);
  }
</style>
