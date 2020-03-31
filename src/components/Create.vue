<template>
  <div>
		<h3>Create Code Snippet</h3>

		<div id="form-group">
			<label>Title</label>
			<input type="text" placeholder="Please enter the title" v-model="snippet.title" @blur.once="titleIsTouched=true">

			<span v-if="!titleIsValid && titleIsTouched" class="error">Enter five characters or more</span>

			<label>Your code</label>
			<textarea id="codeSnippet" rows="20" cols="135" placeholder="Paste your code into textarea" v-model="snippet.content" @blur.once="contentIsTouched=true">
			</textarea>

			<span v-if="!contentIsValid && contentIsTouched" class="error">Please enter your code in the textarea</span>

			<button @click="submitButton" :disabled="!titleIsValid && !contentIsValid">Add</button>
		</div>
		<div class="msg">{{ msg }}</div>	
  </div>
</template>

<script>
export default {
	Name: 'Create',
	data: () => ({
		baseUrl: 'https://www.forverkliga.se/JavaScript/api/api-snippets.php',
		snippet: {title: '', content: ''},
		msg: '',
		titleIsTouched: false,
		contentIsTouched: false
	}),
	props: {

	},
	methods: {
		submitButton(){
			this.msg = "Adding..."
			let title = this.snippet.title;
			let content = this.snippet.content;

			fetch(this.baseUrl, {
                        method: 'POST',
						body: new URLSearchParams('add&title=' + title + '&content=' + content + '&tags=mysupercooltag')
                    })
                    .then((response) => {
                       this.msg = "Snippet added succsessfully, thank you!"
						console.log('response', response)
					})
			/* this.snippet.title = ''; 
			this.snippet.content = ''; 
			 */
		/* 	axios
				.post(this.baseUrl + '?add&title=' + title + '&content=' + content + '&tags=mySuperCoolTag')
				.then((response) => {
					this.msg = "Snippet added succsessfully, thank you!"
					console.log('response', response)
				})
				.catch((error) => {
					this.msg = 'Failed to add snippet, please try again';
					console.log(error);
				})
				console.log('title', title, 'content', content)

				console.log(this.baseUrl + '?add&title=' + title + '&content=' + content); */

				/* this.snippet.title = ''; Tömmer input fält
				this.snippet.content = ''; */
		}
	},
	computed:{ 
		titleIsValid(){
			return this.snippet.title.length >= 5;
		},
		contentIsValid(){
			return this.snippet.title.length >= 5;
		},			
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
.msg{ 
	display: inline-block;
	margin-top: 1.5em;
}


button:disabled{
	background-color: lightgrey;
	cursor: auto;
	border: none;
}
@media only screen and (max-width: 450px) {
#form-group{
	margin: 0 2em 0;
}
}



</style>