<template>
<div>
  <apexchart type="bar" :options="options" :series="series"></apexchart>
</div>
</template>

<script>
import axios from "axios";
import apexChart from 'vue3-apexcharts'

export default {
     name: 'Chart',
  components: {
    apexchart: apexChart,
  },
    data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
       series: [],
      alumni:[],
     
    }
  },
   beforeMount(){
  // this.getAlumnies();
  }
  ,
  mounted(){
  this.setSeries();
  },
 created(){
  },
  methods:{
   
   async setSeries(){
      let data = null;
      let res = await  axios
       .get("http://127.0.0.1:8002/alumni", {
          headers: {
            "app-origins": "yes",
          },
        })
       data = res.data.data
       console.log(data)
      this.series = [{
        data: [data[0].lulusan_pt
        , 40, 45, 50, 49, 60, 70, 91]
      }]
    }
},
computed:{
  
}
}
</script>