<template>
    <div>
       <ul v-for="dato in datos" v-bind:key="dato.id">
            <li>{{dato.id}}</li>
            <li>{{dato.title}}</li>
            <img :src=dato.url alt="" width="50px" height="50px">
           <hr>
       </ul> 
    </div>
</template>



<script>
    import axios from 'axios'

export default {
    data() {
        return {
            name :'Home', 
            datos:[]
        }
    },
    created(){
       this.consultaApi();
    },

    methods:{
        async consultaApi(){
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            console.log(res.data)
            this.datos=res.data
        }
    }

}
</script>

<style lang="">
    
</style>