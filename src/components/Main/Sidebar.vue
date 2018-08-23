<template>
	<div class="sidebar-wrapper">
		<transition name="transition-slideBarOpen">
			<b-nav vertical class="w-10" v-show="data.showSidebar">
				<div class="sidebar">
					<div>
						<b-nav-item>
							<div class="userInfo">
								<img src="../assets/img/user.png">
								<div class="email">some@email.com</div>
								<div class="current-plan">План: Полный</div>
							</div>
						</b-nav-item>
						<div class="sidebar-item-colection">
							<b-nav-item class="sidebar-item" id="Profile">Профиль</b-nav-item>
							<b-nav-item class="sidebar-item sidebar-dropdown" id="Projects" @click="sidebarDropdown('Projects')" :class="data.sidebarDropdown == 'Projects' ? 'sidebar-item-opened' : ''">Проекты<icon name="caret" />
								<transition name="tansition-sidebar-dropdown-collection-small">
									<b-nav vertical class="sidebar-dropdown-collection" v-show="data.sidebarDropdown == 'Projects'">
										<b-nav-item>Создать проект</b-nav-item>
									</b-nav>
								</transition>
							</b-nav-item>
							<b-nav-item class="sidebar-item sidebar-dropdown" id="Mutual-projects" @click="sidebarDropdown('Mutual-projects')" :class="data.sidebarDropdown == 'Mutual-projects' ? 'sidebar-item-opened' : ''">Общие Проекты<icon name="caret" />
								<transition name="tansition-sidebar-dropdown-collection">
									<b-nav vertical class="sidebar-dropdown-collection" v-show="data.sidebarDropdown == 'Mutual-projects'">
										<b-nav-item>iPhone и айфон</b-nav-item>
										<b-nav-item>Отдых За Границей</b-nav-item>
										<b-nav-item>Проверка Позиций</b-nav-item>
									</b-nav>
								</transition>
							</b-nav-item>
							<b-nav-item class="sidebar-item" id="Telegram-chat">Телеграм Чат</b-nav-item>
							<b-nav-item class="sidebar-item sidebar-dropdown" id="Payments"  @click="sidebarDropdown('Payments')" :class="data.sidebarDropdown == 'Payments' ? 'sidebar-item-opened' : ''">Платежи<icon name="caret" />
								<transition name="tansition-sidebar-dropdown-collection">
									<b-nav vertical class="sidebar-dropdown-collection" v-show="data.sidebarDropdown == 'Payments'" key="ul">
										<b-nav-item>Тарифные Планы</b-nav-item>
										<b-nav-item>Текущий план</b-nav-item>
										<b-nav-item>Инвойсы</b-nav-item>
									</b-nav>
								</transition>
							</b-nav-item>
							<b-nav-item class="sidebar-item" id="Referal-programm">Реферальная Программа</b-nav-item>
							<b-nav-item class="sidebar-item" id="Limits">Лимиты</b-nav-item>
						</div>
					</div>
				</div>
				<b-nav class="cotton"><div class="close" @click="hideSidebar">X</div></b-nav>
			</b-nav>
		</transition>
	</div>
</template>
<script>
	export default { 
		computed:{
			data(){
				return{
					showSidebar: this.$store.state.showSidebar,
					sidebarDropdown: this.$store.state.sidebarDropdown
				}
			}
		},
		methods:{
			hideSidebar(){
				this.$store.commit({type:'hideSidebar'})
			},
			sidebarDropdown(data){
				this.$store.commit({type:'sidebarDropdown', payload:data})
			},

		}
	};

</script>
<style scoped lang="scss">
$textcolor: #ffffd6;
$color: white;
$sidebar-width: 100%;
$animation-duration: .3s;
$sidebar-opened-border-width: 3px;
$sidebar-opened-border-color: #19aa8d;

*{
	text-decoration:none;
}
.sidebar-dropdown{
	a{
		display: inline-block;
	}
	li{
		text-decoration:none;
		margin-left:20px;
	}
}
.sidebar-item-colection{
	background: #2f4050;
	a{
		padding-left: 11px;
		padding-right: 0;
	}
	svg{
		height: 19px;
		width: 32px;
		position: sticky;
		left: 152px;
	}
	
}
li a{
	color: $textcolor;
	width: 100%;
}
li a:hover{
	color: $textcolor;
	text-decoration:none;
}

