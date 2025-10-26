    <template>
        <section class="card">
            <div class="card-header">
                <h3>Componente Binding</h3>
            </div>
            <div class="card-body">
              <!-- LAS DIRECTIVAS SE VINCULAN CON EL SCRIPT -->
              <!-- INTERPOLACION  v-text v-html -->
              <h4><u>INTERPOLACION / v-text / v-html </u></h4>
              <p> {{ 3 + 4 }} </p>

              <p>{{ mensaje }}</p> <!-- la variable mensaje esta en script-->
              <p v-text="mensaje"></p>
              <p v-html="mensaje"></p>
              <hr> <!-- Separador -->
              <p>{{ mensajeHTML }}</p> <!-- la variable mensaje esta en script-->
              <p v-text="mensajeHTML"></p>
              <p v-html="mensajeHTML "></p>

              <!-- Property Binding /  v-bind-->
              <h4><u>Property Binding / v-bind </u></h4>
              <br>
              <input type="text" value="123" /><br>
              <input type="text" value="valor" /><br>
              <input type="text" v-bind:value="valor" />{{ valor }}<br>
              <input type="text" :value="valor" />{{ valor }}
              <hr>

              <!-- Event Binding /  v-on -->
              <h4><u>Event Binding / v-on </u></h4>
              <br>
              <button class="btn btn-success me-2" v-on:click="contador++" >Contar {{ contador }}</button>
              <button class="btn btn-warning me-2" @click="contador2++" >Contar {{ contador2}}</button>
              <button class="btn btn-danger" @click="incrementar()">Contar {{ getContador()}}</button> <!-- llama al metodo incrementar definido en script -->
              <hr>

              <!-- Double Data Binding /  v-model -->
              <h4><u>Double Data Binding /  v-model</u></h4>
              <br>
              <h5>MANUAL</h5>
              <input type="text" :value="valor2" @input="actualizar($event)"/>{{ valor2 }}  <!-- toma el objeto con los datos de evento-->
              <br>
              <h5>AUTOMATICO</h5>
              <input type="text" :model="valor3">{{ valor3 }}  <!-- toma el objeto con los datos de evento-->
              
            </div>
        </section>
    </template>

<script>
export default {
  name: 'Binding', // cambiá el nombre si querés

  // Registrar componentes hijos
  components: {
    // Ej: HijoComponente
  },

  // Propiedades que recibe el componente
  props: {
    // ejemplo: titulo: { type: String, default: '' }
  },

  // Estado local
  data() {
    return {
      mensaje: 'Hola desde Vue.js!',
      mensajeHTML: '<i>Hola desde Vue.js con HTML!</i>',
      valor: 123,
      valor2: 321,
      valor3: 987,
      contador: 0,
      contador2: 456,
      contador3: 789
    };
  },

  // Propiedades computadas
  computed: {
    // ejemplo: doble() { return this.contador * 2; }
  },

  // Observadores
  watch: {
    // ejemplo: contador(nuevo, viejo) { /* ... */ }
  },

  // Métodos
  methods: {
    incrementar() { 
      this.contador3++; 
    },
    getContador() {
      return this.contador3;
    },
    actualizar(e) {
      // console.log(e);
      const valor2 = e.target.value; //extraigo el contenido
      console.log(valor2);
      this.valor2 = valor2; //actualizo el data
    }
  },

  // Ciclo de vida
  created() {
    // Se ejecuta al crear la instancia
  },
  mounted() {
    // Se ejecuta cuando el componente se monta en el DOM
  },
  unmounted() {
    // Limpieza al desmontar
  }
};
</script>
<style scoped>
    .card-header{
        background-color: blue;
        color: white;
    }
</style>