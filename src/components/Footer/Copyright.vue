<template>
	<div class="COPYRIGHT">
		<a href="#" class="terms-privacy">Terms of Service • </a>  <a href="#" class="terms-privacy">Privacy Policy • </a>  <span class="copyright"> Copyright SpySerp.com </span> <span class="copyright-sign"> © </span> <span class="year"> 2016 - 2018 </span>
	</div>
</template>

<script>
	export default { }
</script>


<style scoped lang="scss">
.COPYRIGHT{
	*{
		color: #555;
	}
	@media all and (max-width: 820px){
		.copyright{
			display:none;
		}
	}
	@media all and (max-width: 410px){
		.terms-privacy{
			display:none;
		}
	}
}
</style>