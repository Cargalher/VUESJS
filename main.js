//                       ----------------->>>>LIVE CODING<<<<//-----------------
// Direttiva VUE _ V-Model (INPUTS)
// 1st.  Predisponiamo due input, in cui inseriremo Nome e Cognome. In un paragrafo utilizzare Nome e Cognome per salutare l’utente
/*

let app = new Vue (
    {
        el: '#root',
        data:{
            name:"",
            lastname:"",
        }
    },
)


*/

// Direttiva VUE _V-bind (Crea legame tra atributto HTML e vue instance)

/*
// Fabio's example.
let app = new Vue (
    {
        el: '#root',
        data:{
            message:"Hello Vue.Js",
            title:"Learn VueJs",
            classTitle: 'lead'
        },
        methods:{
            // ES5
            saluta : function (){
                return 'hi!!';
            },
            // ES6
            greetings (){
                alert (this.title);   // alert that appear on click 
            }
        }
    }
    
);
*/

// 2nd.livecoding. Creiamo una pagina con all’interno un titolo di colore rosso. Al click di un bottone il titolo diventerà blu.

const app = new Vue({
    el: '#root',
    data:{
        colorClass: 'red',
    },

    methods:{
        changeColor(){
            if(this.colorClass === 'red'){
                this.colorClass = 'blue';
            }else{
                this.colorClass === 'red';
            }
            
        }
    }
})