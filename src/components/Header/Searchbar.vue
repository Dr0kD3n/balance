<template>
	<form id="search-top-form" class="form-horizontal ng-pristine ng-valid">
		<div class="input-group">
			<input type="text" class="form-control" name="search" placeholder="Поиск">
			<span class="input-group-btn">
				<button type="submit" class="btn btn-primary btn-sm">Найти</button>
			</span>
		</div>
	</form>
</template>

<script>
	export default { }
</script>

<style scoped lang="scss">
form{ 
	top: 11px;
	width:250px;
	z-index:0;
	height: 37px;
	input{
		margin-top: .5px;
		height: 35.34px;
	}
	button{
		font-size: 14px;
		z-index: 2;
		margin-left: -1px;
		position: relative;
		padding: 5px 10px;
		font-size: 12px;
		line-height: 1.5;
		height: 35.34px;
		border-radius: 0 4px 4px 0;
		margin-top: .5px;
	}
}

@media all and (max-width: 1080px){
	form{
		width: 160px;
	}
}

@media all and (max-width: 820px){
	form{
		display:none;
	}
}
</style>
