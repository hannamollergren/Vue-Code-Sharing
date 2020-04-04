<template>
  <div class="footer">
	<div v-if="displaySub">
		<label>Subscribe now</label>
		<input type="text" placeholder="Your email" @keyup="emailInput" @blur.once="emailIsTouched=true"/>
		<button @click="subButton" :disabled="!formIsValid">Send</button>
	</div>

	<div v-if="displayThanks">
		<p>Thank you for subscribing to Vue Code Sharings newsletter!</p>s
	</div>
  </div>
</template>

<script>
export default {
	Name: 'Footer',
	data: () => ({
		displaySub: Boolean(true),
		displayThanks: Boolean(false),
		email: String,
		emailIsTouched: false


	}),
	props: {

	},
	methods: {
		subButton(){
			console.log('subButton');
			
			this.displaySub = false;
			this.displayThanks = true;		
		},
		emailInput(event){
			this.email = event.target.value;

		}
	},
	computed: {
		emailIsValid() {
			const email = this.email;
			return email.length > 3 /* && email.includes('@') */;
		},
		formIsValid() {
			return this.emailIsValid || this.emailIsTouched;
		}
	}

}
</script>

<style scoped>
.footer{
	background-color: #41B883;
	padding: 1em;
	bottom: 0;
	position: fixed;
	width: 100%;  
/* 	margin: 4em 0 0;  */      
}
button{
	padding: 0.5em;
	border: 1px solid #2c3e50;
	color: #2c3e50;
	background: #41B883;
}
label{
	margin-right: 0.5em;
}
input{
	width: 30%;
	margin-right: 0.5em;
	padding: 0.5em
}
p{
	margin: 0;
	padding: 0.25em;
}
button:disabled{
	cursor: auto;
}
@media only screen and (max-width: 450px) {
	.footer{
		display: grid;
		grid-template-columns: repeat(1, 1fr);
	}
	div{
		grid-column: 1/2;
	}
	button{
		margin-top: 0.8em;
		width: 100%;
		
	}
	input{
		margin-top: 1em;
		display: block;
		width: 100%;
	}

}


</style>