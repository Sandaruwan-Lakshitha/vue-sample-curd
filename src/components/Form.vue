<template>
  <div class="container">
      <form @submit.prevent="processForm">
          <div class="form-group">
            <label for="">User Name</label>
            <input type="text"
              class="form-control" aria-describedby="helpId" placeholder="Enter Your User Name"
              v-model="uname">
            <small id="helpId" class="form-text text-muted">Help text</small>
          </div>

          <div class="form-group">
            <label for="">Password</label>
            <input type="text" class="form-control" placeholder="Enter your password"
            v-model="pwd">
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>

      </form>

      <h1>User Name Text is {{uname}}</h1>
      <h1>Password Text is {{pwd}}</h1>
    
  </div>
</template>

<script>

export default {
    data(){
        var uname=""
        var pwd=""
        return{
            uname,pwd
        }
    },
    methods: {
    processForm: function() {
      console.log({ uname: this.uname, pwd: this.pwd });
      /*alert('Processing!');
      console.log({ uname: this.uname, pwd: this.pwd });*/
      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
         title: this.uname,
        body: this.pws,
         userId: 11
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
    this.uname=""
    this.pwd=""
    }
  }
};
</script>

<style>
.form{
    font-size: 30px;
    padding: 20px;
}
</style>