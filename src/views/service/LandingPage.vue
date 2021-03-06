<template>
    <div class="landing-page">
        <div class="section-box time-box landing-page desktop cf" >
            <div id="landing-page-only-coding-timesheet" v-if="$parent.data.order.package === 'only-coding' ">
                <div class="service-box first" :class="$parent.data.order.deliveryInfo.deliveryName === 'standardDelivery' ? 'active':'' ">
                    <input type="radio" id="only_coding_standardDelivery" class="d-none"
                           v-model="$parent.data.order.deliveryInfo" name="delivery"
                           :value="{deliveryName:'standardDelivery',time:4,price:149,timeSlug:'days'}"
                    >
                    <label for="only_coding_standardDelivery">
                        <div class="select-arrow">&nbsp;</div>
                        <div class="ser-title">Standard Delivery</div>
                        <div class="ser-text1">Monks will start your order asap.</div>
                        <div class="ser-price"><span>$</span><b class="price">149</b>/page</div>
                        <div class="ser-del"><span>Delivery : </span>2 to 4 days</div>
                    </label>
                </div>
                <!-- Disable Express for christmas -->
                <div class="service-box last" :class="$parent.data.order.deliveryInfo.deliveryName === 'expressDelivery' ? 'active':'' ">
                    <input type="radio" id="only_coding_expressDelivery" class="d-none"
                           v-model="$parent.data.order.deliveryInfo" name="delivery"
                           :value="{deliveryName:'expressDelivery',time:3,price:199,timeSlug:'days'}"
                    >
                    <label for="only_coding_expressDelivery">
                        <div class="select-arrow">&nbsp;</div>
                        <div class="ser-title">Express Delivery</div>
                        <div class="ser-text1">Monks will start your order asap.</div>
                        <div class="ser-price"><span>$</span><b class="price">199</b>/page</div>
                        <div class="ser-del"><span>Delivery : </span>1 to 3 days</div>
                    </label>
                </div>
            </div>
            <div v-else id="landing-page-desgn-coding-timesheet" >
                <div class="service-box first" :class="$parent.data.order.deliveryInfo.deliveryName === 'standardDelivery' ? 'active':'' ">
                    <input type="radio" id="design_coding_standardDelivery" class="d-none"
                           v-model="$parent.data.order.deliveryInfo" name="delivery"
                           :value="{deliveryName:'standardDelivery',time:6,price:249,timeSlug:'days'}"
                    >
                    <label for="design_coding_standardDelivery">
                        <div class="select-arrow">&nbsp;</div>
                        <div class="ser-title">Standard Delivery</div>
                        <div class="ser-text1">Monks will start your order asap.</div>
                        <div class="ser-price" id="lp_std"><span>$</span><b class="price">249</b>/page</div>
                        <div class="ser-del" id="lan_std_time">Delivery : 4 to 6 days</div>
                    </label>
                </div>
                <!-- Disable Express for christmas -->
                <div class="service-box last" :class="$parent.data.order.deliveryInfo.deliveryName === 'expressDelivery' ? 'active':'' ">
                    <input type="radio" id="design_coding_expressDelivery" class="d-none"
                           v-model="$parent.data.order.deliveryInfo" name="delivery"
                           :value="{deliveryName:'expressDelivery',time:5,price:349,timeSlug:'days'}"
                    >
                    <label for="design_coding_expressDelivery">
                        <div class="select-arrow">&nbsp;</div>
                        <div class="ser-title">Express Delivery</div>
                        <div class="ser-text1">Monks will start your order asap.</div>
                        <div class="ser-price" id="lp_exp"><span>$</span><b class="price">349</b>/page</div>
                        <div class="ser-del" id="lan_exp_time">Delivery : 3 to 5 days</div>
                    </label>
                </div>
            </div>

            <div class="clear"></div>
            <div class="estimateline cf">
                <div class="line-left">Estimated delivery time: <span id="act_time">{{ $parent.data.order.DeliveryTime }}</span>
                </div>
                <div class="zone-selector">&nbsp;&nbsp;GMT&nbsp;&nbsp;</div>
            </div>
        </div>
        <div class="section-title integration cf">
            <div class="section-titlein"><span>7</span>Landing Software Integration </div>
            <div class="currancy_message">(Prices are in USD)</div>
        </div>
        <div class="section-box basic-advnc-redio cf">
            <div class="basic-advnc-redio cf">
                <div class="layout-box" :class="$parent.data.order.softwareIntegration.integratName === 'no_ntegration' ? 'active':''">
                    <input type="radio" class="d-none"
                           v-model="$parent.data.order.softwareIntegration" name="category"  id="no_ntegration"
                           :value="{integratName:'no_ntegration' ,price:0,time:0,timeSlug:'hours'}">
                    <label for="no_ntegration">
                        <div class="boxin active">No  - $<span class="price">0</span> </div>
                    </label>
                </div>
                <div class="layout-box basic" :class="$parent.data.order.softwareIntegration.integratName === 'yes_ntegration'?'active':''">
                    <input type="radio" class="d-none"
                           v-model="$parent.data.order.softwareIntegration" name="category"  id="yes_ntegration"
                           :value="{integratName:'yes_ntegration' ,price:79,time:24,timeSlug:'hours'}">
                    <label for="yes_ntegration">
                        <div class="boxin active">Yes - $<span class="price">79</span> </div>
                    </label>
                </div>
            </div>
        </div>

        <div class="section-box integration desktop cf">
            <div class="integration-box cf basic-box">
                <ul id="BasicBox">
                    <li class="int-comp first">
                        <div class=" undefined cf">
                            <input type="checkbox" @click="setSoftwareIntegration('marketo')" id="marketo_guided"
                                   :value="{addonsName:'Marketo Guided Pages'}"
                                   v-model="$parent.data.order.addOns"
                            >
                            <label for="marketo_guided">Marketo Guided Pages</label>
                        </div>
                    </li>
                    <li class="int-comp">
                        <div class=" undefined cf">
                            <input type="checkbox" @click="setSoftwareIntegration('hubspot')" id="hubspot"
                                   :value="{addonsName:'Hubspot (HUBL)'}"
                                   v-model="$parent.data.order.addOns"
                            >
                            <label for="hubspot">Hubspot (HUBL)</label>
                        </div>
                    </li>
                    <li class="int-comp">
                        <div class=" undefined cf">
                            <input type="checkbox" @click="setSoftwareIntegration('unbounce')" id="unbounce"
                                   :value="{addonsName:'Unbounce'}"
                                   v-model="$parent.data.order.addOns"
                            >
                            <label for="unbounce">Unbounce</label>
                        </div>
                    </li>
                    <li class="int-comp">
                        <div class=" undefined cf">
                            <input type="checkbox" @click="setSoftwareIntegration('pardot')" id="pardot"
                                   :value="{addonsName:'Pardot'}"
                                   v-model="$parent.data.order.addOns"
                            >
                            <label for="pardot">Pardot</label>
                        </div>
                    </li>
                    <li class="int-comp">
                        <div class=" undefined cf">
                            <input type="checkbox" @click="setSoftwareIntegration('mailchimp')" id="mailchimp_signup"
                                   :value="{addonsName:'Mailchimp Signup Form'}"
                                   v-model="$parent.data.order.addOns"
                            >
                            <label for="mailchimp_signup">Mailchimp Signup Form</label>
                        </div>
                    </li>
                    <li class="int-comp">
                        <div class=" undefined cf">
                            <input type="checkbox" @click="setSoftwareIntegration('leadpages')" id="leadpages"
                                   :value="{addonsName:'Leadpages'}"
                                   v-model="$parent.data.order.addOns"
                            >
                            <label for="leadpages">Leadpages</label>
                        </div>
                    </li>
                    <li class="int-comp last">
                        <div class=" undefined cf">
                            <input type="checkbox" @click="setSoftwareIntegration('instapage')" id="instapage"
                                   :value="{addonsName:'Instapage'}"
                                   v-model="$parent.data.order.addOns"
                            >
                            <label for="instapage">Instapage</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="brief-section-text">
                <p>Choosing any integration template would add up atleast 24 hours further in delivery time. </p>
                <div class="integration-msg">
                    <p id="SI1"     :class="messages.marketo ?      'active':'hide'">If you can provide <strong>Marketo</strong> login credentials than we will also setup html within your account. </p>
                    <p id="SI2"     :class="messages.hubspot ?      'active':'hide'">Kindly attach <strong>Hubspot</strong> login credentials to setup template within your account. </p>
                    <p id="SI3"     :class="messages.unbounce ?     'active':'hide'">Kindly attach <strong>Unbounce</strong> login credentials to setup template within your account or you can also send invite to our developer id "lp@emailmonks.net".</p>
                    <p id="SI4"     :class="messages.pardot ?       'active':'hide'">If you can provide <strong>Pardot</strong> login credentials to setup template within your account that would be great, we can test it there or else we will provide you the HTML files editable in Pardot once you upload there. Integrated form need to be supplied to us in advance if there is any form in landing page.</p>
                    <p id="SI11"    :class="messages.leadpages ?    'active':'hide'">Kindly attach <strong>Leadpages</strong> login credentials to setup template within your account or you can also send invite to our developer id "lp@emailmonks.net".</p>
                    <p id="SI13"    :class="messages.instapage ?    'active':'hide'">Kindly attach <strong>Instapage</strong> login credentials to setup template within your account or you can also send invite to our developer id "lp@emailmonks.net".</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingPage",
        data(){
            return{
                messages:[{marketo: false}, {hubspot: false}, {unbounce: false}, {pardot: false}, {leadpages: false}, {instapage: false}]
            }
        },
        methods:{
            setSoftwareIntegration(){
                this.$parent.data.order.softwareIntegration
                    = {integratName:'yes_ntegration','price': 79,'time': 24}
            }
        }

    }
</script>

<style scoped>

</style>
