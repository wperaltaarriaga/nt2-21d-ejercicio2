<template>
  <section class="card">
    <div class="card-header">
      <h3>Busquedas</h3>
    </div>
    <div class="card-body">
      <div class="container-fluid mt-3">
        <input
          id="nombre"
          type="text"
          class="form-control"
          v-model.trim="criterioNombre"
          placeholder="Buscar por Nombre o Apellido..."
        />
        <br />
        <input
          id="dni"
          type="text"
          class="form-control"
          v-model.trim="criterioDni"
          placeholder="Buscar por DNI..."
        />
        <br />

        <button
          class="btn btn-primary mb-3 me-2"
          :disabled="!botonHabilitado"
          @click="buscar"
        >Buscar</button>

        <button
          class="btn btn-secondary mb-3"
          @click="limpiar"
        >Limpiar</button>

        <div v-if="mostrarAdvertencia" class="alert alert-warning py-2">
          Ingrese al menos 3 caracteres en Nombre o DNI para realizar la búsqueda.
        </div>

        <div class="card-deck m-0">
          <div class="row">
            <div class="col" v-for="persona in personasFiltradas" :key="persona.dni">
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">{{ getNombreCompleto(persona) }}</h5>
                  <p class="card-text">DNI {{ persona.dni }}</p>
                  <a href="#" class="card-link">{{ persona.correo }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div class="col-12" v-if="!mostrarAdvertencia && personasFiltradas.length === 0">
          <div class="alert alert-warning">Sin resultados con los filtros actuales.</div>
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
      hasBuscado: false,   
      resultados: [],

      personas: [
        { nombre: "Daniel", 
          apellido: "Sanchez", 
          correo: "danielsanchez68@hotmail.com", 
          dni: "20442873" 
        },
        { nombre: "Juan",   
          apellido: "Perez", 
          correo: "j@p.gmail.com",               
          dni: "12345678" 
        },
        { nombre: "Ana",    
          apellido: "Suarez",  
          correo: "a@s.gmail.com",              
          dni: "87654321" 
        },
        { nombre: "Wanda Mercedes", 
          apellido: "Peralta Arriaga", 
          correo: "wperaltaarriaga@gmail.com", 
          dni: "42821432" 
        },
        { nombre: "Laura", 
          apellido: "Arriaga", 
          correo: "riaga@gmail.com", 
          dni: "58621432" },
      ],
    };
  },

  computed: {
    botonHabilitado() {
      return this.criterioNombre.trim().length >= 3 || this.criterioDni.trim().length >= 3;
    },
    mostrarAdvertencia() {
      return (
        (this.criterioNombre.length > 0 && this.criterioNombre.length < 3) ||
        (this.criterioDni.length > 0 && this.criterioDni.length < 3)
      );
    },
    personasFiltradas() {   
      if (!this.hasBuscado) return this.personas; // Mientras NO se haya hecho "Buscar", muestra todo
      return this.resultados;// Luego de buscar, mostrar resultados
    },
  },

  methods: {
    buscar() {
      const nom = this.normalizar(this.criterioNombre);
      const dni = (this.criterioDni ?? '').replace(/\D/g, '');

      const nombreActivo = nom.length >= 3;
      const dniActivo    = dni.length >= 3;

      this.hasBuscado = true;

      this.resultados = this.personas.filter((p) => {
        const nombreCompleto = this.normalizar(`${p?.nombre ?? ''} ${p?.apellido ?? ''}`); //normaliza
        const dniPersona     = String(p?.dni ?? ''); //normaliza

        const matchNombre = nombreActivo ? nombreCompleto.includes(nom) : true;
        const matchDni    = dniActivo    ? dniPersona.includes(dni)     : true;

        return matchNombre && matchDni; //se intersecan si ambos estan activos
      });
    },

    limpiar() {
      this.criterioNombre = '';
      this.criterioDni = '';
      this.resultados = [];
      this.hasBuscado = false; // vuelve a mostrar el array
    },

    normalizar(str) {
      return (str ?? '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    },

    getNombreCompleto(p) {
      return `${p.nombre} ${p.apellido}`;
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