<template>
	<div @click="toggleSidebar">
		<button data-v-741978ef="" type="button" aria-label="Toggle navigation" class="btn"><icon name="sidebar"></icon></button>
	</div>
</template>

<script>
	import SideBar from '../Main/Sidebar'
	
	export default {
		data(){ 
			return { } 
		},
		methods:{
			toggleSidebar(){
				this.$store.commit('toggleSidebar')
			}
		}
	}
</script>
<style scoped lang="scss">
*:hover{
	text-decoration:none;
}
*{
	display:block;
	font-size: 1.25rem;
	line-height: 1;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 0.25rem;
}
button{
	border-color: rgba(0, 0, 0, 0.1);
	
}

</style>
