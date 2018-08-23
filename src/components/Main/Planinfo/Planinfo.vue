<template>
	<div>
		<b-tabs variant="primary">
			<b-tab title="Баланс" class="Balance" active>
				<Balance />
			</b-tab>
			<b-tab title="История" class="History" >
				<History />
			</b-tab>
			<b-tab title="Платежи" class="Payments">
				<Payments />
			</b-tab>
			<b-tab title="Статистика" class="Stats">
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