<template>
	<div>
		<div class="content-container">
		
			<div class="code">
				<h1 class="love">I LOVE CODE.</h1>
				<p class="text">Check out the latest code snippets</p> <br>
				<button @click="toLatest"><a href="/home#/content">{{ latestSnippets }}</a></button>
			</div> 


			<div class="rules">
				<p><span>1.</span> Add a code snippet</p>
				<p><span>2.</span> Rate others snippets!</p>
				<p><span>3.</span> Have fun and be kind.</p> 
			</div> 

			<div class="info">
				<h3 class="title">About</h3>
				<p class="undertitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore ad sapiente nesciunt cum officia quo soluta dolorem doloribus! Nulla ex repellendus, laboriosam distinctio excepturi veritatis quidem vel laudantium fuga.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	Name: 'Home',
	data: () => ({
		latestSnippets: 'Latest snippets',

	}),
	props: {

	},
	methods: {
		toLatest(){
			this.latestSnippets = 'Loading content...'

		}
		
	}

}
</script>

<style scoped>

span{
	font-weight: bold;
}
.content-container{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 0 0 0;
	gap: 1em;
}


.code{
	background: lightgrey;
	grid-column: 1/4;
	
}
.rules{
	background-color:lightgrey;
	padding: 2em 2em 2em 0;
	text-align: left;
	grid-column: 1/2;

}
.rules p{
	margin: 0 0 0 4em;
	padding: 0.3em;
}
.info{
	grid-column: 2/4;
	background-color:lightgrey;
}
.infor p{
	margin: 0 4em 0 0;
}
.title{
	padding: 1em 0 0;
}
.undertitle{
	padding: 0 0 2em 2em;
	margin: 0 4em 0 0;
}
p{
	padding: 0.3em;
	margin: 0;
}
.love{
	padding: 0.5em 0 0;
	font-size: 4em;
	font-weight: bold;
	line-height: 2em;
}

button{
	margin: 0em 0 5em;
	padding: 0.5em;
	border: 1px solid #2c3e50;
	background-color:lightgrey;
}
button:hover{
	background-color: rgb(201, 200, 200);
	transition: 0.6s;
}
a{
	text-decoration: none;
	color: #2c3e50;
}
@media only screen and (max-width: 902px) {
.info{
	grid-column: 1/4;

}
.rules{
	grid-column: 1/4;
}

}
@media only screen and (max-width: 450px) {
.love{
	padding: 1em;
	font-size: 3em;
	line-height: 1.2em;
}
.content-container{
	margin: 0 2em 4em;
}
.text{
	padding: 0 1em 0;
}
}



</style>