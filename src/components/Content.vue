<template>
  <div>
		<h3>All Code Snippets</h3>

		<button @click="latestButton">Latest</button> /
		<button @click="highestButton">Highest ranked</button> /
		<button @click="reportedButton">Reported</button>

		<div class="snippet" v-for="snippet in snippets" :key="snippet.id">
			<div class="containerSnippet">
				<p class="item"><span>{{ snippet.title }}</span></p>
				<p class="item"><span>{{ snippet.developer }}</span></p>
				<p class="item" id="code">{{ snippet.content }}</p>

				<span><img src="../assets/clap.png" alt="clap icon" width="30px" height="30px" @click="likeCounter += 1" class="like"><p class="count">{{ likeCounter }}</p></span>
				
			</div>
		</div>
  </div>
  
</template>

<script>
export default {
	Name: 'Content',
	data: () => ({
		snippets: [
			/* [{"id":6,"title":"Hejsan","content":"Some content","tags":"tag1,tag2","score":0,"is_reported":0,"upload_dt":"2020-03-23 11:54:35"} */
			{
				id: "01",
				title: "Header",
				developer: "Hanna Andersson",
				content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure assumenda, minima cupiditate atque debitis eius veniam eos! Facere nesciunt quo dolorum in est quam eaque quia pariatur atque saepe."
			},
			{
				id: "02",
				title: "For loop",
				developer: "Gustav Ek",
				content: "Test content1"
			},
			{
				id: "03",
				title: "Vue intro",
				developer: "Johan Hjert",
				content: "Test content2"
			},
			{
				id: "04",
				title: "My awesome content",
				developer: "Lisa",
				content: "Test content3"
			},
			{
				id: "05",
				title: "Wow check this out",
				developer: "Geoerge Smith",
				content: "Test content4"
			},
			{
				id: "06",
				title: "Angular is better",
				developer: "Isabell Karlsson",
				content: "Test content5"
			},
			{
				id: "07",
				title: "Header",
				developer: "Hanna Fraser",
				content: "Test content6"
			},
			{
				id: "08",
				title: "Hittat grymt bra hjälp ",
				developer: "Rebecka Johanson",
				content: "Test content7"
			},
			{
				id: "09",
				title: "Ninja hjälpte mig med routerlinks",
				developer: "Shaun White",
				content: "Test content8"
			},
			{
				id: "10",
				title: "ternary operator JS",
				developer: "Calle Gustfsson",
				content: "Test code9"
			}
		],
		likeCounter: 0,
		

	}),
	props: {

	},
	methods: {
		/* https://forverkliga.se/JavaScript/api/api-snippets.php  */
		latestButton(){
			console.log("latestButton funkar");

		},
		highestButton(){
			console.log(" highestButton funkar");

		},
		reportedButton(){
			console.log("reportedButton funkar");

		}
		
		
	}

}
</script>

<style scoped>
.snippet:nth-child(even){
	background-color: lightgrey;
}
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