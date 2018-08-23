<template>
	<div class="user-wrapper">
		<div class="user">
			<img src="../assets/img/user.png"><b-dropdown id="ddown-split" variant="primary" split text="username" class="m-2">
				<b-dropdown-item href="#">Профиль</b-dropdown-item>
				<b-dropdown-item href="#">Настройки</b-dropdown-item>
				<b-dropdown-item href="#">Выйти</b-dropdown-item>
			</b-dropdown>	
		</div>
	</div>
</div>
</template>

<script>
	export default { }
</script>

<style scoped lang="scss">
*{
	color:#fff;
};
*:hover{
	text-decoration:none;
};
img{
	height: 28px;
	border-radius:50%;
	border:1px solid grey;
	margin-right: -17px;
	margin-left: 17px;
};
.user-wrapper *{
	display: inline-block;
	cursor: pointer;
}
.btn-primary:hover{
	background-color: transparent;
	border-color: transparent;
}
#ddown-split{
	background: transparent;
}
</style>