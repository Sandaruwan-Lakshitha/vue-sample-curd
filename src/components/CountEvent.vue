<template>
  <div>
      <h1>Counr Event is {{count}}</h1>
      <button v-on:click="test">You clickd me {{this.lcount}} times</button>
  </div>
</template>

<script>
export default {
    name:'CountEvent',
data:function(){
    return {
        count:0
    }
},
methods:{
    test:function(){
        alert("Hello Test")
        return{
         lcount :'Hello'
        }
    }
}

}
</script>

<style>

</style>