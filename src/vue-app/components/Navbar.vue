<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="https://i.pinimg.com/originals/45/1d/df/451ddf96e958c635948cd88c29892565.png"
          alt="Logo"
          width="50"
          height="50"
          class="d-inline-block"
        />
        Coca-Cola
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" exact class="nav-link" active-class="active">
              Inicio
              <span class="visually-hidden">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" active-class="active">
              Contacto
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Navbar' })
export default class Navbar extends Vue {}
</script>
