export default {
    name: 'Formularios', 
  
    components: {
    
    },
    props: {

    },
    data() { // son objetos reactivos, siempre estan observados y se estan actualizando
      return {
        formData: this.getInicialData(),
        formDirty: this.getInicialData()
      };
    },
  
    // Propiedades computadas
    computed: {
      errorNombre(){
        let mensaje = '';
        let nombre = this.formData.nombre;
        if(!nombre) mensaje = 'CAMPO REQUERIDO';
        else if(nombre.length <= 3) mensaje = 'Este campo debe poseer como minimo 3 caracteres';
        else if(nombre.length > 10) mensaje = 'Este campo debe poseer como maximo 10 caracteres';
        else if(nombre.includes(' ')) mensaje = 'El nombre no puede contener espacios intermedios';
        return{
          mensaje: mensaje,
          mostrar: mensaje !== '' && this.formDirty.nombre,
          ok: mensaje == '',
        }
      },

      errorApellido(){
        let mensaje = '';
        let apellido = this.formData.apellido;
        if( !apellido) mensaje = 'CAMPO REQUERIDO';
        return{
          mensaje: mensaje,
          mostrar: mensaje !== '' && this.formDirty.apellido,
          ok: mensaje =='',
        }
      },

      errorEdad(){
        let mensaje = '';
        let edad = this.formData.edad;
        if(!edad) mensaje = 'CAMPO REQUERIDO';
        else if(edad < 18) mensaje = 'Debe ser mayor a 18 años';
        else if(edad > 120) mensaje = 'Debe ser menor a 120 años';
        return{
          mensaje: mensaje,
          mostrar: mensaje !== '' && this.formDirty.edad,
          ok: mensaje == '',
        }
      },
    },
  
    // Observadores
    watch: {
      // ejemplo: contador(nuevo, viejo) { /* ... */ }
    },
  
    // Métodos
    methods: {
      getInicialData(){
        return{
            nombre: null,
            apellido: null,
            edad: null
          }
      },

      estadoBotonDeshabilitado(){
        return !this.errorNombre.ok || !this.errorApellido.ok || !this.errorEdad.ok;
      },
      enviar(){
        const datos = {...this.formData}; //... clono las propiedades
        console.log(datos);
        this.formData = this.getInicialData() //reseteo el formulario
        this.formDirty = this.getInicialData()
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