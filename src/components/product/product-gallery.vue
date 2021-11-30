<template>
    <div class='product-gallery'>
        <div class='thumbnails'>
            <div>
                <i class='fa fa-chevron-up btns' v-on:click='selectImg({inc: "backward"})'></i>
            </div>
            <div class='thumbnail-img' :class='{ "active" : selImgIndex === index}' v-on:click='selectImg({item: item, index: index})' v-for='( item, index ) of imgLinks' :key='index'>
                <img :src='require("../../assets/" + item)'/>
            </div>
            <div>
                <i class='fa fa-chevron-down btns' v-on:click='selectImg({inc: "forward"})'></i>
            </div>
        </div>
        <div class='main-image'>
            <img class='fade' :key='imgLinks[selImgIndex]' :src='require("../../assets/" + imgLinks[selImgIndex])'/>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['imgLinks'],
        data: () => ({
            selImgIndex: 0
        }),
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
            }
        }
    }
</script>

<style lang='less'>
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
    }

    @media only screen and (min-width: 600px) {

        .product-gallery {
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
                    
                    &:hover {
                        border: 1px solid #7B7B7B;
                    }

                    &.active {
                        border-bottom: 2px solid @primary;
                    }

                    img {
                        width: 100%;
                    }
                }
            }
        }


    }

    @media only screen and (max-width: 600px) {
        .product-gallery {
            display: flex;
            flex-direction: column-reverse;
            align-content: center;


            .thumbnails{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                align-content: stretch;

                .btns {
                    // color: @primary;
                    // -webkit-transform: rotate(270deg);
                    // -moz-transform: rotate(270deg);
                    // -o-transform: rotate(270deg);
                    // -ms-transform: rotate(270deg);
                    // transform: rotate(270deg);
                    display: none;
                }
                
                .thumbnail-img {
                    
                    background: #c1c1c1;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin: 15px 5px;

                    &.active {
                        background: @dark-text;
                    }

                    img {
                        display: none;
                        // width: 100%;
                    }
                }
            }
        }
        
    }

    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 0.5s;
    }

    @-webkit-keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }

    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }

    
	
</style>
