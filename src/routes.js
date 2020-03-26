import Home from './components/Home.vue'
import Content from './components/Content.vue'
import Create from './components/Create.vue'

export default [
	{ path: '/', component: Home },
	{ path: '/content', component: Content  },
	{ path: '/create', component: Create },
]