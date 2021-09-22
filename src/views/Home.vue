<template>
  <div class="home">
    <Navbar> </Navbar>
    <Navbar2> </Navbar2>
    <!-- <table border="1">
       <tr v-for="(alumni,index) in alumnies" :key="index">
         <td>{{alumni.id_pelajar}}</td>
       </tr>
       tasdasd
     </table> -->
     
    
    <router-view>
      
    </router-view>
      
  </div>
</template>
<style>
hr {
  margin-top: 1rem;
}
.dashboard-profile {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 40px;
  min-height: 40px;
  max-width: 40px;
  min-width: 40px;
}
</style>
<script>
// @ is an alias to /src
import Navbar from "@/components/home/Navbar.vue";
import Navbar2 from "@/components/home/Navbar2.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  components: {
    Navbar,
    Navbar2,
  },
  setup() {
    let alumnies = ref([]);
    onMounted(() => {
      axios
        .get("http://127.0.0.1:8002/alumni", {
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
};
</script>