.sidebar-dropdown-collection ul{
	background-color: #676a6c;
	width:100%;
	position:relative;
}
img{
	width:100px;
}
.userInfo{
	text-align:center;
	img{
		height: 100%;
	};
	*{
		display:inline-block;
	}
}
svg{
	height: 32px;
	width: 32px;
}
.cotton{
	display: inline-block;
	background: rgba(0, 0, 0, 0.3);
	height: 100vh;
	position: absolute;
	width: calc( 100% - 200px );
	margin-left: 200px;
	overflow: hidden;
}
.sidebar-wrapper{
	position:fixed;
	top:0;

	font-size: 14px;
}





.w-10{
	background: transparent;
	height:100vh;
	width: $sidebar-width;
	position:fixed;
	overflow: hidden;
	.sidebar{
		width: 200px;
		background: #2f4050;;
		height: 100%;
		z-index: 9999999;
		color: $textcolor;
	}
	*{
		//min-width: 200px;
	}
	.userInfo *{
		min-width: 1px;
	}
	.close{
		font-size: 2.6rem;
		font-weight: 700;
		line-height: 1;
		color: $textcolor;
		text-shadow: 0 1px 0 $textcolor;
		position: fixed;
		height: 50px;
		background: #2f4050;
		width: 50px;
		text-align: center;
		top: 1px;
		padding: 4px 13px;
		min-width: 1px;
		right: 1.5px;
	}
	.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus{
		color: $textcolor;
		text-decoration: none;
		opacity: 1;
	}

}



.transition-slideBarOpen-enter-active{
	animation: slideLeft $animation-duration;
}
.transition-slideBarOpen-leave-active{
	animation: slideRight $animation-duration;
}

@keyframes slideRight {
	@for $i from 100 through 0 {
		#{(100-$i)+%} { width: ($i) + %; }
	}
}
@keyframes slideLeft {
	@for $i from 0 through 100 {
		#{$i+%} { width: ($i) + %; }
	}
}


.sidebar-dropdown-collection{
	width: 100%;
	overflow: hidden;
	display: block;
}
.tansition-sidebar-dropdown-collection-enter-active{
	animation: slideDown $animation-duration;
}
.tansition-sidebar-dropdown-collection-leave-active{
	animation: slideUp $animation-duration;

}
@keyframes slideUp {
	0% { 
		height: 111px; 
		border-left: $sidebar-opened-border-width solid $sidebar-opened-border-color;
		background: #293846;
	}
	100% { 
		height: 0px; 
		border-left: 1px solid $sidebar-opened-border-color;
		background: #293846;
	}
}
@keyframes slideDown {
	0% { 
		height: 0px; 
		border-left: 1px solid $sidebar-opened-border-color;
		background: #293846;
	}
	100% { 
		height: 111px;
		border-left: $sidebar-opened-border-width solid $sidebar-opened-border-color;
		background: #293846;
	}
}
.sidebar-item-opened ul{
	background: #293846;
	color: $textcolor;	
	border-left: $sidebar-opened-border-width solid $sidebar-opened-border-color;
}








.tansition-sidebar-dropdown-collection-small-enter-active{
	animation: slideDownSmall $animation-duration;
}
.tansition-sidebar-dropdown-collection-small-leave-active{
	animation: slideUpSmall $animation-duration;

}
@keyframes slideUpSmall {
	0% { 
		height: 36.8px; 
		border-left: $sidebar-opened-border-width solid $sidebar-opened-border-color;
		background: #293846;
	}
	100% { 
		height: 0px; 
		border-left: 1px solid $sidebar-opened-border-color;
		background: #293846;
	}
}
@keyframes slideDownSmall {
	0% { 
		height: 0px; 
		border-left: 1px solid $sidebar-opened-border-color;
		background: #293846;
	}
	100% { 
		height: 36.8px;
		border-left: $sidebar-opened-border-width solid $sidebar-opened-border-color;
		background: #293846;
	}
}


</style>