<template>
	<div>
		<Currentplan />
		<Planinfo />
		<SideBar />
		<Chat />
	</div>
</template>

<script>
	import SideBar from "./Sidebar.vue"
	import Chat from "./Chat.vue"
	import Planinfo from "./Planinfo/Planinfo.vue"
	import Currentplan from "./Currentplan.vue"
	export default {
		components: {
			SideBar,
			Chat,
			Planinfo,
			Currentplan
		}
	}
</script>


<style scoped lang="scss">

</style>