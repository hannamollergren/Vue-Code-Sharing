<template>
  <div>
	<header>
		<a href="/home" class="logo"><h2>{{ title }}</h2></a>
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
	header{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-bottom: 4em;
		background: #41B883;
	}
	h2{
		text-align: start;
		padding-top: 0.4em;
		margin-left: 2em;
		grid-column: 1/2;
	}
	.logo:hover{
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
	a:hover{
		border-bottom: 2px solid #2c3e50;
		color: #2c3e50;
	}
	.router-link-active{
		border-bottom: 2px solid #2c3e50;
		color: #2c3e50;
	}
	/* //! TODO  */
	@media only screen and (max-width: 837px) {
	
}
</style>