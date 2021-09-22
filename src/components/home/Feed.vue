<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-box">
          <div class="feed mt-2">
            <div class="text-justify">
              <div class="row">
                <div class="col-1">
                  <img
                    src="../../assets/logo.png"
                    alt="user-img"
                    class="
                      img-fluid img-thumbnail
                      rounded-circle
                      mb-2
                      dashboard-profile
                    "
                  />
                </div>
                <div class="ml-3 col-8 pt-2">SMPN 10 TAPUNG</div>
              </div>
              <div class="ml-5 text-muted">
              10:12, 27 januari 2021
              </div>
              <div class="mr-5 ml-5">
                Salam hormat bagi seluruh alumni, dan juga pengguna alumni STAI
                Auliaurrasyidin Informasi data dalam tracer alumni ini akan
                sangat bermanfaat bagi universitas dalam rangka mengevaluasi,
                memperbaiki, dan meningkatkan kualitas kampus STAI
                Auliaurrasyidin dalam hal fasilitas, kurikulum dan juga
                pembelajaran. Selain itu, hasil tracer study juga sangat berguna
                untuk pengisian borang dalam rangka akreditasi program studi dan
                perguruan tinggi. serta dapat memberikan informasi penting
                mengenai hubungan antara dunia pendidikan tinggi dengan dunia
                usaha dan industri. Tracer Alumni ini dapat menyajikan informasi
                mendalam dan rinci mengenai kecocokan kerja yang terjadi. Dengan
                demikian, Tracer Alumni dapat digunakan untuk membantu mengatasi
                permasalahan kesenjangan kesempatan kerja dan upaya dari
                perbaikannya. Kami sangat berharap kesediaan para alumni, dan
                juga pengguna alumni STAI Auliaurrasyidin, untuk meluangkan
                waktu mengisi kuisioner tracer alumni dengan sebenar-benarnya.
                Kami menjamin kerahasiaan informasi yang diisikan dalam
                kuisioner tersebut. Kami menyampaikan terima kasih atas dukungan
                dan partisiasi saudara.
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    setup(){
        axios
        .get("http://127.0.0.1:8002/alumni", {
          headers: {
            "app-origins": "yes",
          },
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
  
    }
}
</script>