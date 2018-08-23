<template>
	<div class="export-info btn btn-primary">
		<icon name="download" />
		<span class="btn" data-toggle="tooltip" data-placement="bottom" data-title="Количества незаконченых экспортов / не загруженных экспортированных файлов" data-original-title="" title="" style="padding-top: .5px;">
			<a href="/ru/panel/export/index" style="color: white; padding-top: 0;">
				<span id="activeFilesCount">0</span> / <span id="notdownloadedFilesCount">0</span>
			</a>
		</span>
	</div>
</template>

<script>
	export default { }
</script>

<style scoped lang="scss">
.export-info{
	margin-top: 8px;
	height: 35px;

}
svg {
	margin-top: 10px;
	margin-right: -20px;
	margin-left: 11px;
}
*:hover,*:focus{
	text-decoration:none;
}
</style>
