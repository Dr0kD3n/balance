<template>
	<div class="FOOTER">
		<b-nav class="Footer-wrapper">
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
	//margin-top:auto; 
	margin-top: 10px;
	bottom: 0;
	background: white;
	width: 100%;
	.Footer-wrapper {
		*{
			color: #555;
			display: inline-block;
		}
		*:hover,*:focus{
			color: #555;
			text-decoration:none;
		}
		.Copyright{
			right: 10px;
			position: static;
			position: absolute;
		}
		.Gentime{
			left: 10px;
		}
		@media all and (max-width: 820px){
			.Gentime{
				opacity:0;
				width: 0px;
				margin-left:0;
				margin-right:0;
			}
			.Copyright{
				margin:auto;
				right: calc( 50% - 185px );
				position: static;
			}
		}
		@media all and (max-width: 410px){
			.Copyright{
				margin:auto;
				right: calc( 50% - 67px );
				position: static;
			}
		}
	}
}
</style>