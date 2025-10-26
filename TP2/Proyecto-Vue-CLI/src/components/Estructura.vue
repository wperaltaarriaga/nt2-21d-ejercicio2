    <template>
        <section class="card">
            <div class="card-header">
                <h3>Componente Estructura</h3>
            </div>
            <div class="card-body">

              <!----------------------->
                <!--    V-IF    -->
              <!----------------------->
                <h4><u>v-if</u></h4>
                <button class="btn btn-warning my-3" @click="mostrar = !mostrar"> {{mostrar ? 'Ocultar' : 'Mostrar'}} </button>

                <p v-if="mostrar" class="alert alert-warning">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam beatae nesciunt velit iusto quis quaerat aspernatur, quae eaque quo vero! Obcaecati laudantium ex odit quam consectetur architecto nulla enim!
                </p>

                <p v-else="!mostrar" class="alert alert-danger">
                  ELEMENTO OCULTO
                </p>
                <hr>

                <!----------------------->
                <!--      V-SHOW       -->
                <!----------------------->
                <h4><u>v-show</u></h4>
                <button class="btn btn-info my-3" @click="mostrar2 = !mostrar2"> {{mostrar2 ? 'Ocultar' : 'Mostrar'}} </button>

                <p v-show="mostrar2" class="alert alert-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam beatae nesciunt velit iusto quis quaerat aspernatur, quae eaque quo vero! Obcaecati laudantium ex odit quam consectetur architecto nulla enim!
                </p>
                <hr>

                <!----------------------->
                <!--      V-FOR       -->
                <!----------------------->
                <h4><u>v-for</u></h4>
                <!-- <ul>
                  <li>{{ usuarios[0] }}</li>
                  <li>{{ usuarios[1] }}</li>
                  <li>{{ usuarios[2] }}</li>
                </ul> -->
                <ul>
              <!--<li v-for="usuario in usuarios">{{ usuario }}</li> -->
                  <li v-for="(usuario, indice) in usuarios" :key="indice">
                    {{ indice + 1 }} - {{ usuario }} 
                  </li>
                </ul>
                <hr>

                <button class="btn btn-warning my-3" @click="agregarAlumno()">Agregar alumno</button>

                <div v-if="alumnos.length">

                  <ul>
                    <li v-for="(alumno, indice) in alumnos" :key="indice">
                      <!-- <pre> {{ indice + 1 }} - {{ alumno }} </pre> --> 
                      <!-- {{ alumno.nombre }} {{ alumno.apellido }}  -->
                      {{ `${indice + 1} - ${alumno.nombre} ${alumno.apellido}`}}  <!-- ES LO MISMO QUE ESTO {{ indice + 1 }} - {{ alumno.nombre }} {{ alumno.apellido }}  -->
                    </li>
                  </ul>

                  <div class="table-responsive">
                    <table class="table table-dark">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Apellido</th>
                          <th>Edad</th>
                          <th>Curso</th>
                          <th>Foto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(alumno, indice) in alumnos" :key="indice" class="table table-light">
                          <td>{{ alumno.nombre }}</td>
                          <td>{{ alumno.apellido }}</td>
                          <td>{{ alumno.edad }}</td>
                          <td>{{ alumno.curso? 'Si':'No' }}</td>
                          <td>
                            <img :src="alumno.foto" width="50" :alt="alumno.nombre" />
                          </td>
                        </tr>
                      </tbody>
                    </table>                  
                  </div>

                <!-------------------------------->
                <!--  Propiedades Computadas    -->
                <!-- v-if / v-else-if / v-else  -->
                <!-------------------------------->

                  <h4 class="alert alert-primary">
                    <span v-if="obteberDatosAlumnos.cantidad==0">
                      Ningun alumno hizo el curso
                    </span> <!-- quiero que se active cuando ningun alumno hizo el curso -->
                    <span v-else-if="obteberDatosAlumnos.cantidad == obteberDatosAlumnos.total">
                      Todos los alumnos hicieron el curso
                    </span>
                    <span v-else>
                      {{ obteberDatosAlumnos.cantidad }} de {{ obteberDatosAlumnos.total }} alumnos hicieron el curso
                    </span>
                  </h4>

                  <!-- <p>Obtener datos alumnos: {{  obteberDatosAlumnos}}</p> -->
          

                  <div v-for="(alumno, indice) in alumnos" :key="indice" class="media alert alert-danger w-75">
                    <img :src="alumno.foto" width="150" :alt="alumno.nombre" class="me-3"/>
                    <div>
                      <h5><u>Orden #{{ indice + 1 }}</u></h5>
                      <p>Nombre: <a :href="alumno.foto">{{ alumno.nombre }} {{ alumno.apellido }}</a></p>
                      <p>Edad: <i>{{ alumno.edad }}</i></p>
                      <!--Hizo el curso: <b>{{ alumno.curso? 'Si' : 'No' }}</b> -->
                      Hizo el curso: <input type="checkbox" v-model="alumno.curso" />
                      <button class="btn btn-danger ms-3" @click="borrarAlumno(indice)">Borrar</button>
                    </div>
                  </div>
                </div>

                <div v-else>
                  <p class="alert alert-danger">No hay alumnos para mostrar</p>
                </div>

            </div>
        </section>
    </template>

<script>
export default {
  name: 'Estructura', // cambiá el nombre si querés

  // Registrar componentes hijos
  components: {
    // Ej: HijoComponente
  },

  // Propiedades que recibe el componente
  props: {
    // ejemplo: titulo: { type: String, default: '' }
  },

  // Estado local
  data() { /* data de componentes de estructura */
    return {
      mostrar:true,
      mostrar2:true,
      usuarios:[
        'Pablo',
        'María',
        'Juan',
        'Ana',
      ],
      alumnos:[ /* https://www.iconfinder.com/free_icons */
        { nombre: 'Pablo', apellido: 'Perez', edad: 25, curso: true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-512.png' },
        { nombre: 'María', apellido: 'Gomez', edad: 22, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png' },
        { nombre: 'Juan', apellido: 'Lopez', edad: 28, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png' },
        { nombre: 'Ana', apellido: 'Martinez', edad: 24, curso: true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png' },
      ]
    };
  },

  // Propiedades computadas
  computed: { /* se ejecuta cada vez q cambia algun dato se esté o no llamando a la propiedad */
    obteberDatosAlumnos(){ /* es como una funcion pero no recibe parametros. ES COMO UN GETTER */
        let cant=0;
        this.alumnos.forEach( alumno => {
          if(alumno.curso) cant++;
        });
        return {
          cantidad: cant,
          total: this.alumnos.length,
        }
    }

  },

  // Observadores
  watch: {
    // ejemplo: contador(nuevo, viejo) { /* ... */ }
  },

  // Métodos
  methods: { /* se utilizan con eventos e interpolaiones */
    borrarAlumno(indice) {
      console.log('Borrar alumno');
      this.alumnos.splice(indice, 1); /* PARA BORRAR DEL ARRAY */
    },
    agregarAlumno(){
      this.alumnos.push( /* PARA AGREGAR EN EL ARRAY */
        { nombre: 'Federico', apellido: 'Alberca', edad: 33, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png' }
      );
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
        background-color: pink;
        color: brown;
    }
    .table td{
      vertical-align: middle;
    }    
    .media{
      display: flex;
      align-items: start;
      justify-content: start;
    }
</style>