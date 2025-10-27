import { createRouter, createWebHistory} from "vue-router";
import Cards from "./components/Cards.vue";

const routes =[
    {path: '/', component: Cards},  
    
    {path: '/cards', component: Cards},

    {path: '/:pathmatch(.*)*', component: Cards}, /* se puede hacer un componente de error */
]

const router = createRouter({
    history: createWebHistory(), /* historial de navegacion */
    routes: routes /* rutas */
})

export default router;