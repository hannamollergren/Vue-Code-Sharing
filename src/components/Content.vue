<template>
  <section class="container">
	<h3>{{ title }}</h3>

	<span class="button-container">
		<button @click="getLatest" class="button" :disabled="title == 'Latest Snippets'">Latest</button> /
		<button @click="getHighestRanked" class="button" :disabled="title == 'Highest Ranked Snippets'">Highest ranked</button> /
		<button @click="getReported" class="button" :disabled="title == 'Reported Snippets'">Reported</button>
	</span>

		
		<div v-if="latestSnippets == 'Loading content...'"><p>{{ latestSnippets }}</p></div>

	<section v-if="displayLatest">
		<span v-if="latestSnippets != 'Loading content...'">
			<div class="snippet" v-for="snippet in latestSnippets" :key="snippet.id">
				<div class="containerSnippet">
					<p class="item"><span>{{ snippet.title }}</span></p>
					<p class="item" id="code">{{ snippet.content }}</p>
					<span>
						<img src="../assets/clap.png" alt="clap icon" width="30px" height="30px" @click="likeButton(snippet.id)" class="like">
						<p class="count">{{ snippet.score }}</p>
						<button @click="reportButton(snippet.id)" class="report">{{ report }}</button>
					</span>
				</div>
			</div>
		</span>
	</section>

		

		<section v-if="displayHighest">
			<div v-if="highestRankedSnippets == 'Loading content...'"><p>{{ highestRankedSnippets }}</p></div>

			<span v-if="highestRankedSnippets != 'Loading content...'">
				<div v-for="score in highestRankedSnippets" :key="score.id" class="snippet">
					<div class="containerSnippet">
						<p class="item"><span>{{ score.title }}</span></p>
						<p class="item" id="code">{{ score.content }}</p>
						<p class="item" id="code">Score: {{ score.score }}</p>
					</div>
				</div>
			</span>
		</section>

		<section v-if="displayReported">
			<div v-if="reportedSnippets == 'Loading content...'">
			<p>{{ reportedSnippets }}</p></div>

			<span v-if="reportedSnippets != 'Loading content...'">
				<div v-for="reported in reportedSnippets" :key="reported.id" class="snippet">
					<div class="containerSnippet">
						<p class="item"><span>{{ reported.title }}</span></p>
						<p class="item" id="code">{{ reported.content }}</p>
						<p class="item" id="code">Score: {{ reported.score }}</p>
					<span class="buttonsReported">
						<button class="restore-delete" @click="restoreSnippet(reported.id)">Restore</button>
						<button class="restore-delete" @click="deleteSnippet(reported.id)">X</button>
					</span>
					</div>
				</div>
			</span>
		</section>
  </section>
  
</template>

<script>
import axios from 'axios'
export default {
	Name: 'Content',
	data: () => ({
		title: 'Latest Snippets',
		baseUrl: 'https://www.forverkliga.se/JavaScript/api/api-snippets.php',
		latestSnippets: 'Loading content...',
		highestRankedSnippets: 'Loading content...',
		reportedSnippets: 'Loading content...',
		report: 'Report',
		displayLatest: Boolean (true),
		displayHighest: Boolean(false),
		displayReported: Boolean(false),
		score: Number,
	}),
	props: {

	},
	methods: {	
		async getLatest(){ 
			this.title = "Latest Snippets"
			
			this.displayLatest = true;
			this.displayHighest = false;
			this.displayReported = false;
			
			try {
				let response = await axios
				.get(this.baseUrl + "?latest", {
					
                });
				this.latestSnippets = response.data;
            }
            catch(error) {
				console.log('Something went wrong', error);
			}
		}, 
		async getHighestRanked(){
			this.title = "Highest Ranked Snippets"

			this.displayHighest = true;
			this.displayLatest = false;
			this.displayReported = false;
			
			try {
				let response = await axios
				.get(this.baseUrl + "?best", {
                });
				this.highestRankedSnippets = response.data;
            }
            catch(error) {
				console.log('Something went wrong', error);
			}
		},
		async getReported(){
			this.title = "Reported Snippets"

			this.displayReported = true;
			this.displayLatest = false;
			this.displayHighest = false;
			
			try {
				let response = await axios
				.get(this.baseUrl + "?reported", {
					
                });
				this.reportedSnippets = response.data;
            }
            catch(error) {
				console.log('Something went wrong', error);
			}
		},
		async likeButton(id){
			try{
				await axios 
				.post(this.baseUrl,
				{
					upvote: "",
					id: id
				});
			}
			catch(error){
				console.log('Something went wrong', error);
			}
			this.getLatest();
			
		},
		async reportButton(id){ 
			try{
				await axios 
				.post(this.baseUrl,
				{
					report: "",
					id: id
				});
			}
			catch(error){
				console.log('Something went wrong', error);
			}
			this.getLatest();
		},
		async restoreSnippet(id){ 
			try{
				await axios 
				.post(this.baseUrl,
				{
					unreport: "",
					id: id
				});
			}
			catch(error){
				console.log('Something went wrong', error);
			}
			this.getReported();
		},
		async deleteSnippet(id){
			try{
				await axios 
				.post(this.baseUrl,
				{
					delete: "",
					id: id
				});
			}
			catch(error){
				console.log('Something went wrong', error);
			}
			this.getReported();
		}		
	},	
	created(){
		this.getLatest();	 
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
.report{
	margin-left: 2em;
	border: 2px solid #2c3e50;
	color: #2c3e50;
	background: none;
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
button:disabled{
	cursor: auto;
}
.restore-delete{
	margin-left: 1em;
	border: 2px solid #2c3e50;
	color: #2c3e50;
	background: none;
	
}
.buttonsReported{
	grid-column: 2/3;
	grid-row: 1;

}
.container{
	padding-bottom: 4em;
}
@media only screen and (max-width: 450px) {
	.button-container{
		display: grid;
	}
	.button{
		margin: 0 2em 0;
	}
	.container{
	padding-bottom: 8em;
}

}


</style>