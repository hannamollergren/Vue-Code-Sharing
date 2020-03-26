<template>
  <div>
		<h3>All Code Snippets</h3>
		<div class="snippet" v-for="snippet in snippets" :key="snippet.id">
			<div>
				<p>{{ snippet.title }}</p>
				<p>{{ snippet.developer }}</p>
				<p>{{ snippet.code }}</p>
				<button>Like</button>
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
				developer: "Hanna",
				code: "Test code"
			},
			{
				id: "02",
				title: "For loop",
				developer: "Gustav",
				code: "Test code1"
			},
			{
				id: "03",
				title: "Vue intro",
				developer: "Johan",
				code: "Test code2"
			},
			{
				id: "04",
				title: "My awesome code",
				developer: "Lisa",
				code: "Test code3"
			},
			{
				id: "05",
				title: "Wow check this out",
				developer: "Geoerge",
				code: "Test code4"
			},
			{
				id: "06",
				title: "Angular is better",
				developer: "Isabell",
				code: "Test code5"
			},
			{
				id: "07",
				title: "Header",
				developer: "Hanna",
				code: "Test code6"
			},
			{
				id: "08",
				title: "Hittat grymt bra hjälp ",
				developer: "Rebecka",
				code: "Test code7"
			},
			{
				id: "09",
				title: "Ninja hjälpte mig med routerlinks",
				developer: "Shaun",
				code: "Test code8"
			},
			{
				id: "10",
				title: "ternary operator JS",
				developer: "Calle",
				code: "Test code9"
			}
		]

	}),
	props: {

	},
	methods: {
		/* https://forverkliga.se/JavaScript/api/api-snippets.php  */
		
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

</style>