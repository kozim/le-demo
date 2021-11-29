<template>
	<div class="product-details">
		<div class="gallery">
			gallery here
		</div>
		<div class="details">
			<h1 class="non-banner title">
				{{product.name}}
			</h1>
			<h4 class="headline-light"> {{ product.type }} | {{ product.id }} </h4>
			<div class="rating">
				<span 
					v-for="( item, index ) of 5" :key="index" 
					class="fa fa-star star"
					v-bind:class="{ 'checked' : ( index < product.rating ) }">
				</span>
				<p class="small">{{ product.ratingText }} </p>
				<p class="small">({{ product.ratingTotal }}) </p>
			</div>
			<hr>
			<p class="small">
				{{ product.desc }}
			</p>
			<span class="rebate">
				<p class="small">
					<span class="icon rebate-color fa fa-dollar"></span>
					<span class="rebate-color text">REBATE  </span> <span class="green">| </span>
					{{ product.rebateInfo }}
				</p>
			</span>

			<div class="purchase-info">
				<p class="small msrp">
					MSRP: ${{ product.msrp }}
				</p>
				<p class="small price-text">
					Your Price
				</p>
				<p class="final-price">
					${{ product.discountPrice }}
				</p>
				<p class="noto-small"><span class="in-stock-color">In Stock</span> | QTY: {{ product.qty }} - {{ product.qtyLocation }}</p>
				<div class="checkout-buttons">
					<div class="buy-amount-input">
						<button>-</button>
						<p>5</p>
						<button>+</button>
					</div>
				</div>
			</div>


		</div>


	</div>

</template>

<script>
	export default {
        data: () => ({
			product: {
				name: "VIKING 3350",
				type: "Welding Helmet",
				id: "K4034-4",
				rating: 4,
				ratingText: "4.0",
				ratingTotal: 36,
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temopor, incididunt ut labore et dolore magan aliqua.",
				rebate: true,
				rebateInfo: "Enter code CASH-50 at checkout for $50 of this item!",
				msrp: "350.00",
				discountPrice: "300.00",
				qty: 1,
				qtyLocation: "Los Angeles, CA US"
			}
        }),
        mounted() {
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style lang="less">
	@import '../../styles/variables.less';

	.product-details {
		background-color: #fff; // remove me testing
		height: 600px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: baseline;
		align-content: stretch;
		-webkit-box-shadow: inset 0 3px 5px #ccc;
		-moz-box-shadow: inset 0 3px 5px #ccc;
		box-shadow: inset 0 3px 5px #ccc;
    
		.gallery, .details {
			// border: 1px solid red; // remove me testing
			padding: 20px;
			margin: 20px;
			width: 550px;
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

			.checkout-buttons {
				margin: 15px 0px;

				.buy-amount-input{
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: space-around;
					align-items: center;
					align-content: stretch;
					width: 135px;
					border: 1px solid #D0D0D0;
					padding: 18px 36px;
					border-radius: 5px;
					background-color: #FFF;

				}
			}
			
		}
	}

	@media only screen and (max-width: 600px) {
		.product-details {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			align-content: stretch;
			padding: 10px;


			.gallery, .details {
				padding: 20px;
				margin: 5px;
				width: 100%;
			}
		}
    }
</style>
