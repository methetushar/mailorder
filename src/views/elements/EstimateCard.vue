<template>
    <div>
        <div class="cart-title">Your Order Cart</div>
        <div id="cartmainarea"></div>
        <div class="cartbox selection" id="cart-process">
            <!-- In process job -->
            <div class="cart-head desktop cf">
                <div class="cart-headleft cf">
                    <div class="headleft-1">Job <span id="running-no">1</span></div>
                    <div class="headleft-2">(In Process)</div>
                </div>
                <div class="cart-headright">
                    <a href="javascript:void(0);">
                        <img src="https://d1sdrv0xq6nn0e.cloudfront.net/Monastry/images/cart_del.png" alt="Delete">
                    </a>
                </div>
            </div>
            <div class="cart-head mobile cf">
                <div class="cart-headleft cf">
                    <div class="headleft-1">Your Selection</div>
                    <div class="headleft-2">&nbsp;</div>
                </div>
                <div class="cart-headright"> &nbsp;</div>
            </div>
            <div class="cart-inner">
                <!--  addto cart loader  -->
                <div class="loading_img_cart" id="loading_img_main_cart" v-if="$parent.loader">
                    <img src="https://d1sdrv0xq6nn0e.cloudfront.net/ssl_images/loader_cart.gif" style="width: 45px;">
                </div>
                <div id="cartAppend">
                    <div class="cart-item cf">
                        <div class="cart-left">
                            <span class="total_qty_number">{{ $parent.data.order.no_of_service }}</span>
                            <span id="service_name" class="text-capitalize">
                                {{ $parent.data.order.service.replace('-',' ')  }} {{ $parent.data.order.package.replace('-',' ')}}
                            </span>
                        </div>
                        <div class="cart-right" id="main_amt">{{ '$' +$parent.data.order.servicePrice}}</div>
                    </div>
                    <div class="cart-item cf">
                        <div class="cart-left">
                            <span class="white">+</span>
                            <span class="text-capitalize">{{ $parent.data.order.layout.layoutName}}</span>
                        </div>
                        <div class="cart-right"><span>{{ '$' +$parent.data.order.layout.price}}</span></div>
                    </div>
                    <div class="cart-item cf" v-for="(addOnsData,index) in $parent.data.order.addOns" :key="index">
                        <div class="cart-left"><span class="white">+</span>
                            <span class="text-capitalize">{{addOnsData.addonsName.replace('_',' ')}}</span>
                        </div>
                        <div class="cart-right"><span>{{ '$' + addOnsData.price}}</span></div>
                    </div>
                    <div class="cart-item cf">
                        <div class="cart-left">
                            <span class="white">+</span>
                            <span class="text-capitalize">{{ $parent.data.order.softwareIntegration.integratName.replace('_',' ')}}</span>
                        </div>
                        <div class="cart-right"><span>{{ '$' +$parent.data.order.softwareIntegration.price}}</span></div>
                    </div>
                    <div class="cart-item cf">
                        <div class="cart-left">
                            <span class="white">+</span>
                            <span class="text-capitalize">{{ $parent.data.order.emailFrameworks.frameworkName.replace('_',' ')}}</span>
                        </div>
                        <div class="cart-right"><span>{{ '$' +$parent.data.order.emailFrameworks.price}}</span></div>
                    </div>
                    <div class="cart-item cf">
                        <div class="cart-left">
                            <span class="white">+</span>
                            <span class="text-capitalize">{{ $parent.data.order.emailRendering.RenderingName.replace('_',' ')}}</span>
                        </div>
                        <div class="cart-right"><span>{{ '$' +$parent.data.order.emailRendering.price}}</span></div>
                    </div>
                </div>
                <div class="cart-item cf">
                    <div class="cart-left">Subtotal (USD)</div>
                    <div class="cart-right" id="total_amt">{{ '$' + $parent.data.subTotal}}</div>
                </div>
                <div class="cart-item deltime cf"> Estimated delivery time: <span
                    id="act_time3">{{ $parent.data.estimateDate}}</span> | GMT
                </div>


                <div>
                    <!--<div class="cart-btnbox" id="cartbtnbox"><input type="button" value="+ Add To Cart" /></div>-->
                </div>
            </div>
            <!-- In process job end -->
            <br>
            <div class="order-total">
                <div class="order-totalin cf">
                    <div class="total-row cf first">
                        <div class="order-total-left">Total (USD)</div>
                        <div class="order-total-right"><span id="current_amt">{{ '$' + $parent.data.subTotal}}</span></div>
                    </div>
                </div>
                <div class="discount-box cf">
                    <div class="discount-label"><a @click="discountBox = !discountBox" href="javascript:void(0);">Have a coupon?</a></div>
                    <div class=" cf" id="disc-box" v-if="discountBox">
                        <form action="" v-on:submit.prevent="$parent.discount">
                            <div class="discount-txtbox">
                                <input type="text" required v-model="$parent.discountGet.inputCouponCode"  id="txt_disccode" placeholder="Enter Code">
                            </div>
                            <div class="discount-btn">
                                <input type="submit" name="apply" value="Apply">
                            </div>
                        </form>
                        <span v-if="$parent.discountGet.msg.error"  style="color: red">{{ $parent.discountGet.msg.error}}</span>
                        <span v-else style="color: green">{{ $parent.discountGet.msg.success}}</span>
                    </div>
                    <div class="clear"></div>
                    <div class="disc-message"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EstimateCard",
        data(){
            return{
                data:{

                },
                discountBox:false
            }
        },
    }
</script>
