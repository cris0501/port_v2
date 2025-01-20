<template>
  <div class="flex flex-col lg:flex-row h-[200vh] lg:h-[100vh] justify-center text-white relative z-[2]">
      <div class="flex flex-col items-center lg:items-end justify-center p-4 ext-left w-full lg:w-1/2 mt-24 lg:mt-0">
        <span class="text-4xl text-yellow-400 font-bold"> Desarrollador Web </span>
        <span class="text-6xl font-bold"> Cristian Ramirez </span>
        <p class="w-3/4 mt-5">
          Hola! Soy Cristian, desarrollador full stack, siempre buscando el próximo desafío y emocionado por explorar nuevas fronteras en el mundo digital. Con estudios en física y matemáticas, la lógica es mi aliada en cada proyecto que emprendo.
          <br/>
          <br/>
          Como creyente en el cambio y la innovación, abrazo las metodologías ágiles como Scrum para impulsar la colaboración y la eficiencia en cada equipo en el que trabajo.
        </p>
        <section class="flex justify-around w-5/6 my-2">
          <a target="_blank"
            class="w-1/2"
            href="https://drive.google.com/file/d/1hfjYpMe7D3RCMheCNS2x9T3wncrbnVfT/view">
            <button class="rounded-xl bg-green-600 px-4 py-3 mb-2 mt-4 font-bold text-lg w-full">
              Mi curriculum
            </button>
          </a>
        </section>
        <section class="flex justify-around w-3/4 my-10">
          <a class="icon icon-github text-4xl scale-150 transition-all ease-in-out transition-duration-500" target="_blank" href="https://github.com/cris0501"></a>
          <a class="icon icon-linkedin text-4xl scale-150 transition-all ease-in-out transition-duration-500" target="_blank" href="https://www.linkedin.com/in/cristian-ramirez-178814288"></a>
          <a class="icon icon-gmail text-4xl scale-150 transition-all ease-in-out transition-duration-500" href="mailto:cristian050198@outlook.com"></a>
        </section>
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
            <boxExperience title='ESFM-IPN' date='Enero-2022' endDate='Enero-2023'>
              <span> Desarrollo y soporte </span>
              <ul class="list-disc ml-5 mt-2">
                <li>
                  Cursos extracurriculares
                  <div class="flex space-x-4 text-4xl my-2">
                    <i class="icon icon-latex text-yellow-400"></i>
                    <i class="icon icon-html5"></i>
                    <i class="icon icon-python"></i>
                    <i class="icon icon-mathworks"></i>
                  </div>
                </li>
                <li>
                  Asesorias de física y matemáticas
                </li>
                <li>
                  Gestion de proyectos
                  <ul class="list-decimal ml-4 space-y-2 pt-2 underline">
                    <li><a href="http://esfmdev.net"> Equipo de desarrollo </a></li>
                    <li><a href="https://recorrido.esfm.ipn.mx"> Recorrido virtual </a></li>
                  </ul>
                </li>
              </ul>
            </boxExperience> 
        </div>
      </div>
    </div>

    <div class="f-circle" />

    <div class="min-h-[50vh] text-white w-4/5 mx-auto">
      <p class="text-2xl font-bold mb-4"> Proyectos </p>
      <p>
        Me gusta trabajar en proyectos que pueden ser de utilidad para mi comunidad.
        Es una excelente forma de aprender y de aportar algo a mi entorno.
      </p>

      <div class="proyects">
        <div class="flex-1 basis-1/2 h-auto lg:h-[500px] p-4">
          <div class="atropos lib-latex h-full">
            <div class="atropos-scale">
              <div class="atropos-rotate">
                <div class="atropos-inner">
                  <div class="flex flex-col justify-center w-full h-full p-5 bg-gradient-to-r from-rose-400 to-orange-300 text-justify rounded-xl">
                    <section class="flex flex-1 justify-around h-1/2">
                      <img src="/images/lib_latex.svg" class="w-1/4" data-atropos-offset="2" />
                      <i class="icon icon-arrow-right text-6xl absolute top-1/4 w-1/5" data-atropos-offset="3"></i>
                      <div class="w-1/3 relative" data-atropos-offset="4">
                        <i class="icon icon-react text-8xl absolute top-1/3"></i>
                        <i class="icon icon-html5 text-8xl absolute left-1/2"></i>
                        <i class="icon icon-css3 text-8xl absolute top-2/3 left-2/3"></i>
                      </div>
                    </section>
                    <span class="text-2xl font-bold mb-4" data-atropos-offset="2">
                      Biblioteca cientifica
                    </span>
                    <p data-atropos-offset="1">
                      LATEX es un poderoso procesador de texto que nos permite crear documentos
                      de caracter cientifico. Sin emabrgo, solo permite la creacion de archivos
                      PDF por lo que hice todo un sistema de renderizado que permite mostrar
                      LATEX en la web de una forma completa.
                    </p>
                    <div class="">
                      <a href="http://bv.esfmdev.net/" target="_blank">
                        <button class="rounded-xl bg-green-600 px-4 py-3 mb-2 mt-4">
                          Ir al proyecto
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1 basis-1/2 h-auto lg:h-[500px] p-4">
          <div class="atropos ef-framework h-full">
            <div class="atropos-scale">
              <div class="atropos-rotate">
                <div class="atropos-inner">
                  <div class="flex flex-col justify-center w-full h-full p-5 bg-gradient-to-br bg-gradient-to-b from-indigo-500 to-pink-500 text-justify rounded-xl">
                    <section class="flex flex-1 justify-center relative h-1/2">
                      <img src="/images/ef.svg" class="w-1/2 mx-auto" data-atropos-offset="4" />
                      <i class="icon icon-python text-6xl absolute top-3/4 left-3/4"></i>
                    </section>
                    <span class="text-2xl font-bold mb-4" data-atropos-offset="2">
                      Framework EF
                    </span>
                    <p data-atropos-offset="1">
                      Una de las mejores formas de aprender en esta industria es crear un
                      proyecto que te permita aprender y comprender como funcionan las
                      tecnologias actuales. Por eso fue que desarrolle un framework personal,
                      <span class="text-yellow-300 font-bold text-lg"> Easy &amp; Fast </span>
                    </p>
                    <div class="">
                      <a href="https://github.com/cris0501/DepInc/tree/dev" target="_blank">
                        <button class="rounded-xl bg-green-600 px-4 py-3 mb-2 mt-4">
                          <i class="icon icon-github mr-4 text-xl"></i> Ir al proyecto
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1 md:basis-1/2 xl:basis-2/5 h-auto lg:h-[350px] p-4">
          <div class="atropos youtube h-full">
            <div class="atropos-scale">
              <div class="atropos-rotate">
                <div class="atropos-inner">
                  <div class="flex w-full h-full p-5 relative bg-gradient-to-r from-blue-600 to-violet-600 text-justify rounded-xl">
                    <section class="flex absolute right-[15%] top-2" data-atropos-offset="1">
                      <i class="icon icon-youtube text-7xl"></i>
                    </section>
                    <section class="flex flex-col justify-end w-full h-full">
                      <span class="text-2xl font-bold mb-10" data-atropos-offset="2">
                        YouTube
                      </span>
                      <p data-atropos-offset="1">
                        Comencé un pequeño canal en YouTube con la intencion de explicar
                        conceptos de mi carrera y de tecnología. La intencion es difundir
                        conocimiento y proveer de una herramienta sobre temas de los cuales
                        hay poca información.
                      </p>
                      <div class="">
                        <a href="https://youtube.com/@d3cia163/playlists" target="_blank">
                          <button class="rounded-xl bg-green-600 px-4 py-3 mb-2 mt-4">
                            Conoce mi canal
                          </button>
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1 md:basis-1/2 xl:basis-3/5 h-auto lg:h-[350px] p-4">
          <div class="atropos cards h-full">
            <div class="atropos-scale">
              <div class="atropos-rotate">
                <div class="atropos-inner">
                  <div class="flex w-full h-full p-5 bg-gradient-to-r from-blue-600 to-violet-600 text-justify rounded-xl">
                    <section class="flex w-1/2 p-4">
                      <img src="/images/cards.svg" class="mx-auto" data-atropos-offset="4" />
                    </section>
                    <section class="flex flex-col justify-around w-3/4">
                      <span class="text-2xl font-bold" data-atropos-offset="2">
                        Tarjetas interactivas
                      </span>
                      <p data-atropos-offset="1">
                        ¿Alguna vez usaste tarjetas para aprender un idioma o algun concepto? <br>
                        Yo si y mas de una vez las olvide en casa. Es por ello que plasme ese
                        concepto de utilidad en una pequeña aplicacion web que no solo gestiona
                        las tarjetas de una forma sencilla sino que tambien puedes practicar con
                        la informacion. Algo genial.
                      </p>
                      <div class="">
                        <a href="http://cards.esfmdev.net/" target="_blank">
                          <button class="rounded-xl bg-green-600 px-4 py-3 mb-2 mt-4">
                            Ir al proyecto
                          </button>
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1 basis-3/5 h-auto lg:h-[300px] p-4">
          <div class="atropos virtual h-full">
            <div class="atropos-scale">
              <div class="atropos-rotate">
                <div class="atropos-inner">
                  <div class="flex w-full h-full p-5 bg-gradient-to-r from-blue-600 to-violet-600 text-justify rounded-xl">
                    <section class="flex w-1/2 p-4">
                      <img src="/images/tour.svg" class="mx-auto" data-atropos-offset="4" />
                    </section>
                    <section class="flex flex-col justify-around w-3/4">
                      <span class="text-2xl font-bold" data-atropos-offset="2">
                        Recorrido virtual
                      </span>
                      <p data-atropos-offset="1">
                        Alguna vez me pregunte como funciona Google Maps y durante ese
                        cuestionamiento se me ocurrio una forma de generar un mapa virtual
                        que permita recorrer las instalaciones de mi universidad. Dicha
                        idea a estado en constante evolución y desarrollo. Si bien no
                        es una copia fiel de StreetView, el resultado me parece increible.
                      </p>
                      <div class="">
                        <a href="https://recorrido.esfm.ipn.mx/" target="_blank">
                          <button class="rounded-xl bg-green-600 px-4 py-3 mb-2 mt-4">
                            Ir al proyecto
                          </button>
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="flex flex-col justify-center space-y-10 items-center min-h-[80vh] mt-12 pb-12 text-white">
      <p class="text-2xl font-bold mt-8"> Stack </p>
      <p>
        Soy un desarrollador <span class="font-bold">Full-Stack</span> con conocimiento en diversas
        tecnologias, tanto del ambito web como de proposito general.
      </p>

      <div class="flex flex-wrap justify-between w-full md:w-2/3">
        <div class="stack w-full md:w-1/2">
          <p class="w-full text-2xl text-center font-bold mb-4"> Frontend </p>
          <div class="stack-html5" title="HTML5"><i class="icon icon-html5"></i></div>
          <div class="stack-css3" title="CSS3"><i class="icon icon-css3"></i></div>
          <div class="stack-javascript" title="JavaScript"><i class="icon icon-javascript"></i></div>
          <div class="stack-jquery" title="jQuery"><i class="icon icon-jquery"></i></div>
          <!--<hr class="w-full my-3">-->
          <div class="stack-vue" title="Vue 2/3"><i class="icon icon-vue"></i></div>
          <div class="stack-react" title="React"><i class="icon icon-react"></i></div>
          <div class="stack-sass" title="SASS"><i class="icon icon-sass"></i></div>
          <div class="stack-tailwindcss" title="Tailwind CSS"><i class="icon icon-tailwindcss"></i></div>
        </div>

        <div class="stack w-full md:w-1/2">
          <p class="w-full text-2xl text-center font-bold mb-4"> Backend </p>
          <div class="stack-laravel" title="Laravel"><i class="icon icon-laravel"></i></div>
          <div class="stack-java" title="Springboot"><i class="icon icon-java"></i></div>
          <div class="stack-php" title="PHP"><i class="icon icon-php"></i></div>
          <div class="stack-flask" title="Flask"><i class="icon icon-flask"></i></div>
          <div class="stack-graphql" title="GraphQL"><i class="icon icon-graphql"></i></div>
        </div>
      </div>

      <div class="flex flex-wrap justify-between w-full lg:w-2/3">
        <div class="stack w-full md:w-1/2">
          <p class="w-full text-2xl text-center font-bold mb-4"> Bases de datos </p>
          <div class="stack-mysql" title="MySQL"><i class="icon icon-mysql"></i></div>
          <div class="stack-redis" title="Redis"><i class="icon icon-redis"></i></div>
          <div class="stack-apache" title="HBase"><i class="icon icon-apache"></i></div>
          <div class="stack-mongodb" title="Mongo DB"><i class="icon icon-mongodb"></i></div>
          <div class="stack-postgresql" title="PostgreSQL"><i class="icon icon-postgresql"></i></div>
        </div>
        <div class="stack w-full md:w-1/2">
          <p class="w-full text-2xl text-center font-bold mb-4"> Otros </p>
          <div class="stack-bash" title="Bash">
            <img src="/images/bash.svg" alt="Bash" width="60px">
          </div>
          <div class="stack-git" title="Git"><i class="icon icon-git"></i></div>
          <div class="stack-docker" title="Docker"><i class="icon icon-docker"></i></div>
          <div class="stack-blender" title="Blender"><i class="icon icon-blender"></i></div>
          <div class="stack-godot" title="Godot"><i class="icon icon-godot"></i></div>
          <div class="stack-arduino" title="Arduino"><i class="icon icon-arduino"></i></div>
          <div class="stack-latex" title="LaTeX"><i class="icon icon-latex"></i></div>
        </div>
      </div>

      <p> Cristian Ramirez - 2025 </p>
    </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import Atropos from 'atropos'
  import 'atropos/css/min'

  import boxExperience from '@/components/boxExperience.vue'

  onMounted( () => {
    const libLATEX = Atropos({
      el: '.lib-latex',
      activeOffset: 5,
      rotateXMax: 5,
      rotateYMax: 5
    })

    const EF3D = Atropos({
      el: '.ef-framework',
      activeOffset: 5,
      rotateXMax: 5,
      rotateYMax: 5
    })

    const youtube = Atropos({
      el: '.youtube',
      activeOffset: 5,
      rotateXMax: 5,
      rotateYMax: 5
    })

    const cards = Atropos({
      el: '.cards',
      activeOffset: 5,
      rotateXMax: 5,
      rotateYMax: 5
    })

    const virtual = Atropos({
      el: '.virtual',
      activeOffset: 5,
      rotateXMax: 5,
      rotateYMax: 5
    })
  })
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
     @apply flex flex-wrap flex-col lg:flex-row justify-between;
  }
  .glass {
      background: rgba(255, 255, 255, 0.2); /* Fondo semitransparente */
      backdrop-filter: blur(10px);          /* Difumina el contenido detrás */
      -webkit-backdrop-filter: blur(10px); /* Soporte para Safari */
  }

  .stack {
    @apply flex flex-wrap justify-around items-start p-8 rounded-xl;
    & > div {
      @apply flex justify-center w-1/3 mx-2 my-4 text-6xl rounded-xl transition ease-in-out duration-200 space-x-10;
    }
  }

  .stack-html5,
  .stack-blender,
  .stack-git {
    @apply bg-orange-400/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(251, 146, 60, .2);
    &:hover {
      @apply border-2 border-orange-500;
      box-shadow: 0px 0px 10px 15px rgba(251, 146, 60, .2);
    }
  }
  .stack-css3, 
  .stack-postgresql,
  .stack-godot {
    @apply bg-blue-300/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(147, 197, 253, .2);
    &:hover {
      @apply border-2 border-blue-400;
      box-shadow: 0px 0px 10px 15px rgba(147, 197, 253, .2);
    }
  }
  .stack-javascript, 
  .stack-java,
  .stack-mysql {
    @apply bg-amber-300/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(252, 211, 77, .2);
    &:hover {
      @apply border-2 border-amber-400;
      box-shadow: 0px 0px 10px 15px rgba(252, 211, 77, .2);
    }
  }
  .stack-vue,
  .stack-latex {
    @apply bg-emerald-500/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(16, 185, 129, .2);
    &:hover {
      @apply border-2 border-emerald-600;
      box-shadow: 0px 0px 10px 15px rgba(16, 185, 129, .2);
    }
  }
  .stack-react,
  .stack-jquery,
  .stack-docker {
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
  .stack-tailwindcss,
  .stack-arduino {
    @apply bg-teal-600/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(13, 148, 136, .2);
    &:hover {
      @apply border-2 border-teal-500;
      box-shadow: 0px 0px 10px 15px rgba(13, 148, 136, .2);
    }
  }

  .stack-laravel,
  .stack-redis,
  .stack-apache {
    @apply bg-red-500/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(239, 68, 68, .2);
    &:hover {
      @apply border-2 border-red-600;
      box-shadow: 0px 0px 10px 15px rgba(239, 68, 68, .2);
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
  .stack-flask,
  .stack-bash {
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

  .stack-mongodb {
    @apply bg-green-400/20 p-2 border-2 border-transparent;
    box-shadow: 0px 0px 10px 10px rgba(74, 222, 128, 0.2);
    &:hover {
      @apply border-2 border-green-400;
      box-shadow: 0px 0px 10px 15px rgba(74, 222, 128, .2);
    }
  }
</style>
