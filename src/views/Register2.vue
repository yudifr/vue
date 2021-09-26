<template>
  <div class="page">
    <div class="page-single">
      <div class="container">
        <div class="row">
          <form class="card">
            <div class="card-body">
              <h3 class="card-title">Register</h3>
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label class="form-label">Company</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                    <label class="form-label">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="form-group">
                    <label class="form-label">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6">
                  <div class="form-group">
                    <label class="form-label">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6">
                  <div class="form-group">
                    <label class="form-label">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-label">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Home Address"
                    />
                  </div>
                </div>

                <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                    <label class="form-label">Provinsi</label>
                    <select
                      class="form-control custom-select"
                      v-model="province"
                      @change="selectProv($event)"
                    >
                      <option selected value="">Provinsi</option>
                      <option
                        v-for="province in provinces.provinsi"
                        v-bind:key="province.id"
                        :value="province.id"
                      >
                        {{ province.nama }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                    <label class="form-label">Kota/Kabupaten</label>
                    <select
                      class="form-control custom-select"
                      v-model="city"
                      @change="selectCity($event)"
                    >
                      <option selected value="">Kota/Kabupaten</option>
                      <option
                        v-for="city in cities"
                        v-bind:key="city.id"
                        :value="city.id"
                      >
                        {{ city.nama }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                    <label class="form-label">Kelurahan</label>
                    <select
                      class="form-control custom-select"
                      @change="selectDistrict($event)"
                    >
                      <option selected value="">Kelurahan</option>
                      <option
                        v-for="district in districts"
                        v-bind:key="district.id"
                        :value="district.id"
                      >
                        {{ district.nama }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                    <label class="form-label">Kelurahan</label>
                    <select
                      class="form-control custom-select"
                    >
                      <option selected value="">Kelurahan</option>
                      <option
                        v-for="village in villages"
                        v-bind:key="village.id"
                        :value="village.id"
                      >
                        {{ village.nama }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group mb-0">
                    <label class="form-label">About Me</label>
                    <textarea
                      rows="5"
                      class="form-control"
                      placeholder="Here can be your description"
                      value="Mike"
                    >
Oh so, your weak rhyme</textarea
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer text-right">
              <button type="submit" class="btn btn-primary">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      provinces: [],
      cities: [],
      districts: [],
      villages: [],
    };
  },
  methods: {
    prov() {
      this.provinces = [];

      axios
        .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
        .then((result) => {
          this.provinces = result.data;
          console.log(this.provinces);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectProv(event) {
      axios
        .get(
          "https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=" +
            event.target.value
        )
        .then((response) => {
          this.cities = response.data.kota_kabupaten;
          console.log(this.cities);
        })
        .catch((error)=>{
          console.error(error);
        });
    },
    selectCity(event) {
      this.districts = [];
      axios
        .get(
          "https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=" +
            event.target.value
        )
        .then((response) => {
          this.districts = response.data.kecamatan;
          console.log(this.districts);
        })
        .catch((error)=>{
          console.error(error);
        });
    },
    selectDistrict(event) {
      axios
        .get(
          "https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=" +
            event.target.value
        )
        .then((response) => {
          this.villages = response.data.kelurahan;
          console.log(this.villages);
        })
        .catch((error)=>{
          console.error(error);
        });
    },
    submit() {
      axios
        .post("localhost:8005/login")
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.prov();
  },
};
</script>