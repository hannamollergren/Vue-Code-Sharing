<template>
  <div>
		<h3>All Code Snippets</h3>

		<button @click="latestButton">Latest</button> /
		<button @click="highestButton">Highest ranked</button> /
		<button @click="reportedButton">Reported</button>

		<div class="snippet" v-for="snippet in snippets" :key="snippet.id">
			<div class="containerSnippet">
				<p class="item"><span>{{ snippet.title }}</span></p>
				<p class="item" id="code">{{ snippet.content }}</p>
			<!-- // se david exemple -->
				<span>
					<img src="../assets/clap.png" alt="clap icon" width="30px" height="30px" @click="likeButton(snippet.id)" class="like">
					<p class="count">{{ likeCounter }}</p>
				</span>
				
			</div>
		</div>
  </div>
  
</template>

<script>
export default {
	Name: 'Content',
	data: () => ({
		snippets: [
			{
				id: "01",
				title: "Header",
				content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure assumenda, minima cupiditate atque debitis eius veniam eos! Facere nesciunt quo dolorum in est quam eaque quia pariatur atque saepe."
			},
			{
				id: "02",
				title: "For loop",
				content: "Test content1"
			},
			{
				id: "03",
				title: "Vue intro",
				content: "Test content2"
			},
			{
				id: "04",
				title: "My awesome content",
				content: "Test content3"
			},
			{
				id: "05",
				title: "Wow check this out",
				content: "Test content4"
			},
			{
				id: "06",
				title: "Angular is better",
				content: "Test content5"
			},
			{
				id: "07",
				title: "Header",
				content: "Test content6"
			},
			{
				id: "08",
				title: "Hittat grymt bra hjälp ",
				content: "Test content7"
			},
			{
				id: "09",
				title: "Ninja hjälpte mig med",
				content: "Test content8"
			},
			{
				id: "10",
				title: "ternary operator JS",
				content: "Test code9"
			}
		],
		likeCounter: 0,
		

	}),
	props: {

	},
	methods: {
			
		latestButton(){
			console.log("latestButton funkar");

		},
		highestButton(){
			console.log(" highestButton funkar");

		},
		reportedButton(){
			console.log("reportedButton funkar");

		},
		likeButton(id){
			console.log("likeButton", id);
			this.likeCounter += 1;
		},
		getData(){
			console.log("getData");
			this.axios
			.get(this.baseUrl + '?latest')
			.then(function (response){
				this.snippets = response;
				console.log("getData response:", response); 
			});
		}
	},
		
	created(){
		console.log('Content comp i created');
		this.getData();	 
	}

}
</script>

<style scoped>
.snippet:nth-child(even){
	background-color: lightgrey;
}
/* .snippet:hover{
	background-color: rgb(240, 239, 239);
} */
p{
	padding: 0;
	margin: 0;
}
div{
	padding: 1em 0 1em;
}
.containerSnippet{
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}
.item{
	grid-column: 1/2;
	margin: 0 4em 0;
	text-align: start;
}
span{
	font-weight: bold;
}
#code{
	margin-top: 1em;
}
.like{
	grid-column: 2/3;
	background-color: none;
	cursor: pointer;
}

.count{
	grid-column: 2/3;
	display: inline-block;
	margin-left: 0.5em;
	color: #2c3e50;
}
button{
	padding: 0.5em;
	color: white;
	background: #2c3e50;
}
button:hover{
	background-color: #3c546b;
	transition: 0.6s;
}

</style>