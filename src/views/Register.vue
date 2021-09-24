<template>
<div class="page">
      <div class="page-single">
        <div class="container">
          <div class="row">
            <div class="col col-login mx-auto">
              <div class="text-center mb-6">
              </div>
              <form class="card" action="" method="post">
                <div class="card-body p-6">
                  <div class="card-title">Login to your account</div>
                  <div class="form-group">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                    <label class="form-label">
                      Password
                      
                    </label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" />
                      <span class="custom-control-label">Ingat saya</span>
                    </label>
                  </div>
                  <div class="form-footer">
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                  <a href="#" class="float-left small">Lupa password</a>
                  </div>
                </div>
              </form>
              <div class="text-center text-muted">
               <a href="#">Register</a> jika belum punya akun.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template

<script>
import axios from 'axios';

export default {
 methods:{
     submit(){
         axios.post('localhost:8005/login')
         .then(()=>{

         })
         .catch((err)=>{
             console.log(err)
         })
     }
 },
 setup(){

 }   
}
</script>