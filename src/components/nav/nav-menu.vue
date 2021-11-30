<template>
    <nav ref='navMenu' class='nav-menu' v-bind:class='{ "is-nav-visible": isNav }'>
        <div class='header-bar'>
            <button class='toggle-menu' type='button'>
                <p class='noto-sans-small-bold'>Menu</p>
            </button>
            <a href='#' v-on:click='exitNav'><i class='fa fa-times'></i></a>
        </div>
        <div class='menu-wrapper'>
            <div class='list-wrapper'>
                <img class='le-logo desktop-nav-logo' src='../../assets/le-logo.png' alt='Lincoln Electric'>
                <ul class='menu level-1'>
                    <li v-for='( navItem, index ) of navList' :key='index'>
                        <a :id='navItem.link' href='#' v-on:click='toggleSubMenu(navItem, index)' v-bind:class="{ 'is-active': ( navItem.active && navItem.sub.length ) }">
                            {{ navItem.name}} <i class='right-arrow fa fa-chevron-right'></i>
                        </a>
                        <ul class='sub-menu' v-bind:class="{ 'is-sub-menu-visible': ( navItem.active && navItem.sub.length )}">
                            <li class='back-arrow'>
                                <a href='#' v-on:click='resetNav(index, $event)'><i class='fa fa-chevron-left'></i>GO BACK </a>
                            </li>
                            <li v-for='( subItem, index ) of navItem.sub' :key='index'>
                                <a href='#'>{{ subItem.name }} <i class='right-arrow fa fa-chevron-right'></i> </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class='search-icon'>Search <i class='fa fa-search'></i></div>
            </div>
        </div>
        <div class='footer-nav'>
            <ul>
                <li>
                    <i class='icon fa fa-question-circle'></i> Help <i class='fa fa-chevron-right'></i>
                </li>
                <li>
                    <i class='icon fa fa-map-marker'></i> Where to Buy/Rent
                </li>
                <li>
                    <i class='icon fa fa-shield'></i> Safety
                </li>
                <li>
                    <div class='icon fflag fflag-US ff-mds ff-wave'></div>
			        <p class='noto-sans-small-bold'>EN</p>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
        data: () => ({
            isSubMenuVisible: 'is-sub-menu-visible'
        }),
        mounted() {
        },
        computed: {
            ...mapGetters({
				navList: 'getNavList',
                isNav: 'getIsNav'
			})
        },
        methods: {
            resetNav() {
                this.navList.forEach(function(item) {
                        item.active = false;
                })
            },
            exitNav() {
                this.resetNav();
                this.$store.commit('setIsNav', false);
            },
            toggleSubMenu(item, index) {
                this.navList.forEach(function(item) {
                    if(item.link !== index.toString()) {
                        item.active = false;
                    }
                })
                item.active = !item.active;
            }
        }
    }
</script>

<style lang='less'>
	@import '../../styles/variables.less';
    @import '../../styles/flags.less';

    .nav-menu {
        background-color: #FFF;
        -webkit-box-shadow: 0 3px 5px #9d9d9d;
        -moz-box-shadow: 0 3px 5px #9d9d9d;
        box-shadow: 0 3px 5px #9d9d9d;
        z-index: 99999;
        position: absolute;
        width: 100%;
    }
    
    .desktop-nav-logo {
        width: 130px;
    }

    .list-wrapper:nth-child(1) > ul > li > .sub-menu {
        display: none;

        &.is-sub-menu-visible {
            display: block;
        }
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

    .back-arrow {
        display: none;
    }

    .search-icon {
        font: 400 16px/24px 'Noto Sans', sans-serif;
        margin-left: auto;
        display: flex;
        flex-direction: row;
        align-items: center;

        i {
            margin: 0 5px;
        }
    }

    @media only screen and (min-width: 600px) {
        .list-wrapper {

            width: 100%;
            display: flex;
			flex-direction: row;
            align-items: center;
            height: 68px;
            padding: 0px 15px;

            .menu {
                display: flex;
                flex-direction: row;
                align-items: center;

                .right-arrow {
                    display: none;
                }

                > li {
                    background-color: #fff;
                    list-style-type: none;
                    padding: 15px;
                    
                    
                    > a {
                        display: block;
                        position: relative;
                        text-transform: uppercase;

                        &:hover{
                            color: @primary;
                        }

                        &.is-active {
                            color: @primary;

                            &::after {
                                // color: #B81830;
                                // border-bottom: 2px solid #B81830;
                                content: '';
                                border-bottom: 3px solid @primary;
                                width: 100%;
                                display: block;
                                position: absolute;
                                top: 43px;
                            }
                        }
                    }

                    > .is-sub-menu-visible {
                        position: absolute;
                        top: 80px;
                        left: 0;
                        width: 100%;
                        height: 100vh;
                        overflow: hidden;
                        background-color: #fff;
                        z-index: 9999;
                        padding: 20px 50px;

                        li {
                            list-style-type: none;
                            margin: 20px 0px;
                        }
                    }
                }

                a {
                    font: 700 16px/24px 'Noto Sans', sans-serif;
                    text-decoration: none;
                    color: #000;
                }
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .search-icon {
            display: none;
        }

        nav {
            display: none;
            position: absolute;
            top:0;
            left:0;
            background-color: #F4F4F4;
            width: 100%;
            height: 100%;

            .desktop-nav-logo {
                display: none;
                width: 130px;
            }

            .list-wrapper:nth-child(1) > ul > li > .sub-menu {
                position: absolute;
                top: 38px;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background-color: #fff;
                z-index: 9999;

                &.is-sub-menu-visible {
                    display: block;
                }
            }

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

            .list-wrapper {
             .menu, .sub-menu {

                    .right-arrow {
                        display: block;
                        float: right;
                    }

                    .back-arrow {
                        display: block;

                        a i {
                            margin-right: 10px;
                        }
                    }

                    li {
                        background-color: #fff;
                        list-style-type: none;
                        padding: 15px;
                        float: none;
                        border-bottom: 1px solid #D0D0D0;
                    }

                    a {
                        font: 700 16px/24px 'Noto Sans', sans-serif;
                        text-decoration: none;
                        color: #000;
                    }
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
                        margin: 2px 0 0 5px;
                    }

                    .icon {
                        margin-right: 5px;
                    }
                }
            
            }
        }
    }

    
	
</style>
