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
	export default {
		name: 'Searchbar',
	}
</script>

<style scoped lang="scss">
form{ 
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
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		position: relative;
		border-radius: 3px;
		padding: 5px 10px;
		font-size: 12px;
		line-height: 1.5;
		border-radius: 3px;
		height: 36px;
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
