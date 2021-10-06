
<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-box">
          
          <h4 class="header-title my-3">Data Pelajar</h4>
          <div class="contain mb-3">
         <div class="table-responsive">
            <table class="table table-vcenter card-table">
                      <thead class="bg-secondary">
                        <tr >
                          <th class="text-light" >Nama</th>
                          <th class="text-light" >SD</th>
                          <th class="text-light" >SMP</th>
                          <th class="text-light" >SMA</th>
                          <th class="text-light" >Perguruan tinggi</th>
                          <th class="text-light">Sesuai bidang studi?</th>
                          <th class="text-light">cara mendapat pekerjaan?</th>
                          <th class="text-light">Gaji pertama</th>
                          <th class="text-light">Gaji saat ini</th>
                          <th class="text-light">hambatan kerja</th>
                          <th class="text-light">Pindah kerja</th>
                          <th class="text-light">sektor bidang kerja</th>
                          <th class="text-light">bidang kerja</th>
                          <th class="w-1 text-light"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex py-1 align-items-center">
                              <span class="avatar me-2" style="background-image: url(./static/avatars/006m.jpg)"></span>
                              <div class="flex-fill">
                                
                              </div>
                            </div>
                          </td>
                          <td>
                            2020
                          </td>
                        </tr>
                         <tr>
                          <td>
                            <div class="d-flex py-1 align-items-center">
                              <span class="avatar me-2" style="background-image: url(./static/avatars/006m.jpg)"></span>
                              <div class="flex-fill">
                                
                              </div>
                            </div>
                          </td>
                          <td>
                            2020
                          </td>
                        </tr>
                        

              <tr v-for="(alumni,index) in alumnies" :key="index">
                <td>
                <router-link :to="{ name: 'consumer.EmployeeProfile', params: { id: alumni.id_pelajar  }}">    {{alumni.id_pelajar}} </router-link>
                  </td>
                <td>{{alumni.id_pelajar}}</td>
              </tr>
                      </tbody>
                    </table>
         </div>
          </div>
         </div>
         </div>
         <div class="row">
           <div class="col-md-12">
             <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Basic form</h3>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group mb-3 ">
                      <label class="form-label">Email address</label>
                      <div>
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                        <small class="form-hint">We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                    <div class="form-group mb-3 ">
                      <label class="form-label">Password</label>
                      <div>
                        <input type="password" class="form-control" placeholder="Password">
                        <small class="form-hint">
                          Your password must be 8-20 characters long, contain letters and numbers, and must not contain
                          spaces, special characters, or emoji.
                        </small>
                      </div>
                    </div>
                    <div class="form-group mb-3 ">
                      <label class="form-label">Select</label>
                      <div>
                        <select class="form-select">
                          <option>Option 1</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-3">
                      <label class="form-label">Checkboxes</label>
                      <div>
                        <label class="form-check">
                          <input class="form-check-input" type="checkbox" checked="">
                          <span class="form-check-label">Option 1</span>
                        </label>
                        <label class="form-check">
                          <input class="form-check-input" type="checkbox">
                          <span class="form-check-label">Option 2</span>
                        </label>
                        <label class="form-check">
                          <input class="form-check-input" type="checkbox" disabled="">
                          <span class="form-check-label">Option 3</span>
                        </label>
                      </div>
                    </div>
                    <div class="form-footer">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
           </div>
           <div class="col-md-6">
             <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Basic form</h3>
                </div>
                <div class="card-body">
                 <div style="height:600px;width: 600px; display: flex;flex-direction:column;">
    <vue3-chart-js
        :id="barChart.id"
        :type="barChart.type"
        :data="barChart.data"
    ></vue3-chart-js>
  </div>
                </div>
              </div>
           </div>
           <div class="col-md-6">
             <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Basic form</h3>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group mb-3 ">
                      <label class="form-label">Email address</label>
                      <div>
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                        <small class="form-hint">We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                    <div class="form-group mb-3 ">
                      <label class="form-label">Password</label>
                      <div>
                        <input type="password" class="form-control" placeholder="Password">
                        <small class="form-hint">
                          Your password must be 8-20 characters long, contain letters and numbers, and must not contain
                          spaces, special characters, or emoji.
                        </small>
                      </div>
                    </div>
                    <div class="form-group mb-3 ">
                      <label class="form-label">Select</label>
                      <div>
                        <select class="form-select">
                          <option>Option 1</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-3">
                      <label class="form-label">Checkboxes</label>
                      <div>
                        <label class="form-check">
                          <input class="form-check-input" type="checkbox" checked="">
                          <span class="form-check-label">Option 1</span>
                        </label>
                        <label class="form-check">
                          <input class="form-check-input" type="checkbox">
                          <span class="form-check-label">Option 2</span>
                        </label>
                        <label class="form-check">
                          <input class="form-check-input" type="checkbox" disabled="">
                          <span class="form-check-label">Option 3</span>
                        </label>
                      </div>
                    </div>
                    <div class="form-footer">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
           </div>
         </div>
         </div>
</template>
<style scoped>
table{
  table-layout: auto !important;
  
}
td,th{
  text-align: center !important;
  vertical-align: middle !important;
}
.custom-control-label, .custom-controls-stacked{
  float: left !important; 
}
/* .container-fluid{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
} */
.contain{
  padding: 5px 5px 15px 5px;
  /* border: 1px grey outset; */
  margin-left: 10px;
  margin-right: 10px;
}
.size{
  width: 0px !important;
}
</style>
<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  setup () {
    const barChart = {
      id: 'bar',
      type: 'bar',
      data: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [40, 20, 80, 10]
          }
        ]
      }
    }

    

    return {
      barChart,
    }
  },
}
</script>