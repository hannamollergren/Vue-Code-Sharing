<template>
  <div>
		<h3>{{ title }}</h3>

		<button @click="latestButton">Latest</button> /
		<button @click="highestRankedButton">Highest ranked</button> /
		<button @click="reportedButton">Reported</button>

		<div v-if="latestSnippets == 'Loading content...'"><p>{{ latestSnippets }}</p></div>

		<span v-if="latestSnippets != 'Loading content...'">
			<div class="snippet" v-for="snippet in latestSnippets" :key="snippet.id">
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
		</span>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
	Name: 'Content',
	data: () => ({
		title: 'Latest Snippets',
		baseUrl: 'https://www.forverkliga.se/JavaScript/api/api-snippets.php',
		latestSnippets: 'Loading content...',
		likeCounter: 0,
	}),
	props: {

	},
	methods: {		
		latestButton(){
			console.log("latestButton funkar");
			this.title = "Latest Snippets"
			this.getData();

		},
		highestRankedButton(){
			console.log(" highestButton funkar");
			this.title = "Highest Ranked Snippets"
		

		},
		reportedButton(){
			console.log("reportedButton funkar");
			this.title = "Reported Snippets"
			/* 	https://www.forverkliga.se/JavaScript/api/api-snippets.php?reported&id=42 */

		},
		likeButton(id){
			console.log("likeButton", id);
			this.likeCounter += 1;
				/* 	https://www.forverkliga.se/JavaScript/api/api-snippets.php?upvote&id=42 */
			
		},
		getData(){
			this.loading = ''
			console.log("getData");
			axios
			.get(this.baseUrl + '?latest')
			.then((response) => {
				this.latestSnippets = response.data; 
				console.log("getData response:", this.latestSnippets); 
			});
		}
	},
		
	created(){
		this.getData();	 
	}

}
</script>

<style scoped>
.snippet:nth-child(even){
	background-color: lightgrey;
}
.snippet{
	margin-top: 1.5em;
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
	font-weight: normal;

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