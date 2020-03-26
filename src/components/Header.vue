<template>
  <div>
	<header>
		<h1>{{ title }}</h1>
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
	margin-bottom: 2em;
}
	ul{
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
		padding: 6px 8px;
		/* border-radius: 4px; */
	}
	nav{
		background: #41B883;
		padding: 1em;
		margin: 1em 0 1.3em;
	}
	.router-link-active{
		border-bottom: 2px solid #2c3e50;
		color: #2c3e50;
	}

</style>