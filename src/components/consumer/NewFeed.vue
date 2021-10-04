<template>
<div class="contain"></div>
    <div class="container">
            <div class="row">
              <div class="col-lg-4">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Petunjuk</h3>
                </div>
                <div class="card-body text-justify">
                  Bertujuan untuk memberikan pengumuman, dapat berupa pengumuman bantuan, lowongan pekerjaan, dan lain lain, untuk diberikan kepada alumni institusi pendidikan lainnya, yang dilihat dari lulusan karyawan anda.
                </div>
              </div>
              
              
            </div>
              <div class="col-md-8">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Pengumuman baru</h3>
                  </div>
                  <div class="card-body">
                    <form action="">
                      <div class="form-group">
                        <div class="row align-items-center">
                          <label class="col-sm-2">Subject </label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row align-items-center">
                          <label class="col-sm-2">File 
                            <span class="text-muted">(optional) </span></label>
                          <div class="col-sm-10">
                            <input type="file" class="form-control">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row align-items-center">
                          <label class="col-sm-2"> Deskripsi</label>
                          <div class="col-sm-10">
                      <textarea rows="4" class="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="btn-list mt-4 text-right">
                        <button type="submit" class="btn btn-primary btn-space">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<style scoped>

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