<template>
  <div class="page-top">
    <!-- Header-->
    <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container px-5">
          <h1 class="masthead-heading mb-0">Coca-Cola</h1>
          <h2 class="masthead-subheading mb-0">Cerca de Ti</h2>
          <router-link class="btn btn-primary btn-xl rounded-pill mt-5" to="/contact">
            Sé minorista
          </router-link>
        </div>
      </div>
      <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div>
    </header>
    <!-- Content section 1-->
    <section id="scroll">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img
                class="img-fluid rounded-circle"
                src="https://www.coca-cola.com.mx/content/dam/one/mx/es/home/work-news-and-contact/Home-mexico_600x600-work-with-us.png"
                alt="..."
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">Misión</h2>
              <p>
                Nuestro plan de trabajo comienza con nuestra misión, que es perdurable y expresa
                nuestro propósito como compañía. Sirve como el patrón sobre el cual ponderamos
                nuestras acciones y decisiones.
              </p>
              <ul>
                <li>Refrescar al mundo.</li>
                <li>Inspirar momentos de optimismo y felicidad.</li>
                <li>Crear valor y hacer la diferencia.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content section 2-->
    <section>
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <div class="p-5">
              <img
                class="img-fluid rounded-circle"
                src="https://www.coca-cola.com.mx/content/dam/one/mx/es/home/work-news-and-contact/Home-mexico_600x600-news.png"
                alt="..."
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="p-5">
              <h2 class="display-4">Visión</h2>
              <p>
                Nuestra visión actúa como el marco de nuestro plan de trabajo y guía cada uno de los
                aspectos de nuestro negocio mediante la descripción de lo que necesitamos lograr
                para continuar alcanzando un crecimiento sostenible y de calidad.
              </p>
              <ul>
                <li>
                  Personas: (People): Ser un gran lugar para trabajar en donde las personas se
                  sientan motivadas a ser las mejores.
                </li>
                <li>
                  Portafolio: (Portfolio): Dar al mundo un portafolio de marcas de bebidas de
                  calidad que anticipan y satisfacen los deseos y necesidades de los consumidores.
                </li>
                <li>
                  Socios (Partners): Alimentar una red ganadora de clientes y proveedores; juntos
                  creamos valor mutuo y duradero.
                </li>
                <li>
                  Planeta (Planet): Ser un ciudadano responsable que hace la diferencia, ayudando a
                  construir y apoyar comunidades sostenibles.
                </li>
                <li>
                  Ganancias (Profit): maximizar la rentabilidad a largo plazo para los accionistas,
                  a la vez que somos conscientes de todas nuestras responsabilidades.
                </li>
                <li>
                  Productividad (Productivity): Ser una organización altamente efectiva, que
                  reacciona rápidamente.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content section 3-->
    <section>
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img
                class="img-fluid rounded-circle"
                src="https://www.coca-cola.com.mx/content/dam/one/mx/es/home/work-news-and-contact/Home-mexico_600x600-contact-us.png"
                alt="..."
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">Enfoque en el mercado</h2>
              <ul>
                <li>
                  Centrarse en las necesidades de nuestros consumidores, clientes y socios de
                  franquicia
                </li>
                <li>Salir al mercado y escuchar, observar y aprender</li>
                <li>Tener una visión global</li>
                <li>Enfocarse todos los días en la ejecución en el mercado</li>
                <li>Poseer una curiosidad insaciable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="py-5 bg-black">
      <div class="container px-5">
        <p class="m-0 text-center text-white small">Copyright &copy; Coca-Cola 2022</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/vue-app/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
