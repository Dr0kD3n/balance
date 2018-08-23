<template>
  <div class="wrapper">
    <Header class="Header"/>
    <Main class="Main"/>
    <Footer class="Footer"/>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Header from './components/Header/Header'
  import Main from './components/Main/Main'
  import Footer from './components/Footer/Footer'
  export default {
    data(){
      return{ }
    },
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style lang="scss">
.btn,.btn:hover,.btn:focus{
  border: 0;
  box-shadow: 0 0 0 0;
}
html{
  overflow-x: hidden;
}
body{
  background: #eee;
}
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar-toggler:not(:disabled):not(.disabled) {
  width: 38px;
  height: 38px;
}
.navbar-light {
  .navbar-toggler-icon {
    background-image: url(components/assets/img/menu.svg);
    background-size: 72% 100%;
  }
}
svg{
  height: 28px;
  width: 28px;
}
.Header{
  #ddown-split__BV_button_,#ddown-split__BV_button_:hover,#ddown-split__BV_button_:focus{
    cursor: default;
    color: #555;
    background: transparent !important;
    border: 0;
    box-shadow: 0 0 0 0;
    margin-top: -2px;
  }


}
.Main{
  top:0;
  width:100%
}
.navbar-light .navbar-nav .nav-link{
  color:white;
}
.navbar-light .navbar-nav .nav-link:hover{
  color:white;
}
.navbar-light .navbar-nav .show > .nav-link{
  color:white;
}

.Bell{
  margin-left: 0px;
}

.dropdown-menu, .show{
  background:#007bff;
}

.dropdown-item:hover, .dropdown-item:focus{
  color:white;
  background-color:#0069d9;
}
.Main{
  .show{
    background:white;
  }
  .nav-tabs .nav-link.active{
    background: white;
    color:#555;
  }
  @media all and (max-width: 395px){
    .nav-tabs .nav-item{
      width: 100%;
      text-align: center;
    }
    .nav-link.active, .nav-tabs .nav-link.active{
      border-left: 0;
      width: 100%;
      border-right: 0;
      border-color:#dee2e6 #dee2e6 #dee2e6
    }
  }

  .nav-tabs .nav-link:hover{
    color:#555;
  }
  a{
    color: #a7b1c2;
  }
}
.bg-primary,.btn-primary,.bg-primary:hover,.btn-primary:hover,.bg-primary,:focus.btn-primary:focus{
  background: #7bceff !important;
}
</style>
