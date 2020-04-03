<template>
  <div>
		<h3>Create Code Snippet</h3>

		<div id="form-group">
			<label>Title</label>
			<input type="text" placeholder="Enter title" v-model="snippet.title" :class="titleClass" @blur.once="titleIsTouched=true">

			<span v-if="titleIsTouched && !titleIsValid" class="error">Enter at least 3 characters</span>
			<span v-if="titleIsValid" class="good">Looking good</span>
			

			<label>Your code</label>
			<textarea id="codeSnippet" rows="15" placeholder="Paste your code into textarea" v-model="snippet.content" :class="contentClass" @blur.once="contentIsTouched=true" ></textarea>
			

			<span v-if="!contentIsValid && contentIsTouched" class="error">Enter your code in the textarea</span>
			<span v-if="contentIsValid" class="good">Well done</span>

			<button @click="submitButton" :disabled="!formIsValid">Add</button>

			<div class="msg">{{ msg }}</div>
		</div>
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
		contentIsTouched: false,
	}),
	props: {

	},
	methods: {
		async submitButton(){
		this.msg = "Adding..."

		try{
			await axios
			.post(this.baseUrl,
			{
				add: "",
				title: this.snippet.title,
				content: this.snippet.content,
				tags: 'tag',
			});
			this.msg = "Snippet added succsessfully, thank you!"	
		}
		catch(error){
			this.msg = error, '. Try again!';
			}
		}
		}, 
	computed:{ 
		titleIsValid(){
			return this.snippet.title.length >= 3;
		},
		titleClass() {
			if( !this.titleIsTouched ) return '';
			return this.titleIsValid ? 'valid' : 'invalid';
		},
		contentIsValid(){			
			return this.snippet.content.length >= 5;
		},		
		contentClass() {
			if( !this.contentIsTouched ) return '';
			return this.contentIsValid ? 'valid' : 'invalid';
		},	
		formIsValid() {
			return this.titleIsValid && this.contentIsValid;
		}
	}
}
</script>

<style scoped>
#form-group{
	margin: 0 4em 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}
label{
	display: block;
	text-align: start;
	grid-column: 1/3;
}
input{
	display: inline-block;
	width: 100%;
	margin: 0 0 1em;
	padding: 0.5em;
	border: 1px solid lightgrey;
	grid-column: 1/3;
}
textarea{
	width: 100%;
	padding: 0.5em;
	border: 1px solid lightgrey;
	grid-column: 1/3;
}
.error{
	margin: 0 0 0 1em;
	color:rgba(255, 0, 0, 0.89);
	grid-column: 3/4;
	text-align: left;
}
.good{
	margin: 0 0 0 1em;
	color:green;
	grid-column: 3/4;
	text-align: left;
}

input.valid { border-color: green; }
input.invalid { border-color: rgba(255, 0, 0, 0.89); }
textarea.valid { border-color: green; }
textarea.invalid { border-color: rgba(255, 0, 0, 0.89); }
button{
	margin-top: 1em;
	width: 100%;
	padding: 0.5em;
	color: white;
	background: #2c3e50;
	grid-column: 1/3;
}
button:hover{
	background-color: #3c546b;
	transition: 0.6s;
}
button:disabled{
	background-color: lightgrey;
	cursor: auto;
	border: none;
}
.msg{ 
	display: inline-block;
	margin: 1.5em 0 3em;
	grid-column: 1/2;
	text-align: left;
}

@media only screen and (max-width: 450px) {
#form-group{
	margin: 0 2em 4em;
}
}



</style>