<template>
	<div class="GENTIME">
		<div class="gentime">
			Generated in 20 seconds.
		</div>
	</div>
</template>

<script>
	export default {
		data(){ 
			return { } 
		}
	}
</script>


<style scoped lang="scss">
.GENTIME{
	color: #555;
	@media all and (max-width: 820px){
		.gentime{
			display:none;
			margin-left:0;
			margin-right:0;
		}
	}
}
</style>