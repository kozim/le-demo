<template>
  <div class="top-header">
		<div class="left">
			<i class="is-mobile fa fa-bars" v-on:click="toggleNav"></i>
			<img class="is-mobile le-logo" src="../../assets/le-logo.png" alt="Lincoln Electric">
		
			<div class="is-desktop fflag fflag-US ff-mds ff-wave"></div>
			<p class="is-desktop noto-sans-small-bold">EN</p>
		</div>
		<div class="icon-bar">
			<a class="is-mobile" href="#"><i class="fa fa-search"></i></a>
			<a class="is-desktop" href="#"><i class="fa fa-shield"></i></a>
			<a class="is-desktop" href="#"><i class="fa fa-question-circle"></i></a>
			<a class="is-desktop" href="#"><i class="fa fa-map-marker"></i></a>
			<a href="#"><i class="fa fa-user"></i></a>
			<a class="checkout-icon" href="#"><i class="fa fa-shopping-cart"></i><p class="noto-sans-small-bold">{{cart}}</p></a>
		</div>
  </div>

</template>

<script>
	export default {
        data: () => ({
        }),
        mounted() {
        },
        computed: {
			cart() {
                return this.$store.getters["getCart"];
            }
        },
        methods: {
            toggleNav() {
                this.$store.commit("setIsNav", true);
            }
        }
    }
</script>

<style lang="less">
	@import '../../styles/variables.less';
	@import '../../styles/flags.less';

	.top-header {
		background-color: #000;
		height: 34px;
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		white-space: nowrap;

		.le-logo {
			width: 100px;
			margin: 0 5px;
		}

		.left {
			padding-left: 10px;
			display: flex;
			flex-direction: row;
			align-items: center;

			.fflag {
				margin-right: 5px;
			}
		}

		.icon-bar {
			display: flex;
			justify-content: space-between;
			align-items: center;

			// display: flex;
			// flex-direction: row;
			// align-items: stretch;
			// align-content: stretch;

			a {
				padding: 0 10px;
				color: #fff;

				&.checkout-icon {
					// padding-top: 5px;
					padding-left: 10px;
					text-decoration: none;
					background-color: @primary;
					color: #fff;
					height: 34px;
					padding-top: 4px;

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
	

	@media only screen and (max-width: 600px) {
			
			.navigation-menu {
				height:100%;
				width:100%;
				overflow:hidden;
			}

			.top-header {
				background-color: #fff;
				color: #000;
				height: 49px;
				
				.left {
					padding-left: 10px;

					.fflag {
						margin-right: 5px;
					}
				}

				.icon-bar {

					a {
						color: #000;
						padding: 0 5px;

						.fa, .fa-bars {
							font-size: 18px;
						}

						&.checkout-icon {
							padding: 5px 10px 5px 5px;
							text-decoration: none;
							background-color: #fff;
							color: #000;

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
		}
</style>
