<script setup>

</script>

<template>
  <div class="container-fluid">
    <div class="card">

      <div class="card-header">
        <header>
           <h2>Componente Principal (APP)</h2>
        </header>
      </div>

      <div class="card-body">
        <main>
          <Navbar/>
          <RouterView/>

        <!-- <Binding/>
          <Estructura/>
          <Atributos/>  
          <Formulario/> -->
        </main>
      </div>
      
    </div>
  </div>
</template>

<script>
/* Componente de simple archivo (template, script, scope) */
  import Navbar from './components/Navbar.vue';

  //import Binding from './components/Binding.vue';
  //import Estructura from './components/Estructura.vue';
  //import Atributos from './components/Atributos.vue';

  /* Componente de multiples archivo (.html, .js, .css */
  //import Formulario from './components/Formulario/index.vue';

  export default {
    name: 'App',
    components: {
      Navbar,
      //Binding,
      //Estructura,
      //Atributos,
      //Formulario,
    },
  }

</script>

<style scoped>
  .card-header{
    background-color: #f481ea;
    color: white;
    text-align: center;
  }

</style>
