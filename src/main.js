import { createApp } from 'vue'
import './scss/general.scss'
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.js"

createApp(App).mount('#app')

// Consegna: Descrizione: Crea un nuovo progetto utilizzando Vite e Vue 3 e definisci i componenti necessari per strutturare il layout come da screenshot allegato. Al caricamento della pagina, effettua una chiama ajax all’API di Yu Gi Oh e con i dati restituiti, stampa una card per ogni carta.Aggiungi una select per filtrare i risultati in base all’archetipo.

// Le option della select devono essere popolate dinamicamente chiamando questo endpoint dell’api: https://db.ygoprodeck.com/api/v7/archetypes.php

//TODO:Processo Logico:

//TODO: 1) Creo un componente finalizzato a stampare le carte di yu-gi-oh;
//TODO: 2) Siccome devo utilizzare "axios"(cioè fare una chiamata api) come prima cosa lo importo nel componente dopodichè devo recuperare l'indirizzo per accedere ai dati delle carte yu-gi-oh;
//TODO: 3) Inserisco nel return di data() un "array:[]" dove verranno pushati i dati delle carte;
//TODO: 4) Aggiungo nel methods{} la funzione "fetchCards()", dove inserirò la funzione axios.get..;
//TODO: 5) Accedo ai dati delle carte con la risposta di axios mediante il return della funzione axios.get..;
//TODO: 6) Verifico su console.vue se i dati sono stati salvati nel data() del componente;
//TODO: 7) Stampo i dati una volta immessi nel data() in html all'interno del tag <template></template> del componente CardsList.vue con "v-for";
//TODO: 8) Creo un nuovo componente per la singola card "CardItem.vue";
//TODO: 9) Devo trasferire al componente CardsList le informazioni di cui ha bisogno. Per farlo utilizzo le "props";
//TODO: 10) Per scaricare il resto delle vado a pescare le informaizoni relative all'impaginazione su network console;
//TODO: 11) Dopodichè salvo quelle info in unìaltra variabile da inserire nel data();
//TODO: 12) Fisso la pagina corrente attraverso una variabile currentPage: 1;
//TODO: 13) Per scaricare al click sul button nuove carte utilizzo @click"fetchNextPage";
//TODO: 14) Imposto come return della funzione: this.fetchCards(this.paginationInfo.next_page) per mostrare le altre carde al click sul button;
//TODO: 15) Aggiungo altre carte a quelle che compaiono di default con il push (this.cards.push(...response.data.data)); 
//TODO: 16) Creo un nuovo componente SearchBar.vue nel quale inserisco nel return del data() la variabile searchText:"" e il v-model="searchText" al fine di rendere la searchbar interattiva;
//TODO: 17) Controllo su vue console se il componente searchBar funziona; 
//TODO: 18) Creo store.js nella cartella src; 
//TODO: 19) Modifico il v-model con v-model="store.searchText per aggiornare la variabile globale nello store.js; 
//TODO: 20) Verifico che nella searchBar ci sia impostato la store; 
//TODO: 21) Affinchè il filtro della barra di ricerca funzioni importo lo store anche nel componente CardsList.vue; 
//TODO: 20) Verifico che nella searchBar ci sia impostato la store; 
//TODO: 21) Aggiungo la proprietà "watch" sotto i methods , che consente di far partire ua chiamata api ad ogni lettera che è stata digitata dall'utente; 
//TODO: 22) Al suo interno inserisco il nome della variabile che intendo ricercare (store.searchText), svuoto l'array e invocare la funzione fetchCard() ; 






