import { createRouter, createWebHistory} from "vue-router";
import Binding from "./components/Binding.vue";
import Estructura from "./components/Estructura.vue";
import Atributos from "./components/Atributos.vue";
import Formulario from "./components/Formulario/index.vue";
import Cards from "./components/Cards.vue";

const routes =[
    /* definicion de la ruta raiz */
    {path: '/', component: Binding},  
    /* {path: '/', redirect: Binding}, */

    /* definicion de rutas activas */
    {path: '/binding', component: Binding},
    {path: '/estructura', component: Estructura},
    {path: '/atributos', component: Atributos},
    {path: '/formulario', component: Formulario},
    {path: '/cards', component: Cards},


    /* definicion de rutas no existentes */
    {path: '/:pathmatch(.*)*', component: Binding}, /* se puede hacer un componente de error */
]

const router = createRouter({
    history: createWebHistory(), /* historial de navegacion */
    routes: routes /* rutas */
})

export default router;