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
.navbar-light .navbar-toggler-icon {
  background-image: url(https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ferbsner.de%2Ffiles%2FContent%2FIcons%2Fburger_white-18.svg&f=1);
}
svg{
  height: 28px;
  width: 28px;
}
.Header{
  margin-bottom: 10px;
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
#ddown-split__BV_button_:hover{
  background-color: #007bff;
  border-color: #007bff;
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
</style>
