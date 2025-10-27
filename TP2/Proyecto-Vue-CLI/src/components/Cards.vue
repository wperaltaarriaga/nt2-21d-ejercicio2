    <template>
      <section class="card">
        <div class="card-header">
          <h3>Busquedas</h3>
        </div>
        <div class="card-body">

          <div class="container-fluid mt-3" id="app">
            <input
              id="filtro-nombre"
              type="text"
              class="form-control"
              v-model.trim="criterioNombre"
              placeholder="Buscar por Nombre o Apellido..."
            />
            <br />

            <input
              id="filtro-dni"
              type="text"
              class="form-control"
              v-model.trim="criterioDni"
              placeholder="Buscar por DNI..."
            />
            <br />

            <div v-if="mostrarAdvertencia" class="alert alert-warning py-2">
              Ingrese al menos 3 caracteres en Nombre o DNI para realizar la búsqueda.
            </div>

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
            <br>
            <div class="col-12" v-if="!mostrarAdvertencia && personasFiltradas.length === 0">
              <div class="alert alert-warning"> Sin resultados buscando por Nombre y/o Apellido </div>
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
      criterioNombre: '',
      criterioDni: '',

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
      const nombreQ = this.normalizar(this.criterioNombre);
      const dniQ    = (this.criterioDni ?? '').replace(/\D/g, ''); 

      const nombreActivo = nombreQ.length > 0;
      const dniActivo    = dniQ.length > 0;

    
      if (!nombreActivo && !dniActivo) return this.personas;

      return this.personas.filter((p) => {
        const nombreCompleto = this.normalizar(`${p?.nombre ?? ''} ${p?.apellido ?? ''}`);
        const dniPersona     = String(p?.dni ?? '');

        const matchNombre = nombreActivo ? nombreCompleto.includes(nombreQ) : true;
        const matchDni    = dniActivo    ? dniPersona.includes(dniQ)        : true;
        return matchNombre && matchDni;
      });
    },

    mostrarAdvertencia() {
      return (
        (this.criterioNombre.length > 0 && this.criterioNombre.length < 3) ||
        (this.criterioDni.length > 0 && this.criterioDni.length < 3)
      );
    },
  },

  methods: {
    getNombreCompleto(persona) {
      return `${persona.nombre} ${persona.apellido}`
    },
    normalizar(str) {
      return (str ?? '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); 
    },
  },
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