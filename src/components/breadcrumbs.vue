<template>
	<div class='bread-crumbs'>
		<span class='bread-crumb' v-for='( breadCrumb, index ) of breadCrumbs' :key='index'> <a href='#'>{{breadCrumb}} <i class='fa fa-chevron-right btns'></i></a></span>
	</div>

</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		data: () => ({
		}),
		mounted() {
		},
		computed: {
			...mapGetters({
				breadCrumbs: 'getBreadCrumbs',
			})
		},
		methods: {
		}
}
</script>

<style lang='less'>
	@import '../styles/variables.less';

	.bread-crumbs {
		background-color: #fff;
		margin-top: 70px;
		padding: 20px 0px 0px 100px;

		.bread-crumb {
			margin: 0px 5px;
			font: 400 12px/24px 'Noto Sans', sans-serif;
    		color: @lightest-text;

			a {
				text-decoration: none;
				color: inherit;
			}
		}
	}

	@media only screen and (min-width: 600px) {
		.bread-crumbs {
			.bread-crumb {
				&:last-child {
					color: #000;
					font-weight: bold;

					i {
						display: none;
					}
				}
			}
		}
	}

	@media only screen and (max-width: 600px) {
		.bread-crumbs {
			background-color: #fff;
			margin-top: 0px;
			padding: 20px 0px 0px 20px;

			.bread-crumb {

				&:not(:nth-last-child(2)) {
					display: none;
				}

				&:nth-last-child(2) {
					i {
						margin-top: 5px;
						float: left;
						-webkit-transform: rotate(180deg);
						-moz-transform: rotate(180deg);
						-o-transform: rotate(180deg);
						-ms-transform: rotate(180deg);
						transform: rotate(180deg);
					}
				}
			}
		}
	}
</style>
