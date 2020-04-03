<template>
  <div id="app">
	<div class="content-container">
		<Header/>
		<router-view/> 
	</div>
		<Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue' 

export default {
  name: 'App',
  components: {
    Header, Footer 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
button{
    cursor: pointer;
	border-radius: 3px;
	font-size: 0.8em;
}
p{
	margin: 1em 3em 1em;
}
h3{
	margin: 0 0 1em;
}
.content-container{
	padding-bottom: 4em; 
}




</style>
