let root={
    data:function(){
        return{
            url:'https://api.sampleapis.com/recipes/recipes',
            listaReceta:[],
            completo:false
        }
    },
    methods:{
        clickSelector:function($event){
            console.log($event.target.innerHTML)
            this.value = $event.target.innerHTML
        },
        getData:function(){
            fetch(this.url)
            .then(resp => resp.json())
            .then(data => this.listaReceta = data)
            .catch(e => console.log(e))
        },
        getDataASYNC: async function(){
            try{

                let data = await fetch(this.url);
                let dataFinal = await data.json();
                this.listaReceta = dataFinal;
                this.completo = !this.completo
            }catch(e){
                console.log(e)
            }
        },
        getDataAXIOS: async function(){
            try {
                let res = await axios(this.url);
                this.listaReceta = res.data;
                this.completo = !this.completo 
                
            } catch (error) {
                console.log(error);
            }
        }

    }

}

let appRuth = Vue.createApp(root).mount('#ruth');