<template>
  <div class="container mt-4">
    <div class="card ">
      <div class="card-box">
        <h4 class="header-title my-3">Data Alumni</h4>
        <div class="contain">
        <form id="forma">
          
            <div class="col-md-12 px-5">
              <div class="form-group ">
                <label class="form-label">Bidang pekerjaan Saudara termasuk Sektor : </label>
                <input type="text" class="form-control" placeholder="Company" value="Creative Code Inc.">
                <div class="custom-control custom-radio">
                  <input required type="radio" id="pemerintah" v-model="alumni.bidangkerja" name="bidangkerja" class="custom-control-input" value="pemerintah" >
                  <label class="custom-control-label float-left" for="pemerintah">Pemerintah</label>
              </div>
              <div class="custom-control custom-radio">
                  <input type="radio" id="BUMN" v-model="alumni.bidangkerja" name="bidangkerja" class="custom-control-input" value="bumn" >
                  <label class="custom-control-label float-left" for="BUMN">BUMN</label>

              </div>
              <div class="custom-control custom-radio">
                  <input type="radio" id="swasta" v-model="alumni.bidangkerja" name="bidangkerja" class="custom-control-input" value="swasta" >
                  <label class="custom-control-label float-left" for="swasta">Swasta</label>
              </div>
              <div class="custom-control custom-radio">
                  <input type="radio" id="wirausaha" v-model="alumni.bidangkerja" name="bidangkerja" class="custom-control-input" value="wirausaha" >
                  <label class="custom-control-label float-left" for="wirausaha">Wirausaha</label>
              </div>
              <div class="custom-control custom-radio">
                  <input type="radio" id="lainnya" v-model="alumni.bidangkerja" name="bidangkerja" class="custom-control-input" value="lainnya" >
                  <label id="lainnya2" class="custom-control-label float-left" for="lainnya" >Lainnya</label>
                  <input type="text" v-model="alumni.inputbidang" :class=" alumni.bidangkerja == 'lainnya' ?  '' : 'd-none'" id="inputbidang" class="form-control ml-2 float-left " >
              </div>
              </div>
              </div>
            
            <div class="col-md-12 px-5">
                  <div class="form-group">
                    <label class="form-label">Apakah bidang pekerjaan Saudara saat ini sesuai dengan bidang studi yang Saudara ambil?</label>
                    <div class="custom-control custom-radio">
                        <input type="radio" required id="sesuai" v-model="alumni.sesuaikah" name="sesuaikah" class="custom-control-input" value="1">
                        <label class="custom-control-label" for="sesuai">Sesuai</label>
                    </div>
                    <div class="custom-control custom-radio ">
                        <input type="radio" id="tidaksesuai" v-model="alumni.sesuaikah" name="sesuaikah" class="custom-control-input" value="0">
                        <label class="custom-control-label" for="tidaksesuai">Tidak Sesuai</label>
                    </div>
                </div>    
            </div>
             <div class="col-md-12 px-5">
            <div class="form-group">
                                                            <label class="form-label" for="simpleinput">Bagaimana cara Saudara mendapatkan pekerjaan pertama ?</label>
                                                            <select required v-model="alumni.kerja_pertama" class="form-control custom-select" id="kerja_pertama">
                                                                <option value="" selected> Pilih </option>
                                                                <option value="kompetisi">Berkompetisi (dengan tes)</option>
                                                                <option value="rekomendasi">Rekomendasi (tanpa tes)</option>
                                                                <option value="ditempatkan">Ditempatkan (karena ada ikatan dinas dsb.)</option>
                                                                <option value="diminta">Diminta oleh pengguna</option>
                                                                <option value="koneksi">Memanfaatkan koneksi</option>
                                                                <option value="agen">Melalui agen tenaga kerja</option>
                                                                <option value="unit">Melalui Unit Pengembangan Karir dan Penempatan Kerja </option>
                                                                <option value="iklankan diri">Meng-iklankan diri sendiri melalui internet</option>
                                                                <option value="wirausaha">Berwirausaha</option>
                                                            </select>
                                                        </div>
             </div>
        </form>
        </div>
      </div>
    </div>
  </div>
 
</template>
<style scoped>

.custom-control-label{
  float: left !important; 
}
/* .container-fluid{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
} */
.contain{
  padding: 5px 5px 5px 5px;
  /* border: 1px grey outset; */
  margin-left: 10px;
  margin-right: 10px;
}
</style>

<script>
document.title= 'Kuisioner alumni';
export default {
  data(){
    return{
      alumni :{
      }
    }
  },
  methods:{
       
  },
  computed: {
    
}
}
</script>
