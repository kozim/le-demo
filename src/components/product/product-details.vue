<template>
	<div class='product-details'>
		<div class='gallery'>
			<product-gallery :img-links='product.gallery' />
		</div>
		<div class='details'>
			<h1 class='non-banner title'>
				{{product.name}}
			</h1>
			<h4 class='headline-light'> {{ product.type }} | {{ product.id }} </h4>
			<div class='rating'>
				<span 
					v-for='( item, index ) of 5' :key='index' 
					class='fa fa-star star'
					v-bind:class='{ "checked" : ( index < product.rating ) }'>
				</span>
				<p class='small'>{{ product.ratingText }} </p>
				<p class='small'>({{ product.ratingTotal }}) </p>
			</div>
			<hr>
			<p class='small'>
				{{ product.desc }}
			</p>
			<span class='rebate'>
				<p class='small'>
					<span class='icon rebate-color fa fa-dollar'></span>
					<span class='rebate-color text'>REBATE  </span> <span class='green'>| </span>
					{{ product.rebateInfo }}
				</p>
			</span>

			<div class='purchase-info'>
				<p class='small msrp'>
					MSRP: ${{ product.msrp }}
				</p>
				<p class='small price-text'>
					Your Price
				</p>
				<p class='final-price'>
					${{ product.discountPrice }}
				</p>
				<p class='noto-small'><span class='in-stock-color'>In Stock</span> | QTY: {{ product.qty }} - {{ product.qtyLocation }}</p>
				<div class='cart-list-row'>
					<div class='checkout-buttons'>
						<div class='buy-amount-input'>
							<button class='btns' v-on:click='removeItem'>-</button>
							<p class='noto-small'>{{ cartQty }}</p>
							<button class='btns' v-on:click='addItem'>+</button>
						</div>
						<div class='add-cart-btn noto-sans-small-bold' v-on:click='addToCart'>
							ADD TO CART
						</div>
					</div>
					<div class='add-to-list noto-sans-small-bold'>
						<span class='fa fa-list-ul'></span> ADD TO LIST
					</div>
				</div>
			</div>


		</div>


	</div>

</template>

<script>
	import productGallery from './product-gallery.vue'
	import { mapGetters } from 'vuex'

	export default {
		components: {
			productGallery
		},
        data: () => ({
			cartQty: 0
        }),
		computed: {
			...mapGetters({
				product: 'getVikingProduct'
			})
		},
        methods: {
			addItem() {
				this.cartQty++;
			},
			removeItem() {
				if( this.cartQty > 0 ) {
					this.cartQty--;
				}
			},
			addToCart() {
				this.$store.commit('setCart', this.cartQty);
			}
        }
    }
</script>

<style lang='less'>
	@import '../../styles/variables.less';

	.product-details {
		background-color: #fff;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: baseline;
		align-content: stretch;
		height: 100%;
		padding: 0px 50px;
    
		.gallery, .details {
			max-width: 100%;
			min-width: 50%;
			padding: 20px 0px;
		}

		.gallery {
			// padding: 20px 0px 60px 60px;
			// margin: 20px 0px 60px 60px;
		}

		.details{
			// padding: 20px 60px 60px 0px;
			// margin: 20px 60px 60px 0px;
		}

		.title {
			margin-bottom: 5px;
		}

		.rating {
			display: flex;
			flex-direction: row;
			margin: 10px 0px;

			p {
				color: @primary;
				margin: 0px 5px;
			}

			.star {
				line-height: 24px;
				margin: 0px 2px;
			}
			.checked {
				color: @primary;
			}
		}

		.rebate {
			display: flex;
			flex-direction: row;
			margin: 20px 0;

			.icon {
				margin-right: 5px;
			}

			.rebate-color {
				color: @in-stock-rebate;

				&.text {
					font-style: italic;
					font-weight: bold;
				}
			}
		}
		

		hr {
			margin: 10px 0px;
			color: #FFF;
			border-bottom: 1px solid @borders;
		}


		.purchase-info {
			background-color: @page-section-bgs;
			padding: 25px;
			margin-top: 35px;

			.msrp {
				margin-bottom: 10px;
			}

			.price-text {
				font-weight: bold;
			}

			.final-price{
				font: 700 24px/28px 'Noto Sans', sans-serif;
				margin-bottom: 15px;
			}

			.in-stock-color {
				color: @in-stock-rebate;
				font-weight: bold;
			}


			.cart-list-row {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				align-content: stretch;
				flex-wrap: wrap;
			}
			.checkout-buttons {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				margin: 15px 15px 15px 0px;
				border: 1px solid #D0D0D0;
				border-radius: 5px;
				width: 325px;

				.buy-amount-input{
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: space-around;
					align-items: center;
					align-content: stretch;
					width: 40%;
					padding: 14px 0px;
					background-color: #FFF;

					.btns {
						color: @primary;
						font-weight: bold;
					}

				}

				.add-cart-btn {
					background-color: @primary;
					color: #fff;
					padding: 14px 36px;
					width: 60%;
					text-align: center;
					cursor: pointer;
				}
			}

			.add-to-list {
				color: @primary;
			}
			
		}
	}

	@media only screen and (max-width: @breakpoint) {
		.product-details {
			display: flex;
			flex-direction: column;
			padding: 0px;

			.gallery, .details {
				padding: 20px;
				margin: 5px;
				width: 100%;
			}
		}
    }
</style>
