<template>
  <div>
		<h3>Create Code Snippet</h3>

		<div id="form-group">
			<label>Topic</label>
			<input type="text" placeholder="Please enter topic of you snippet" >
			<label>Your code</label>
			<textarea id="codeSnippet" rows="20" cols="135" placeholder="Paste your code into textarea" >
			</textarea>
			<button @click="submitButton">Add</button>
		</div>
		
  </div>
</template>

<script>
export default {
	Name: 'Create',
	data: () => ({
		baseUrl: 'https://www.forverkliga.se/JavaScript/api/api-snippets.php',
		title: String,
		content: String,
		newSnippet: Object

	}),
	props: {

	},
	methods: {
		submitButton(){
			console.log("submitCode button funkar");
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