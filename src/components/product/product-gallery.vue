<template>
    <div class="product-gallery">
        <div class="thumbnails">
            <div>
                <i class="fa fa-chevron-up btns" v-on:click="selectImg({inc: 'backward'})"></i>
            </div>
            <div class="thumbnail-img" :class="{ 'active' : selImgIndex === index}" v-on:click="selectImg({item: item, index: index})" v-for='( item, index ) of imgLinks' :key='index'>
                <img :src="require('../../assets/' + item)"/>
            </div>
            <div>
                <i class="fa fa-chevron-down btns" v-on:click="selectImg({inc: 'forward'})"></i>
            </div>
        </div>
        <div class="main-image">
            <img :src="require('../../assets/' + imgLinks[selImgIndex])"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['imgLinks'],
        data: () => ({
            selImgIndex: 0
            // selImgUrl: null
        }),
        mounted() {
        },
        computed: {
        },
        methods: {
            selectImg({item, index, inc}) {
                switch(inc) {
                    case 'forward':
                        if(this.selImgIndex < this.imgLinks.length-1){
                            this.selImgIndex += 1;
                        }
                        break;
                    case 'backward':
                        if(this.selImgIndex > 0){
                            this.selImgIndex -= 1;
                        }
                        break;
                    default:
                        this.selImgIndex = index;
                    }
            },
        }
    }
</script>

<style lang="less">
	@import '../../styles/variables.less';
    @import '../../styles/flags.less';

    .product-gallery {
        
        display: flex;
        flex-direction: row;
        align-content: stretch;


        .main-image {
            width: 100%;
            
            img {
                width: 100%;
            }
        }
        
        .thumbnails{
            width: 50px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            align-content: stretch;

            .btns {
                color: @primary;
                cursor: pointer;
            }
            
            .thumbnail-img {
                width: 50px;
                border: 1px solid @borders;
                margin: 10px 0px;
                padding: 5px 0px 0px 0px;

                &.active {
                    border-bottom: 2px solid red;
                }

                img {
                    width: 100%;
                }
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .product-gallery {
            display: flex;
            flex-direction: column;
            align-content: center;


            .thumbnails{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                align-content: stretch;

                .btns {
                    color: @primary;
                    -webkit-transform: rotate(270deg);
                    -moz-transform: rotate(270deg);
                    -o-transform: rotate(270deg);
                    -ms-transform: rotate(270deg);
                    transform: rotate(270deg);
                }
                
                .thumbnail-img {
                    width: 50px;
                    border: 1px solid @borders;
                    margin: 10px;
                    padding: 5px 0px 0px 0px;

                    &.active {
                        border-bottom: 2px solid red;
                    }

                    img {
                        width: 100%;
                    }
                }
            }
        }
        
    }

    
	
</style>
