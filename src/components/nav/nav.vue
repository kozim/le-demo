<template>
  <div class="top-header">
		<div class="left"> 
			<h4 class="headline">EN</h4>
		</div>
		<div class="icon-bar">
			<a class="" href="#"><i class="fa fa-home"></i></a>
			<a href="#"><i class="fa fa-search"></i></a>
			<a href="#"><i class="fa fa-envelope"></i></a>
			<a href="#"><i class="fa fa-globe"></i></a>
			<a class="checkout-icon" href="#"><i class="fa fa-trash"></i></a>
		</div>  
		
  </div>

</template>

<script>

</script>

<style lang="less">
  	@import '../../styles/variables.less';

	.top-header {
		background-color: #000;
		height: 35px;
		color: #fff;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: stretch;
		align-content: space-between;

		.left {
			display: flex;
			justify-content: center;
			align-content: center;
			flex-direction: column;
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
				// float: right;
				// text-align: center;
				padding: 10px;
				color: white;
				//height: 100%;

				&.checkout-icon {
					background-color: @primary;
					color: #fff;
				}
			}


		}

		
	}
	
	
	
	
</style>
