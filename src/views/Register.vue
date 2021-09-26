<template>
  <div class="page">
      <div class="page-single">
        <div class="container">
          <div class="row">
            <div class="col col-login mx-auto">
              <div class="text-center mb-6">
                <img src="../assets/logo.png" class="h-6" alt="">
              </div>
              <form class="card" action="" method="post">
                <div class="card-body p-6">
                  <div class="card-title">Register</div>
                  <div class="form-group">
                    <label class="form-label">Nama</label>
                    <input type="text" class="form-control" v-model="user.nama" placeholder="Enter name">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="user.pass" placeholder="Password">
                  </div>
                  
                  
                  <div class="form-footer">
                    <div class="btn btn-primary btn-block" @click="getData()">Create new account</div>
                  </div>
                </div>
              </form>
              <div class="text-center text-muted">
                Sudah punya akun? <router-link to="/">Login</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      user:{
        nama:"",
        email:'',
        pass:'',
      }
      
    };
  },
  methods: {
  
  getData(){
   console.log(this.user.nama,this.user.email,this.user.pass)
  }
  },
  mounted() {
  },
};
</script>