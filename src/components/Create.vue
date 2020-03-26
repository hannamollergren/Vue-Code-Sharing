<template>
  <div>
		<h3>Create Code Snippet</h3>

		<div id="form-group">
			<label>Topic</label>
			<input type="text" placeholder="Please enter topic of you snippet" @keyup="inputTitle">
			<label>Devloper</label>
			<input type="text" placeholder="Your firstname" @keyup="inputDeveloper">
			<label>Your code</label>
			<textarea id="codeSnippet" rows="20" cols="135" placeholder="Paste your code into textarea" @keyup="inputCode">
			</textarea>
			<button @click="submitButton">Submit</button>
		</div>
		
  </div>
</template>

<script>
export default {
	Name: 'Create',
	data: () => ({
		title: String,
		developer: String,
		code: String,
		newSnippet: Object

	}),
	props: {

	},
	methods: {
		inputTitle(event){
			console.log("inputTitle", this.title);
			
			this.title = event.target.value;

		},
		inputDeveloper(event){
			console.log("inputDev", this.developer);
			
			this.developer = event.target.value;
			
		},
		inputCode(event){
			console.log("inputCode", this.code);
			this.code = event.target.value;
		},
		submitButton(){
			console.log("submitCode button funkar");
			this.newSnippet = { 	
				id: '',
				title: this.title,
				developer: this.developer,
				code: this.code
			}
			console.log("submitButton newsnipept", this.newSnippet);
			
		},
	},
	computed:{ 
			
	}
}
</script>

<style scoped>
#form-group{
	margin: 0 4em 0;
	display: grid;
}

label{
	display: block;
	text-align: start;
}
input{
	width: 100%;
	margin: 0 0 1em;
	padding: 0.5em
}
textarea{
	width: 100%;
	padding: 0.5em
}
button{
	margin-top: 1em;
	width: 100%;
	padding: 0.5em;
	color: white;
	background: #2c3e50;
}
button:hover{
	background-color: #3c546b;
	transition: 0.6s;
}


</style>