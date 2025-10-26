    <template>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-2"> <!-- expand es el brekpoint para el menu hamburguesa // mb margin botton-->
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">Inicio</RouterLink> <!-- marca de la navbar -->

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> <!-- boton menu hamburguesa -->

          <div class="collapse navbar-collapse" id="navbarNav"> <!-- item de navegacion -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/binding">Binding</RouterLink> <!-- marca de la navbar -->             
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/estructura">Estructura</RouterLink> <!-- marca de la navbar -->>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/atributos">Atributos</RouterLink> <!-- marca de la navbar -->
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/formulario">Formulario</RouterLink> <!-- marca de la navbar -->>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/cards">Cards</RouterLink> <!-- marca de la navbar -->>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </template>

<script>
export default {
  name: 'Navbar', 

 data() {
    return {
    };
  },
  methods: {
    // Métodos del componente
  },
}

</script>
<style scoped>
</style>