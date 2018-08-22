<template>
	<div>
		<b-tabs variant="primary">
			<b-tab title="Balance" class="Balance" active>
				<Balance />
			</b-tab>
			<b-tab title="History" class="History" >
				<History />
			</b-tab>
			<b-tab title="Payments" class="Payments">
				<Payments />
			</b-tab>
			<b-tab title="Statistics" class="Stats">
				<Stats />
			</b-tab>	
		</b-tabs>
	</div>
</template>

<script>
	import Balance from "./Balance.vue";
	import History from "./History.vue";
	import Payments from "./Payments.vue";
	import Stats from "./Stats.vue";

	export default { 
		components:{
			Balance,
			History,
			Payments,
			Stats
		}
	}
</script>


<style scoped lang="scss">

.Balance, .Payments, .History, .Stats{
	padding-top:10px;    
	color: #555;
	.nav-link{
		color: #a7b1c2;
	}
}

</style>