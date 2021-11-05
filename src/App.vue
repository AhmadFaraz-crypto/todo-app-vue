<template>
  <div id="app">
  <div :class="($router.history.current.path === '/' || $router.history.current.path === '*') ? 'd-none' : 'd-block'">
  <div class="d-flex flex-row sidebar-wrapper">
      <SideBar />
    </div>
  </div>
    <router-view/>
  </div>
</template>

<script>
import SideBar from "./components/SideBar/sidebar.vue";
export default {
  components: {
    SideBar
  },
}
</script>

<style>
#app {
  font-family: 'Inter' !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.modal-content {
  padding: 34px 43px !important;
}

.sidebar-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  min-height: 100vh;
  max-height: 100vh;
}

.modal-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}

.form-data {
  padding: 51px 70px;
  margin: 0 auto;
  width: 100%;
}

.form-data .btn {
  margin: 0 auto;
}

.form-data .summary {
  position: relative;
  padding-top: 20px;
}

.form-data .summary .summary-icon {
  position: absolute;
}

.form-data .summary input {
  padding-bottom: 10px;
  padding-left: 30px;
  border: none;
  border-bottom: 0.5px solid rgba(189, 189, 189, 0.8);
  width: 100%;
}

.form-data .description {
  position: relative;
  padding-top: 34px;
}

.form-data .description .description-icon {
  position: absolute;
}

.form-data .description textarea {
  padding-left: 30px;
  border: none;
  border-bottom: 0.5px solid rgba(189, 189, 189, 0.8);
  width: 100%;
}

.form-data .summary input:focus {
  outline: none;
}

.form-data .description textarea:focus {
  outline: none;
}

.save-btn {
  min-width: 348.34px;
  height: 51px;
  display: flex;
  justify-content: center;
  text-align: center !important;
  color: #fff !important;
  background: #000000 !important;
  border-radius: 100px !important;
}

@media (min-width: 576px){
  .modal-dialog {
      max-width: 765px !important;
  }
}
</style>
