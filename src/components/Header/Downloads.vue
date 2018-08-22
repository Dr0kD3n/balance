<template>
	<div class="export-info">
		<span class="btn" data-toggle="tooltip" data-placement="bottom" data-title="Количества незаконченых экспортов / не загруженных экспортированных файлов" data-original-title="" title="">
			<a href="/ru/panel/export/index" style="color: white; padding: 0">
				<span id="activeFilesCount">0</span> / <span id="notdownloadedFilesCount">0</span>
			</a>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'Downloads',
	}
</script>

<style scoped lang="scss">
.export-info{
	margin-top: 8px;
}
img {
	vertical-align: middle;
	border-style: none;
	height: 28px;
	margin-left: -3px;
	margin-right: 2px;
}
*:hover,*:focus{
	text-decoration:none;
}
</style>
