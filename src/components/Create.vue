<template>
  <div>
		<h3>Create Code Snippet</h3>

		<div id="form-group">
			<label>Title</label>
			<input type="text" placeholder="Please enter the title" v-model="snippet.title">

			<span v-if="/*titleIsTouched &&*/ !titleIsValid" @blur.once="titleIsTouched = true">At least 5 characters please</span>
				{{ titleIsTouched }}
				{{ titleIsValid }}

			<label>Your code</label>
			<textarea id="codeSnippet" rows="20" cols="135" placeholder="Paste your code into textarea" v-model="snippet.content">
			</textarea>
			<button @click="submitButton">Add</button>
		</div>
		<div class="msg">{{ msg }}</div>
		<br>Snippet: {{ snippet }}
		
  </div>
</template>

<script>
import axios from 'axios'
export default {
	Name: 'Create',
	data: () => ({
		baseUrl: 'https://www.forverkliga.se/JavaScript/api/api-snippets.php',
		snippet: {title: '', content: ''},
		msg: '',
		titleIsTouched: false,
		

	}),
	props: {

	},
	methods: {
		submitButton(){
			this.msg = "Adding..."
			
			axios
				.post(this.baseUrl + '?add&title=' + this.snippet.title + '&content=' + this.snippet.title) 
				.then((response) => {
					console.log('response', response)
					this.msg = "Snippet added succsessfully, thank you!"
				})
				.catch((error) => {
					this.msg = 'Failed to add snippet, please try again';
					this.error = true;
					console.log(error);
				})
				console.log('title', this.snippet.title, 'content', this.snippet.content)

				console.log(this.baseUrl + '?add&title=' + this.snippet.title + '&content=' + this.snippet.title);

				this.snippet.title = '';
				this.snippet.content = '';
		}
	},
	computed:{ 
		titleIsValid(){
			return this.snippet.title.length >= 5;
		}
			
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
.msg{ 
	display: inline-block;
	margin-top: 1.5em;
}



</style>