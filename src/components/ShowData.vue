<template>
    <div>
        <h1>Show Data</h1>
        <button v-on:click="getPostData">Show</button>
        <button v-on:click="flag=false">Hide</button>


        <div class="d-flex justify-content-center">
            <table class="tbl" v-if="flag">
                <tr v-for="post in PostList" :key="post.id">
                    <td>
                        <div>
                         <span>{{post.userId}}</span>
                        </div>
                    </td>

                    <td>
                        <div>
                         <span>{{post.id}}</span>
                        </div>
                    </td>

                    <td>
                        <div>
                         <span>{{post.title}}</span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
   name:"ShowData",
data(){
    return{
        PostList:null,
        flag:false
    }
},
methods:{
    async getPostData(){
        
        var data=await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.PostList=data.data
        //console.log(data.headers)
        console.log(data)
        this.flag=true
    }
    
}
}
</script>
<style>
h1{
    text-align: center;
}
.tbl{
    border-style: solid;
    border-width: 1px;
    border-color:black;
    padding: 10px;
}
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>