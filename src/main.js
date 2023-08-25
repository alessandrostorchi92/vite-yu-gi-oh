import { createApp } from 'vue'
import './scss/general.scss'
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.js"

createApp(App).mount('#app')

// Consegna: Descrizione: Crea un nuovo progetto utilizzando Vite e Vue 3 e definisci i componenti necessari per strutturare il layout come da screenshot allegato. Al caricamento della pagina, effettua una chiama ajax all’API di Yu Gi Oh e con i dati restituiti, stampa una card per ogni carta.

//TODO:Processo Logico:

//TODO: 1) Creo un componente finalizzato a stampare le carte di yu-gi-oh;
//TODO: 2) Siccome devo utilizzare "axios"(cioè fare una chiamata api) come prima cosa lo importo nel componente dopodichè devo recuperare l'indirizzo per accedere ai dati delle carte yu-gi-oh;
//TODO: 3) Inserisco nel return di data() un "array:[]" dove verranno pushati i dati delle carte;
//TODO: 4) Aggiungo nel methods{} la funzione "fetchCards()", dove inserirò la funzione axios.get..;
//TODO: 5) Accedo ai dati delle carte con la risposta di axios mediante il return della funzione axios.get..;
//TODO: 6) Verifico su console.vue se i dati sono stati salvati nel data() del componente;
//TODO: 7) Stampo i dati una volta immessi nel data() in html all'interno del tag <template></template> del componente CardsList.vue con "v-for"
//TODO: 8) Creo un nuovo componente per la singola card "CardItem.vue"
//TODO: 9) Devo trasferire al componente CardsList le informazioni di cui ha bisogno. Per farlo utilizzo le "props"

