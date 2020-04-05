<template>
  <div>
	<header>
		<a href="/" class="logo"><h2>{{ title }}</h2></a>
		<nav>
			<ul>
				<li><router-link to="/content" class="links">All Code Snippets</router-link></li>
				<li><router-link to="/create" class="links">Create Snippet</router-link></li>
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
	header{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-bottom: 4em;
		background: #41B883;
	}
	.logo{
		text-align: start;
		padding-top: 1em;
		margin-left: 2em;
		grid-column: 1/2;
		border-bottom: none;
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
	}
	nav{
		display: inline-block;
		background: #41B883;
		grid-column: 2/3;
		padding: 0.8em;
		text-align: end;
	}
	.links:hover{
		border-bottom: 2px solid #2c3e50;
		color: #2c3e50;
	}
	.router-link-active{
		border-bottom: 2px solid #2c3e50;
		color: #2c3e50;
	}	
	@media only screen and (max-width: 702px) {
	header{
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2;
	}
	.logo{
		grid-column: 2/2;
		grid-row: 1;
		text-align: center;
		display: block;
		margin: 1em 0 0;
	}
	nav{
		margin: 0;
		padding: 0em 1em 1em;
		text-align: center;
		grid-column: 2/2;
		grid-row: 2;
	}
	ul{
		margin: 0;
		padding: 0;
	}
}
	@media only screen and (max-width: 702px) {
	li{
		padding: 0.5em;
	}
}
</style>