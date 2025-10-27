    <template>
      <section class="card">
        <div class="card-header">
          <h3>Busquedas</h3>
        </div>
        <div class="card-body">

          <div class="container-fluid mt-3" id="app">
<!--             <input 
              type="text" 
              class="form-control" 
              v-model.trim="criterioNombre"
              placeholder="Buscar por Nombre o Apellido"
            > -->
            <input 
              type="text" 
              class="form-control" 
              v-model.trim="criterioDeBusqueda"
              placeholder="Buscar por Nombre o Apellido"
            >
            <br>
            <input 
              type="text" 
              class="form-control" 
              v-model.trim="criterioDeBusqueda"
              placeholder="Buscar por DNI"
            >
            <br>
<!--             <input 
              type="text" 
              class="form-control" 
              v-model.trim="criterioDni" 
              placeholder="Buscar por DNI">
            <br> -->
            <div class="card-deck m-0">
              <div class="row">
                <div class="col" v-for="persona in personasFiltradas" :key="persona.dni">
                  <div class="card mb-3">
                    <div class="card-body">
                      <h5 class="card-title">{{ getNombreCompleto(persona) }}</h5>
                      <p class="card-text">dni {{ persona.dni }}</p>
                      <a href="#" class="card-link">{{ persona.correo }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
/*       criterioNombre: '',
      criterioDni: '', */
      criterioDeBusqueda: '',

      personas: [
        {
          nombre: "Daniel",
          apellido: "Sanchez",
          correo: "danielsanchez68@hotmail.com",
          dni: "20442873"
        },
        {
          nombre: "Juan",
          apellido: "Perez",
          correo: "j@p.gmail.com",
          dni: "12345678"
        },
        {
          nombre: "Ana",
          apellido: "Suarez",
          correo: "a@s.gmail.com",
          dni: "87654321"
        },
        {
          nombre: "Wanda Mercedes",
          apellido: "Peralta Arriaga",
          correo: "wperaltaarriaga@gmail.com",
          dni: "42821432"
        },
      ]
    };
  },

  computed: {
    personasFiltradas() {
      return this.personas.filter((persona) => {
        let registroCompleto = `${persona.nombre} ${persona.apellido} ${persona.dni} ${persona.correo}`
        return registroCompleto.toLowerCase().includes(this.criterioDeBusqueda.toLowerCase())
      });
    }
  },

  methods: {
    getNombreCompleto(persona) {
      return `${persona.nombre} ${persona.apellido}`
    }
  }
};
</script>
<style scoped>
.card-header {
  background-color: pink;
  color: brown;
}

.table td {
  vertical-align: middle;
}

.media {
  display: flex;
  align-items: start;
  justify-content: start;
}
</style>