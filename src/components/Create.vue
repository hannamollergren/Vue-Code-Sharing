<template>
  <div>
		<h3>Create Code Snippet</h3>

		<div>
			<input type="text" placeholder="Title of your snippet">
			<input type="text" placeholder="Write your name">
			<textarea id="codeSnippet" rows="20" cols="135" placeholder="Copy your code into textarea">
			</textarea>
			<button @click="submitCode">Submit</button>
		</div>
		
  </div>
</template>

<script>
export default {
	Name: 'Create',
	data: () => ({

	}),
	props: {

	},
	methods: {
		submitCode(){
			console.log("submitCode button funkar");
			
		}
		
	}

}
</script>

<style scoped>
label{
	display: block;
}
input{
	width: 70%;
	margin: 0 0 1em;
	padding: 0.5em
}
textarea{
	width: 70%;
	padding: 0.5em
}
button{
	width: 70%;
	padding: 0.5em;
	color: white;
	background: #2c3e50;
}
button:hover{
	background-color: #3c546b;
	transition: 0.6s;
}

</style>