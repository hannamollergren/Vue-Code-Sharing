<template>
  <div>
		<h3>Create Code Snippet</h3>

		<div id="form-group">
			<label>Title</label>
			<input type="text" placeholder="Please enter topic of you snippet" v-model="snippet.title">
			<label>Your code</label>
			<textarea id="codeSnippet" rows="20" cols="135" placeholder="Paste your code into textarea" v-model="snippet.content">
			</textarea>
			<button @click="submitButton">Add</button>
		</div>
		<br>
		Snippet: {{ snippet }}
		
  </div>
</template>

<script>
import axios from 'axios'
export default {
	Name: 'Create',
	data: () => ({
		baseUrl: 'https://www.forverkliga.se/JavaScript/api/api-snippets.php',
		snippet: {title: '', content: ''},
		test: '',
		

	}),
	props: {

	},
	methods: {
		submitButton(){
			console.log("submitCode button funkar");
			let test = axios
			.post(this.baseUrl + '?add&title=' + this.snippet.title + '&content=' + this.snippet.title);
			console.log("submittButton title:", this.snippet.title,'content:', this.snippet.content)
			console.log('snippet object', test);
		}
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