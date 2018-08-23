<template>
	<nav class="navbar">
		<b-navbar toggleable="md">
			<div class="SidebarToggle"><SidebarToggle/></div>
			<b-navbar-toggle target="nav_collapse nav-primary" v-show="!data.showSidebar" class="bg-primary"></b-navbar-toggle>
			<b-collapse is-nav id="nav_collapse nav-primary bg-primary">
				<b-navbar-nav class="ml-auto nav-primary">
					<b-nav-form class="SearchBar"><SearchBar />
					</b-nav-form>
					<div class="Downloads"><Downloads />
					</div>
					<div class="Language"><Language /></div>
					<div class="User"><User /></div>
					<div class="Bell"><Bell /></div>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</nav>
</template>

<script>
	import SidebarToggle from './Sidebartoggle';
	import Bell from './Bell';
	import Downloads from './Downloads';
	import Language from './Language';
	import SearchBar from './Searchbar';
	import User from './User';

	export default {
		computed:{
			data(){
				return{
					showSidebar: this.$store.getters.getShowSidebar
				}
			}
		},
		components: {
			SidebarToggle,
			Bell,
			Downloads,
			Language,
			User,
			SearchBar
		}
	}
</script>

<style scoped lang="scss">

nav{
	width:100%;
}
.ml-auto *{
	margin-left:10px;
}
*{
	margin:0;
	padding:0;
}
.SidebarToggle{
	width:38px;
}
.SearchBar{
}
.Downloads{
}
.Language{
	width: 73px;
}
.User{
	.btn-primary:hover{
		background-color: #007bff;
		border-color: #007bff;
	}
}
.Bell{
	float:right;
	margin-left: -15px;
}
li{
	display:inline-block;
	margin-left:4px;
	position: inline-block;
}
</style>
