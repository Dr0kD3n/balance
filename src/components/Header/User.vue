<template>
	<div class="user-wrapper">
		<div class="user">
			<img src="../assets/img/user.png"><b-dropdown id="ddown-split" variant="primary" split text="username" class="m-2">
				<b-dropdown-item href="#">Profile</b-dropdown-item>
				<b-dropdown-item href="#">Settings</b-dropdown-item>
				<b-dropdown-item href="#">Logout</b-dropdown-item>
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
};
.user-wrapper *{
	display: inline-block;
	cursor: pointer;
}
.btn-primary:hover{
	background-color: #007bff;
	border-color: #007bff;
}
</style>