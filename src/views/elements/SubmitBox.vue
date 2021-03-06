<template>
    <div class="estimateCard" id="estimateCard">
        <div class="addmore-box">
            <div class="addmore-btn">
                <input type="button" name="add_more" value="Add More Jobs to Cart">
            </div>
            <div class="addmore-or">OR</div>
        </div>


        <div class="terms-box">
            <div class="terms-boxin">
                <div class="place-title">Place Your Order</div>
                <div class="terms-line first">
                    <div class="customCheckbox undefined cf" id="">
                        <input type="checkbox" name="chk_terms"
                               id="terms_conditions"
                               style="">
                        <label for="terms_conditions">I accept the
                            <a href="" target="_blank">Terms and Conditions</a>.
                        </label>
                    </div>
                    <div class="terms-error"></div>
                </div>
                <div class="terms-line">
                    <div class=" undefined cf">
                        <input type="checkbox" name="chk_work"
                               id="newsletter"
                               style="">
                        <label for="newsletter">I would like to signup for the newsletter.</label>
                    </div>
                </div>
                <!-- template shows in samples  -->
                <div class="terms-line last">
                    <div class=" undefined cf">
                        <input type="checkbox"
                               name="templt_in_sample" id="templt_in_sample"
                               style="">
                        <label for="templt_in_sample">You can display this template in your Samples section.</label>
                    </div>
                </div>
                <!-- template shows in samples  -->
                <div id="div_prg_bar" class="progess_bar">
                    <div class="prog">
                        <div id="progress_container">
                            <!-- the component -->
                            <div id="progressBar">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div id="div_prg_bar1" class="progess_bar files">
                    <div class="prog">
                        <div id="progress_container">
                            <div id="filesProgressBar">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="order-btn show main_submit_cls" id="ordernow1">
                    <input type="submit" name="order now" value="Order Now" id="ok">
                    <i class="button-arrow"></i>
                </div>
            </div>
        </div>

        <div class="weaccept-box">
            <div class="weaccept-line">We accept:</div>
            <!--<div class="paypal-logo"><img src="images/paypal.png" alt="Paypal" /></div>-->
            <div class="card-logos">
                <img src="https://d1sdrv0xq6nn0e.cloudfront.net/Monastry/images/card_icons.png"
                                         alt="Master / Visa Cards"></div>
            <div class="moneyguarantee-block-text"> 100% money back guarantee
                <!--<img src="images/money-back.jpg" alt="" title="100% Money Back Guarantee" />--> </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubmitBox",
        // created() {
        //     $(document).ready(function () {
        //         $(window).scroll(function () {
        //             if ($(this).scrollTop() > 1111) {
        //                 $('#estimateCard').addClass('top-fixed');
        //             } else {
        //                 $('#estimateCard').removeClass('top-fixed');
        //             }
        //         });
        //         window.scroll({top: 1200, behavior: 'smooth'});
        //     });
        // }
    }
</script>

<style scoped>
    div#loading_img_main_cart {
        position: absolute;
        left: 0;
        background: #14141478;
        height: 100%;
        width: 100%;
        top: 0;
        text-align: center;
        padding-top: 30%;
    }
    .top-fixed {
        position: fixed;
        top: 0;
        padding: 30px 90px 0px 0px;
    }
    html {
        scroll-behavior: smooth;
    }
    .customCheckbox label {
        display: unset;
        padding-left: 0px;
        vertical-align: top;
        width: 100%;
        left: 0;
    }
</style>
