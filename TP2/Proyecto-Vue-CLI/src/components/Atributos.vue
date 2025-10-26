    <template>
        <section class="card">
            <div class="card-header">
                <h3>Componente Atributos</h3>
            </div>
            <div class="card-body">

              <!----------------------------------------------------->
              <!--      :style estilos condicionales en linea      -->
              <!----------------------------------------------------->
              <h4> <u>:style</u> </h4>

              <button class="btn btn-success my-3" @click = "estado1 = !estado1"> Cambiar color fondo </button>

              <p :style="{'background-color':estado1? 'green':'crimson', color: 'white', padding: '10px', borderRadius: '10px'}">
                Este párrafo tiene un estilo dinámico.
              </p> 
              <hr>

              <!----------------------------------------------------->
              <!--      :class     -->
              <!----------------------------------------------------->
              <h4> <u>:class</u> </h4>

              <button class="btn btn-success my-3" @click = "estado2 = !estado2"> Cambiar color fondo </button> <br>

              <!-- <p class="alert alert-success"> -->
              <!-- <p :class="{ btn:true, 'btn-success': estado2, 'btn-danger': !estado2 }"> -->
              <p :class="['btn', {'btn-success': estado2, 'btn-danger': !estado2 }]">
                Este párrafo tiene un estilo dinámico.
              </p> 
            </div>
        </section>
    </template>

<script>
export default {
  name: 'Atributos', 
 data() {
    return {
      estado1: true,
      estado2:true,
    };
  },
  methods: {
    // Métodos del componente
  },
}

</script>
<style scoped>
    .card-header{
        background-color: blueviolet;
        color: white;
    }
</style>