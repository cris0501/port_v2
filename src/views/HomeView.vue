<template>
    <div class="flex justify-center text-white relative z-[2]">
      <div class="flex flex-col items-end justify-center p-4 mr-32 text-left w-1/2">
        <span class="text-4xl text-yellow-400 font-bold"> Desarrollador Web </span>
        <span class="text-6xl font-bold"> Cristian Ramirez </span>
        <p class="w-3/4 mt-5">
          Hola! Soy Cristian, desarrollador full stack, siempre buscando el próximo desafío y emocionado por explorar nuevas fronteras en el mundo digital. Con estudios en física y matemáticas, la lógica es mi aliada en cada proyecto que emprendo.
          <br/>
          <br/>
          Como creyente en el cambio y la innovación, abrazo las metodologías ágiles como Scrum para impulsar la colaboración y la eficiencia en cada equipo en el que trabajo.
        </p>
      </div>
      <div class="flex flex-col w-1/2 items-center justify-center p-8 text-white text-left">
        <span class="text-3xl mb-4"> Experiencia </span>
        <div class="w-1/2">
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
    </div>
</template>

<script setup>
   import boxExperience from '@/components/boxExperience.vue'
</script>

<style scoped>
  .f-circle {
    @apply rounded-full w-[500px] h-[500px] absolute -z-0;
    background: rgb(37,99,235);
    background: radial-gradient(circle, rgba(37,99,235,0.8) 0%, rgba(37,99,235,0) 40%);
    transform: scale(3);
    top: calc(50% - 250px);
    left: calc(50% - 250px);
    animation: blink 2.5s infinite ease-in-out alternate;
  }

  @keyframes blink {
    from {
      transform: scale(3);
    }

    to {
      transform: scale(3.5);
    }
  }
</style>
