<template>	
	<div class="CURRENT-PLAN">
		<div class="upper">
			<span class="current-plan-span">Текущий план: Полный</span>
			<span class="collapse-btn btn" @click="currentPlan"><icon name="caret" /></span>
		</div>
		<transition name="currentPlanShowAnimation">
			<div v-show="data.currentPlanShow" class="animation-wrapper middle">
				<b-tabs variant="primary">
					<b-tab :title="`Проект ${index+1}`" class="current-plan-tab" v-for="(plan, index) in data.plans" :key="index">
						<div class="col-lg-2">
							<div class="ibox">
								<div class="progress progress-mini" :class="plan.domains <= 0 ? 'red' : ''">
									<div class="progress-bar"></div>
								</div>
								<div class="ibox-content text-center">
									<h4>Домены</h4><br>
									<h2 class="currentPackageValues">
										<i class="fa fa-rub" aria-hidden="true"></i>{{plan.domains}}
										<br>
										&nbsp;
									</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-2">
							<div class="ibox">
								<div class="progress progress-mini" :class="plan.searchSystems <= 0 ? 'red' : ''">
									<div class="progress-bar"></div>
								</div>
								<div class="ibox-content text-center">
									<h4>Поисковые Системы</h4><br>
									<h2 class="currentPackageValues">
										<i class="fa fa-rub" aria-hidden="true"></i>{{plan.searchSystems}}
										<br>
										&nbsp;
									</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-2">
							<div class="ibox">
								<div class="progress progress-mini" :class="plan.keyFrases <= 0 ? 'red' : ''">
									<div class="progress-bar"></div>
								</div>
								<div class="ibox-content text-center">
									<h4>Ключевые Фразы</h4><br>
									<h2 class="currentPackageValues">
										<i class="fa fa-rub" aria-hidden="true"></i>{{plan.keyFrases}}
										<br>
										&nbsp;
									</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-2">
							<div class="ibox">
								<div class="progress progress-mini" :class="plan.checksPerDay <= 0 ? 'red' : ''">
									<div class="progress-bar"></div>
								</div>
								<div class="ibox-content text-center">
									<h4>Проверок В День</h4><br>
									<h2 class="currentPackageValues">
										<i class="fa fa-rub" aria-hidden="true"></i>{{plan.checksPerDay}}
										<br>
										&nbsp;
									</h2>
								</div>
							</div>
						</div>
					</b-tab>
				</b-tabs>
			</div>
		</transition>
		<div class="lower">
			<span class="limit">Месячный лимит заканчивается:	16.09.2018 </span>
			<a class="btn btn-sm btn-outline btn-primary" href="#">Улучшить пакет</a>
		</div>
	</div>
</template>

<script>
	export default { 
		computed:{
			data(){
				return{
					currentPlanShow: this.$store.state.currentPlanShow,
					plans: this.$store.state.plans
				}
			}
		},
		methods:{
			currentPlan(data){
				this.$store.commit({type:'currentPlan'})
			}
		}
	}
</script>


<style scoped lang="scss">
$slideHeight: 254px;
.CURRENT-PLAN{
	border-top: .5px solid #dee2e6; 
	border: 1px solid #dee2e6; 
	margin-bottom: 10px;
	background: #eee;
	.current-plan-tab{
		padding-left: 25px;
		padding-right: 25px;
		padding-top: 53px;
		.col-lg-2{
			width:25%;
			display:inline-block;
			max-width:100%;
			min-width:1%;
			.progress{
				background: #7bceff;
				height: 4px;
				margin-bottom: 15px;
			}
			.red{
				background: coral;
			}
		}
		@media all and (max-width: 910px){
			.col-lg-2{
				width:90%;
				max-width:100%;
				display:block;
				margin:auto;
				.ibox-content, .text-center{	
					height: 160px; 
					position:relative;
					h4{
						font-family: "Open Sans";
						font-size: 2em;
						color:#555;
					}
					h2{
						font-size:3em;
					}
				}
			}
		}
		.ibox-content, .text-center{	
			height: 140px; 
			position:relative;
			h4{
				font-family: "Open Sans";
				font-size: 0.7231em	;
				color:#555;
			}
			h2{
				font-family: "Open Sans";
				font-size: 1.7em	;
				color:#555;
			}
		}
	}
	.plainfo-collapse-btn{
		float:right;
		margin-right:10px;
	}
	.animation-wrapper{
		overflow: hidden;
		padding-top: 10px;
	}
	.upper{
		border-bottom: 1px solid #dee2e6;
		color: #555;
		background: white;
		svg{
			position: absolute;
			right: 11px;
			top: 52px;
		}
	}
	.middle{
		border-bottom: 1px solid #dee2e6;
	}
	.lower{
		height: 31px;
		color: #555;
		background: white;
		padding-right: 10px;
		padding-left: 10px;
		.btn{
			float: right;	
			color: white;
			height: 31.5px;
			padding-top: 6px;
		}
		.limit{
			margin-top: 4px;
			position: absolute;
		}
	}
	@media all and (max-width: 500px){
		.lower{
			padding-right: 0px;
			padding-left: 0px;
			.btn{
				width: 100%;
			}
			.limit{
				display: none;
			}
		}
	}
	.current-plan-span{
		margin-left:10px;
	}
	.plainfo-collapse{
		display: block;
		margin: auto;
		width:100%;
		margin-top: 15px;
	}
	.card{
		display: block;
		margin: auto;
		width:100%;
	}
	.collapse-content{
		height: $slideHeight;
		overflow: hidden;
	}
	.currentPlanShowAnimation-enter-active{
		animation: slideDown .3s;
	}
	.currentPlanShowAnimation-leave-active{
		animation: slideUp .3s;
	}



	@media all and (min-width: 910px){
		@keyframes slideUp{
			@for $i from 0 through 100 {
				#{$i+%} { height: ($slideHeight - $slideHeight/100 * $i); }
			}
		}
		@keyframes slideDown{
			@for $i from 0 through 100 {
				#{$i+%} { height: ($slideHeight/100 * $i); }
			}
		}
	}

	@media all and (max-width: 910px){
		@keyframes slideUp{
			@for $i from 0 through 100 {
				#{$i+%} { height: (769 - 769/100 * $i)+px; }
			}
		}
		@keyframes slideDown{
			@for $i from 0 through 100 {
				#{$i+%} { height: (769/100 * $i)+px; }
			}
		}
	}





}

@media all and (max-width: 767px){
	.CURRENT-PLAN .upper svg{
		top: 41px;
	}
}
</style>