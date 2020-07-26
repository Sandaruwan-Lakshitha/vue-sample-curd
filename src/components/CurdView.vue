<template>
 <div>
        <div class="d-flex justify-content-center">
            <div class="d-flex flex-column">
                <div class="p-2">
                     <h1>Jsonholder POST API</h1>
                </div>

                <div class="p-2">
                    <input class="data" type="text" placeholder="Enter ID" v-model="id">
                </div>

                <div class="p-2">
                    <input class="data" type="text" placeholder="Enter Title" v-model="title">
                </div>

                <div class="p-2">
                    <input class="data" type="text" placeholder="Enter Body" v-model="body">
                </div>

                <div class="p-2">
                    <div class="d-flex justify-content-start">
                        <button @click="CreateRecord">Create</button>
                        <button @click="UpdateRecord">Update</button>
                        <button @click="DeleteRecord">Delete</button>
                     </div>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        var id="",body="",title=""
        return{
            id,body,title
        }
    },
    
   methods:{
       ResetVal(){
           this.id=""
           this.body=""
           this.title=""
       },
       async CreateRecord(){
           let details={
               userId:this.id,
               title:this.title,
               body:this.body
           }
           this.ResetVal()
           let result=await axios.post('https://jsonplaceholder.typicode.com/posts',details)
           console.log(result.data)
       },

       async UpdateRecord(){
           let details={
               id:1,
               title:this.title,
               body:this.body,
               userId:this.id   
           }
           this.ResetVal()
           let link="https://jsonplaceholder.typicode.com/posts/"+details.id
           let result=await axios.put(link,details)
           console.log(result.data)
       },

        async DeleteRecord(){
            let id=this.id
            this.ResetVal()
            let link="https://jsonplaceholder.typicode.com/posts/"+id
            let result= await axios.delete(link)
            console.log(result.status)
        }
   }
}
</script>

<style>
.data{
    padding: 10px;
}
</style>