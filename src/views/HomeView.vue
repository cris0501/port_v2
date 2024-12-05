<template>
    <div class="flex flex-col lg:flex-row justify-center text-white relative z-[2]">
      <div class="flex flex-col items-end justify-center p-4 ext-left w-full lg:w-1/2 mt-24 lg:mt-0">
        <span class="text-4xl text-yellow-400 font-bold"> Desarrollador Web </span>
        <span class="text-6xl font-bold"> Cristian Ramirez </span>
        <p class="w-3/4 mt-5">
          Hola! Soy Cristian, desarrollador full stack, siempre buscando el próximo desafío y emocionado por explorar nuevas fronteras en el mundo digital. Con estudios en física y matemáticas, la lógica es mi aliada en cada proyecto que emprendo.
          <br/>
          <br/>
          Como creyente en el cambio y la innovación, abrazo las metodologías ágiles como Scrum para impulsar la colaboración y la eficiencia en cada equipo en el que trabajo.
        </p>
      </div>
      <div class="flex flex-col w-full md:w-1/2 items-center justify-center p-8 text-white text-left min-h-[95vh]">
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

    <div class="flex flex-col justify-center space-y-10 items-center min-h-[80vh] mt-12 text-white">
      <span class="my-8"> Stack </span>

      <div class="flex flex-wrap justify-between w-full md:w-2/3">
        <div class="stack w-full md:w-1/2">
          <div class="stack-html5"><i class="icon icon-html5"></i></div>
          <div class="stack-css3"><i class="icon icon-css3"></i></div>
          <div class="stack-javascript"><i class="icon icon-javascript"></i></div>
          <div class="stack-jquery"><i class="icon icon-jquery"></i></div>
          <!--<hr class="w-full my-3">-->
          <div class="stack-vue"><i class="icon icon-vue"></i></div>
          <div class="stack-react"><i class="icon icon-react"></i></div>
          <div class="stack-sass"><i class="icon icon-sass"></i></div>
          <div class="stack-tailwindcss"><i class="icon icon-tailwindcss"></i></div>
        </div>

        <div class="stack w-full md:w-1/2">
          <div class="stack-laravel"><i class="icon icon-laravel"></i></div>
          <div class="stack-java"><i class="icon icon-java"></i></div>
          <div class="stack-php"><i class="icon icon-php"></i></div>
          <div class="stack-flask"><i class="icon icon-flask"></i></div>
          <div class="stack-graphql"><i class="icon icon-graphql"></i></div>
        </div>
      </div>

      <div class="flex flex-wrap justify-between w-full lg:w-2/3">
        <div class="stack w-full md:w-1/2">
          <div class="stack-mysql"><i class="icon icon-mysql"></i></div>
          <div class="stack-redis"><i class="icon icon-redis"></i></div>
          <div class="stack-mongodb"><i class="icon icon-mongodb"></i></div>
          <div class="stack-apache"><i class="icon icon-apache"></i></div>
          <div class="stack-postgresql"><i class="icon icon-postgresql"></i></div>
        </div>
        <div class="stack w-full md:w-1/2">
          <div class="stack-bash"><i class="icon icon-bash"></i></div>
          <div class="stack-git"><i class="icon icon-git"></i></div>
          <div class="stack-docker"><i class="icon icon-docker"></i></div>
          <div class="stack-blender"><i class="icon icon-blender"></i></div>
          <div class="stack-gotod"><i class="icon icon-godot"></i></div>
          <div class="stack-arduino"><i class="icon icon-arduino"></i></div>
          <div class="stack-latex"><i class="icon icon-latex"></i></div>
        </div>
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

  .stack {
    @apply flex flex-wrap justify-around items-center p-8 rounded-xl;
    & > div {
      @apply flex justify-center w-1/3 mx-2 my-4 text-6xl rounded-xl transition ease-in-out duration-200 space-x-10;
    }
  }

  .stack-html5{
    @apply bg-orange-400/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(251, 146, 60, .2);
    &:hover {
      @apply border-2 border-orange-500;
      box-shadow: 0px 0px 10px 15px rgba(251, 146, 60, .2);
    }
  }
  .stack-css3{
    @apply bg-blue-300/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(147, 197, 253, .2);
    &:hover {
      @apply border-2 border-blue-400;
      box-shadow: 0px 0px 10px 15px rgba(147, 197, 253, .2);
    }
  }
  .stack-javascript{
    @apply bg-amber-300/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(252, 211, 77, .2);
    &:hover {
      @apply border-2 border-amber-400;
      box-shadow: 0px 0px 10px 15px rgba(252, 211, 77, .2);
    }
  }
  .stack-jquery{
    @apply bg-cyan-400/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(34, 211, 238, .2);
    &:hover {
      @apply border-2 border-cyan-500;
      box-shadow: 0px 0px 10px 15px rgba(34, 211, 238, .2);
    }
  }
  .stack-vue {
    @apply bg-emerald-500/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(16, 185, 129, .2);
    &:hover {
      @apply border-2 border-emerald-600;
      box-shadow: 0px 0px 10px 15px rgba(16, 185, 129, .2);
    }
  }
  .stack-react {
    @apply bg-cyan-400/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(34, 211, 238, .2);
    &:hover {
      @apply border-2 border-cyan-500;
      box-shadow: 0px 0px 10px 15px rgba(34, 211, 238, .2);
    }
  }
  .stack-sass {
    @apply bg-pink-400/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(244, 114, 182, .2);
    &:hover {
      @apply border-2 border-pink-500;
      box-shadow: 0px 0px 10px 15px rgba(244, 114, 182, .2);
    }
  }
  .stack-tailwindcss {
    @apply bg-teal-600/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(13, 148, 136, .2);
    &:hover {
      @apply border-2 border-teal-500;
      box-shadow: 0px 0px 10px 15px rgba(13, 148, 136, .2);
    }
  }

  .stack-laravel {
    @apply bg-red-500/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(239, 68, 68, .2);
    &:hover {
      @apply border-2 border-red-600;
      box-shadow: 0px 0px 10px 15px rgba(239, 68, 68, .2);
    }
  }
  .stack-java {
    @apply text-yellow-400 bg-yellow-400/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(250, 204, 21, .2);
    &:hover {
      @apply border-2 border-yellow-500;
      box-shadow: 0px 0px 10px 15px rgba(250, 204, 21, .2);
    }
  }
  .stack-php {
    @apply bg-violet-400/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(167, 139, 250, .2);
    &:hover {
      @apply border-2 border-violet-500;
      box-shadow: 0px 0px 10px 15px rgba(167, 139, 250, .2);
    }
  }
  .stack-flask {
    @apply bg-slate-200/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(203, 213, 225, .2);
    &:hover {
      @apply border-2 border-slate-300;
      box-shadow: 0px 0px 10px 15px rgba(203, 213, 225, .2);
    }
  }
  .stack-graphql {
    @apply bg-fuchsia-300/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(240, 171, 252, .2);
    &:hover {
      @apply border-2 border-fuchsia-400;
      box-shadow: 0px 0px 10px 15px rgba(240, 171, 252, .2);
    }
  }
</style>
