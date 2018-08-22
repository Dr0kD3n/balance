<template>
	<div class="user-wrapper">
		<div class="user">
			<img src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Ffree-social-media-icons%2F512%2FUser.png&f=1"><b-dropdown id="ddown-split" variant="primary" split text="username" class="m-2">
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