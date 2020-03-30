<template>
  <div>
		<h3>Create Code Snippet</h3>

		<div id="form-group">
			<label>Title</label>
			<input type="text" placeholder="Please enter the title" v-model="snippet.title" @blur.once="titleIsTouched=true">

			<span v-if="!titleIsValid && titleIsTouched" class="error">Must enter five characters or more</span>

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
}
label{
	display: block;
	text-align: start;
}
input{
	width: 100%;
	margin: 0 0 1em;
	padding: 0.5em;
	
}
textarea{
	width: 100%;
	padding: 0.5em;

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
.error{
	margin: 0.5em 0 0;
	color:red;
}

button:disabled{
	background-color: lightgrey;
	cursor: auto;
	border: none;
	}



</style>