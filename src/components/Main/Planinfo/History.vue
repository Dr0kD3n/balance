<template>
	<div class="HISTORY">
		<div class="ibox-content" style="border-color: white;">
			<div class="table-responsive">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>Date</th>
							<th>Plan</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in data.history" :key="index">
							<td>{{item.date}}</td>
							<td>{{item.plan}}</td>
							<td>{{item.type}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default { 
		computed:{
			data(){
				return{
					history: this.$store.getters.getHistory
				}
			}
		}
	}
</script>


<style scoped lang="scss">
.HISTORY{
	.ibox-content{
		.table-responsive{
			.table{
				padding: 43px;
			}
		}
	}
}
</style>