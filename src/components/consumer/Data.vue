
<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-box">
          <h4 class="header-title my-3">Data Alumni Consumer</h4>
          <div class="contain mb-3">
            <table border="1">
            <tr>
            <table class="table table-vcenter card-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Title</th>
                          <th>Role</th>
                          <th class="w-1"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex py-1 align-items-center">
                              <span class="avatar me-2" style="background-image: url(./static/avatars/006m.jpg)"></span>
                              <div class="flex-fill">
                                <div class="font-weight-medium">Lorry Mion</div>
                                <div class="text-muted"><a href="#" class="text-reset">lmiona@livejournal.com</a></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>Automation Specialist IV</div>
                            <div class="text-muted">Accounting</div>
                          </td>
                          <td class="text-muted">
                            User
                          </td>
                          <td>
                            <a href="#">Edit</a>
                          </td>
                        </tr>
                        
              <tr v-for="(alumni,index) in alumnies" :key="index">
                <td>{{alumni.id_pelajar}}</td>
              </tr>
                      </tbody>
                    </table>
            
         </div>
         </div>
         </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
    setup(){
    let alumnies = ref([]);
    onMounted(() => {
      axios
        .get("http://127.0.0.1:8002/alumni/kerja", {
          headers: {
            "app-origins": "yes",
          },
        })
        .then((result) => {
          alumnies.value = result.data.data;
          console.log(alumnies);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return {
      alumnies,
    };
  },
}
</script>