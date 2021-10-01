<template>
  <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 ml-auto">
                <form class="input-icon my-3 my-lg-0">
                  <input type="search" class="form-control header-search" placeholder="Search…" tabindex="1">
                  <div class="input-icon-addon">
                    <i class="fe fe-search"></i>
                  </div>
                </form>
              </div>
              <div class="col-lg order-lg-first">
                <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
                  <li class="nav-item">
                    <router-link :to="this.$route.path == '/consumer' || this.$route.path == '/consumer/kuisioner' ? '/consumer':'/alumni' " :class=" this.$route.path == '/alumni' || this.$route.path == '/consumer' ?  'nav-link active' : 'nav-link'"   id="home" ><i class="fe fe-home"></i> Home</router-link>
                  </li>
                  
                  <li class="nav-item dropdown">
                    <router-link :to="this.$route.path == '/consumer' || this.$route.path == '/consumer/kuisioner' ? '/consumer/kuisioner':'/alumni/kuisioner' "  :class=" this.$route.path == '/alumni/kuisioner' || this.$route.path == '/consumer/kuisioner' ?  'nav-link active' : 'nav-link'"  id="kuisioner" ><i class="fe fe-check-square"></i>Kuisioner</router-link>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Navbar2',
  methods:{
    
  }
}
</script>

