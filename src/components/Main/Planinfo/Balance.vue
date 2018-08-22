<template>
	<div class="balance-wrapper">
		<div class="col-lg-2">
			<div class="ibox">
				<div class="progress progress-mini">
					<div class="progress-bar"></div>
				</div>
				<div class="ibox-content text-center">
					<h4>Стоимость проверки</h4><br>
					<h2 class="currentPackageValues">
						<i class="fa fa-rub" aria-hidden="true"></i>0.025
						<span id="check-price" data-price="0.025" hidden=""></span>
						<br>
						&nbsp;
					</h2>
				</div>
			</div>
		</div>
		<div class="col-lg-2">
			<div class="ibox">
				<div class="progress progress-mini red">
					<div class="progress-bar"></div>
				</div>
				<div class="ibox-content text-center">
					<h4>Доступно</h4><br>
					<h2 class="currentPackageValues">
						<i class="fa fa-rub" aria-hidden="true"></i>0
						<span id="check-price" data-price="0.025" hidden=""></span>
						<br>
						&nbsp;
					</h2>
				</div>
			</div>
		</div>
		<div class="col-lg-2">
			<div class="ibox">
				<div class="progress progress-mini">
					<div class="progress-bar"></div>
				</div>
				<div class="ibox-content text-center">
					<h4>Количество проверок в день</h4><br>
					<h2 class="currentPackageValues">
						<i class="fa fa-rub" aria-hidden="true"></i>0
						<span id="check-price" data-price="0.025" hidden=""></span>
						<br>
						&nbsp;
					</h2>
				</div>
			</div>
		</div>
		<div class="col-lg-2">
			<div class="ibox">
				<div class="progress progress-mini">
					<div class="progress-bar"></div>
				</div>
				<div class="ibox-content text-center">
					<h4>Стоимость проверок в день</h4><br>
					<h2 class="currentPackageValues">
						<i class="fa fa-rub" aria-hidden="true"></i>0
						<span id="check-price" data-price="0.025" hidden=""></span>
						<br>
						&nbsp;
					</h2>
				</div>
			</div>
		</div>
		<div class="col-lg-2">
			<div class="ibox">
				<div class="progress progress-mini">
					<div class="progress-bar"></div>
				</div>
				<div class="ibox-content text-center">
					<h4>Осталось проверок</h4><br>
					<h2 class="currentPackageValues">
						<i class="fa fa-rub" aria-hidden="true"></i>20000
						<span id="check-price" data-price="0.025" hidden=""></span>
						<br>
						&nbsp;
					</h2>
				</div>
			</div>
		</div>
		<Payment />


	</div>
</template>

<script>
	import Payment from '../Payment.vue';

	export default { 
		components:{
			Payment
		}
	}
</script>


<style scoped lang="scss">
$h4FontSize: .7em;
body{
	font-family: 'Open Sans';
}
.balance-wrapper{
	padding-top:53px;
}
.col-lg-2{
	width:20%;
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
	height: 129px; 
	position:relative;
	h4{
		font-family: "Open Sans";
		font-size: $h4FontSize;
		color:#555;
	}
	h2{
		font-family: "Open Sans";
		font-size: 1.7em	;
		color:#555;
	}
}
</style>