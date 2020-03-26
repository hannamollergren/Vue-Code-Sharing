<template>
  <div class="footer">

		<div v-if="displaySub">
			<label>Subscribe now</label>
			<input type="text" placeholder="Your email"/>
			<button @click="subButton">Send</button>
		</div>
		<div v-if="displayThanks">
			<p>Thank you for subscribing to Vue Code Sharings newsletter!</p>
		</div>

  </div>
</template>

<script>
export default {
	Name: 'Footer',
	data: () => ({
		displaySub: Boolean(true),
		displayThanks: Boolean(false)


	}),
	props: {

	},
	methods: {
		subButton(){
			console.log("subbutton");
			this.displaySub = false;
			this.displayThanks = true;
			
		}
		
	}

}
</script>

<style scoped>
.footer{
	background-color: #41B883;
	padding: 1em;
	margin-top:2em;
	
}
button{
	padding: 0.5em;
	border: 1px solid ;
	color: #2c3e50;
	background: #41B883;
}
button:hover{
	font-weight: bolder;
}
label{
	margin-right: 0.5em;
}
input{
	width: 30%;
	margin-right: 0.5em;
	padding: 0.5em
}


</style>