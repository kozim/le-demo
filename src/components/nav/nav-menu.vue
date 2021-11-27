<template>
    <nav ref="navMenu" class="nav-menu">
        <div class="header-bar">
            <button class="toggle-menu" type="button">
                <p class="noto-sans-small-bold">Menu</p>
            </button>
            <a href="#"><i class="fa fa-times"></i></a>
        </div>
        <div class="menu-wrapper">
            <div class="list-wrapper">
                <ul class="menu level-1">
                    <li>
                        <a href="" class="nested">SOLUTIONS <i class="right-arrow fa fa-chevron-right"></i></a>
                        <ul class="sub-menu">
                            <li>
                                <a href="" class="nested">SOLUTIONS BY INDUSTRY <i class="right-arrow fa fa-chevron-right"></i> </a>
                            </li>
                            <li>
                                <a href="" class="nested">SOLUTIONS BY PROCESS <i class="right-arrow fa fa-chevron-right"></i></a>
                            </li>
                            <li>
                                <a href="" class="nested">SOFTWARE SOLUTIONS <i class="right-arrow fa fa-chevron-right"></i></a>
                            </li>
                            <li>
                                <a href="" class="nested">SERVICES <i class="right-arrow fa fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="" class="nested">PRODUCTS <i class="right-arrow fa fa-chevron-right"></i></a>
                    </li>
                    <li>
                        <a href="" class="nested">AUTOMATION <i class="right-arrow fa fa-chevron-right"></i></a>
                    </li>
                    <li>
                        <a href="" class="nested">EDUCATION <i class="right-arrow fa fa-chevron-right"></i></a>
                    </li>
                    <li>
                        <a href="" class="nested">RESOURCES <i class="right-arrow fa fa-chevron-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <ul class="footer-nav">
                <li>
                    <i class="icon fa fa-question-circle"></i> Help <i class="fa fa-chevron-right"></i>
                </li>
                <li>
                    <i class="icon fa fa-map-marker"></i> Where to Buy/Rent
                </li>
                <li>
                    <i class="icon fa fa-shield"></i> Safety
                </li>
                <li>
                    <div class="icon fflag fflag-US ff-mds ff-wave"></div>
			        <p class="noto-sans-small-bold">EN</p>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    
    const isNavVisible = "is-nav-visible";

    // navMenu.classList.toggle(isNavVisible);

    export default {
        data: () => ({
            
        }),
        mounted() {
            console.log("this.$refs.navMenu", this.$refs.navMenu);
            this.$refs.navMenu.classList.add(isNavVisible);
        }
    }
</script>

<style lang="less">
	@import '../../styles/variables.less';
	@import '../../styles/flags.less';

    .list-wrapper:nth-child(1) > ul > li > .sub-menu {
        display: none;
    }

    .header-bar {
        display: none;
    }

    .right-arrow { 
        display: none;
    }

    .footer-nav {
        display: none;
    }

    .is-nav-visible {
        display: block;
    }

    @media only screen and (max-width: 600px) {
        nav {
            display: none;
            position: absolute;
            top:0;
            left:0;
            background-color: #F4F4F4;
            width: 100%;
            height: 100%;

            .header-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 38px;
                background-color: #171717;
                color: white;
                padding: 0 15px;

                a {
                    color: #fff;
                }
            }

            .menu.level-1, .sub-menu a {

                .right-arrow {
                    display: block;
                    float: right;
                }

                li {
                    background-color: #fff;
                    list-style-type: none;
                    padding: 15px;
                    border-bottom: 1px solid #D0D0D0;
                }

                a {
                    font: 700 16px/24px 'Noto Sans', sans-serif;
                    text-decoration: none;
                    color: #000;
                }
            }

            .footer-nav {
                display: block;
                padding-top: 10px;

                li {
                    padding: 10px 15px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    font: 700 16px/24px 'Noto Sans', sans-serif;

                    i.fa-chevron-right {
                        margin-left: 5px;
                    }

                    .icon {
                        margin-right: 5px;
                        
                        &.fa {
                        }
                    }
                }
            
            }
        }
    }

    
	
</style>
