<template>
  <div class="top-header">
		<div class="left"> 
			<div class="fflag fflag-US ff-mds ff-wave"></div>
			<p class="noto-sans-small-bold">EN</p>
		</div>
		<div class="icon-bar">
			<a href="#"><i class="fa fa-shield"></i></a>
			<a href="#"><i class="fa fa-question-circle"></i></a>
			<a href="#"><i class="fa fa-map-marker"></i></a>
			<a href="#"><i class="fa fa-user"></i></a>
			<a class="checkout-icon" href="#"><i class="fa fa-shopping-cart"></i><p class="noto-sans-small-bold">3</p></a>
		</div>  
		
  </div>

</template>

<script>

</script>

<style lang="less">
	@import '../../styles/variables.less';
	@import '../../styles/flags.less';
	  

	.top-header {
		background-color: #000;
		height: 34px;
		color: #fff;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: stretch;
		align-content: space-between;

		.left {
			padding-left: 10px;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			align-content: space-around;

			.fflag {
				margin-right: 5px;
			}
		}

		.icon-bar {
			width: 500px;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-end;
			align-items: stretch;
			align-content: stretch;

			a {
				padding: 9px 15px 10px 5px;
				color: white;

				&.checkout-icon {
					padding-top: 5px;
					padding-left: 10px;
					text-decoration: none;
					background-color: @primary;
					color: #fff;

					i {
						margin-right: 5px;
					}		
					
					p {
						display: inline-block;
					}
				}
			}


		}

		
	}
	
	
	
	
</style>
