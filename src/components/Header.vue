<template>
  <div>
	<header>
		<h2>{{ title }}</h2>
		<nav>
			<ul>
				<li><router-link to="/content">All Code Snippets</router-link></li>
				<li><router-link to="/create">Create Snippet</router-link></li>
			</ul>
			
		</nav>
	</header>
  </div>
</template>

<script>
export default {
	Name: 'Header',
	data: () => ({ 
		title: 'Vue Code Sharing',

	}),
	props: {

	},
	methods: {

	}

}
</script>

<style scoped>
	h2{
		text-align: start;
		padding: 0.6em;
		margin-left: 2em;
	}
	header{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-bottom: 4em;
		background: #41B883;
	}
	ul{
		display: inline-block;
		list-style-type: none;
		text-align: center;
		margin: 0;	
		padding: 0.5em;
		
	}
	li{
		display: inline-block;
		margin: 0 10px;
	}
	a{
		color: #2c3e50;
		text-decoration: none;
		padding: 0.5em;
		/* border-radius: 4px; */
	}
	nav{
		display: inline-block;
		background: #41B883;
		grid-column: 3/3;
		padding: 0.6em;
	}
	.router-link-active{
		border-bottom: 2px solid #2c3e50;
		color: #2c3e50;
	}

</style>