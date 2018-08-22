<template>
	<div class="FOOTER">
		<b-nav class="Footer-wrapper bg-primary">
			<b-nav-item class="Gentime"><Gentime/></b-nav-item>
			<b-nav-item class="Copyright"><Copyright/></b-nav-item>
		</b-nav>
	</div>
</template>

<script>
	import Copyright from "./Copyright.vue"
	import Gentime from "./Gentime.vue"

	export default {
		data(){ 
			return { } 
		},
		components: {
			Copyright,
			Gentime
		}
	}
</script>


<style scoped lang="scss">
.FOOTER{
	margin-top: calc( 43vh - 8px );
	position: relative;
	.Footer-wrapper {
		width:100%;
		z-index:-1;
		position: absolute;
		margin-top: 10px;
		bottom: 0;
		*{
			color:white;
			display: inline-block;
			
		}
		*:hover,*:focus{
			color:white;
			text-decoration:none;
		}
		.Copyright{
			right: 10px;
			position: absolute;
		}
		.Gentime{
			left: 10px;
		}
		@media all and (max-width: 820px){
			.Gentime{
				opacity:0;
				margin-left:0;
				margin-right:0;
			}
			.Copyright{
				margin:auto;
				right: calc( 50% - 185px );
			}
		}
		@media all and (max-width: 410px){
			.Copyright{
				margin:auto;
				right: calc( 50% - 67px );
			}
		}
	}
}
</style>