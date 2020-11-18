<template>
    <div>
        <ul v-for="dato in datos" :key="dato.id">
            <li>{{dato.body}}</li> 
            <p>{{dato.title}}</p> 
            <hr> 
        </ul>
    </div>
</template>


<script>

import axios from 'axios'

export default {
    data() {
        return {
            name:'ConsultaApi',
            datos:[]
        }
    },

    created(){
        this.consulta();
    },
    methods:{
        async consulta(){
           const res =  await axios.get('https://jsonplaceholder.typicode.com/posts')
           console.log(res.data)
           this.datos = res.data
        }
    }
}
</script>