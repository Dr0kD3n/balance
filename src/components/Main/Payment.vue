<template>
	<div class="PAYMENT">
		<div class="dividing-line"></div>
		<div class="radio-container">
			<span :class="!data.radio ? `checked` : ``" class="r1">
				<input type="radio" id="r1" name="rr" @change="radioChange(false)" :checked="!data.radio" />
				<label for="r1">Пополнить баланс</label>
			</span>
			<span :class="data.radio ? `checked` : ``" class="r2">
				<input type="radio" id="r2" name="rr" @change="radioChange(true)" />
				<label for="r2">Расчитать проверки</label>
			</span>
		</div>
		<div v-if="!data.radio" class="amount-input"><br />
			<span class="input-wrapper">
				<span class="amount-wrapper">
					Введите сумму для пополнения
				</span>
				<form id="search-top-form" class="form-horizontal ng-pristine ng-valid">
					<div class="input-group">
						<input type="text" class="form-control" v-model="recommended">
						<span class="input-group-btn">
							<button type="submit" class="btn btn-primary btn-sm">Пополнить</button>
						</span>
					</div>
				</form>
				<span class="recommended-wrapper">
					<span v-if="recommended == 100">
						*рекомендованная сумма
					</span>
				</span>
			</span>
		</div>
		<div v-if="data.radio" class="calculate"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				recommended: 100
			}
		},
		computed: {
			data(){
				return {
					radio: this.$store.state.radio,
				}
			}
		},
		methods:{
			radioChange(data){
				this.$store.commit({type:'radioChange', payload: data})
			}
		}
	}
</script>


<style scoped lang="scss">
.PAYMENT{
	.amount-input{
		text-align:center;
		.input-wrapper{
			display: inline-grid;
			margin-top: 25px;
			.recommended-wrapper{
				min-height: 25px;
				color: #7bceff;
				min-width: 10px;
				margin-left: -53px;
				margin-bottom: 65px;
			}
			.amount-wrapper{
				margin-left: -4px;
			}
			form{ 
				display: inline-block;
				top: 11px;
				width:250px;
				z-index:0;
				input{
					height: 36px; margin-top:-2px
				}
				button{
					font-size: 14px;
					margin-top: -2px;
					z-index: 2;
					margin-left: -1px;
					position: relative;
					padding: 5px 10px;
					font-size: 12px;
					line-height: 1.5;
					    border-radius: 0 4px 4px 0;
					height: 36px;
				}
			}
		}
	}
	.checks{
		text-align: center;
	}
	label{
		cursor: pointer;
	}
	.checked *{
		color: #7bceff;
		cursor: default;
		font-size: 25px;
	}
	.radio-container{
		text-align: center;
		.r1{
			margin-right: 165px;
		}
	}
}
.dividing-line{
	width: 85%;
	height: 1px;
	background: #dee2e6;
	margin-left: calc( 15% / 2 );
	margin-bottom: 58px;
}

input[type="radio"] {
	width: 26px;
	height: 26px;
	visibility: hidden;
	display: none
}
label:after{
	display: none;
}
.calculate{
	min-height: 81px;
}
</style>