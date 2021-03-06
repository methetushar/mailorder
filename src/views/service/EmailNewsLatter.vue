<template>
    <div class="element">
        <!--step 5-->
        <div class="del-time email show">
            <div class="section-title time email cf">
                <div class="section-titlein"><span>5</span>Choose Price &amp; Delivery Time</div>
                <div class="currancy_message">(Prices are in USD)</div>
                <div class="section-right cf">
                    <div class="work-line" style="padding-left: 30px;">We work <span>24<i>/</i> 5</span></div>
                </div>
            </div>
            <div class="section-box time-box email desktop cf">
                <div id="Email-Only-Coding-timesheet" class="show">
                    <div class="timesheet" v-if="$parent.data.order.package === 'only-coding' ">
                        <div class="hours-range cf">
                            <ul>
                                <li id="only_coding_hours_1" class="first">72 hrs</li>
                                <li id="only_coding_hours_2">48 hrs</li>
                                <li id="only_coding_hours_3">24 hrs</li>
                                <li id="only_coding_hours_4">12 hrs</li>
                                <li id="only_coding_hours_5" class="last">8 hrs</li>
                            </ul>
                        </div>
                        <div class="time-range cf">
                            <ul>
                                <li class="first"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'seventytwo' ? 'active':'' ">
                                    <input type="radio" id="only_coding_seventytwo" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'seventytwo',time:72,price:49}">
                                    <label for="only_coding_seventytwo">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                                <li id="2"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'fourtyeight' ? 'active':'' ">
                                    <input type="radio" id="only_coding_fourtyeight" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'fourtyeight',time:48,price:59}">
                                    <label for="only_coding_fourtyeight">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                                <li id="3"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'twoentyfour' ? 'active':'' ">
                                    <input type="radio" id="only_coding_twoentyfour" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'twoentyfour',time:24,price:79}">
                                    <label for="only_coding_twoentyfour">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                                <li id="4"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'twelve' ? 'active':'' ">
                                    <input type="radio" id="only_coding_twelve" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'twelve',time:12,price:99}">
                                    <label for="only_coding_twelve">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                                <li id="5" class="last"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'eight' ? 'active':'' ">
                                    <input type="radio" id="only_coding_eight" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'eight',time:8,price:119}">
                                    <label for="only_coding_eight">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="price-range cf">
                            <ul>
                                <li id="only_coding_price_1" class="first">$ 49</li>
                                <li id="only_coding_price_2">$ 59</li>
                                <li id="only_coding_price_3">$ 79</li>
                                <li id="only_coding_price_4">$ 99</li>
                                <li id="only_coding_price_5" class="last">$ 119</li>
                            </ul>
                        </div>
                    </div>
                    <div class="timesheet" v-if="$parent.data.order.package === 'design-coding' ">
                        <div class="hours-range cf">
                            <ul>
                                <li id="hours_1" class="first">6 hrs</li>
                                <li id="hours_2">5 days</li>
                                <li id="hours_3">4 days</li>
                                <li id="hours_4">3 days</li>
                                <li id="hours_5" class="last">2 days</li>
                            </ul>
                        </div>
                        <div class="time-range cf">
                            <ul>
                                <li id="1" class="first"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'seventytwo' ? 'active':'' ">
                                    <input type="radio" id="seventytwo" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'seventytwo',time:6,price:149}">
                                    <label for="seventytwo">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                                <li id="2"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'fourtyeight' ? 'active':'' ">
                                    <input type="radio" id="fourtyeight" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'fourtyeight',time:5,price:179}">
                                    <label for="fourtyeight">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                                <li id="3"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'twoentyfour' ? 'active':'' ">
                                    <input type="radio" id="twoentyfour" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'twoentyfour',time:4,price:229}">
                                    <label for="twoentyfour">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                                <li id="4"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'twelve' ? 'active':'' ">
                                    <input type="radio" id="twelve" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'twelve',time:3,price:269}">
                                    <label for="twelve">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                                <li id="5" class="last"
                                    :class="$parent.data.order.deliveryInfo.deliveryName === 'eight' ? 'active':'' ">
                                    <input type="radio" id="eight" class="d-none" name="delivery"
                                           v-model="$parent.data.order.deliveryInfo"
                                           :value="{deliveryName:'eight',time:2,price:299}">
                                    <label for="eight">
                                        <div>&nbsp;</div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="price-range cf">
                            <ul>
                                <li id="price_1" class="first">$ 149</li>
                                <li id="price_2">$ 179</li>
                                <li id="price_3">$ 229</li>
                                <li id="price_4">$ 269</li>
                                <li id="price_5" class="last">$ 299</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="estimateline cf">
                    <div class="line-left">Estimated delivery time: <span id="act_time">{{ $parent.data.order.DeliveryTime }}</span>
                    </div>
                    <div class="zone-selector">&nbsp;&nbsp;GMT&nbsp;&nbsp;</div>
                </div>
            </div>
            <!--delivery time for email in mobile-->
            <div class="section-box time-box email mobile cf">
                <div id="" class="time-dropdown show">
                    <select name="sel_time1" id="sel_time1" sb="91328155" style="display: none;">
                        <option time="72" time-slug="hrs" price="49" value="1">72 hrs - $49</option>
                        <option time="48" time-slug="hrs" price="59" value="2">48 hrs - $59</option>
                        <option time="24" time-slug="hrs" price="79" value="3">24 hrs - $79</option>
                        <option time="12" time-slug="hrs" price="99" value="4">12 hrs - $99</option>
                        <option time="8" time-slug="hrs" price="119" value="5">8 hrs - $119</option>
                    </select>
                    <div id="sbHolder_91328155" class="sbHolder" style="width: auto;">
                        <div id="sbToggle_91328155" href="#" class="sbToggle" tabindex="-1"></div>
                        <div id="sbSelector_91328155" href="#" class="sbSelector" tabindex="-1">72 hrs - $49</div>
                        <ul id="sbOptions_91328155" class="sbOptions" style="display: none; width: 100%;">
                            <li><a href="1" rel="1" class="sbFocus">72 hrs - $49</a></li>
                            <li><a href="2" rel="2">48 hrs - $59</a></li>
                            <li><a href="3" rel="3">24 hrs - $79</a></li>
                            <li><a href="4" rel="4">12 hrs - $99</a></li>
                            <li><a href="5" rel="5">8 hrs - $119</a></li>
                        </ul>
                    </div>
                </div>
                <div class="time-dropdown hide" id="Email-Design-Coding-timesheet">
                    <select name="sel_time2" id="sel_time2" sb="56059093" style="display: none;">
                        <option time="6" time-slug="days" price="149" value="1">6 days - $149</option>
                        <option time="5" time-slug="days" price="179" value="2">5 days - $179</option>
                        <option time="4" time-slug="days" price="229" value="3">4 days - $229</option>
                        <option time="3" time-slug="days" price="269" value="4">3 days - $269</option>
                        <option time="2" time-slug="days" price="299" value="5">2 days - $299</option>
                    </select>
                    <div id="sbHolder_56059093" class="sbHolder" style="width: auto;">
                        <div id="sbToggle_56059093" href="#" class="sbToggle" tabindex="-1"></div>
                        <div id="sbSelector_56059093" href="#" class="sbSelector" tabindex="-1">6 days - $149</div>
                        <ul id="sbOptions_56059093" class="sbOptions" style="display: none; width: 100%;">
                            <li><a href="1" rel="1" class="sbFocus">6 days - $149</a></li>
                            <li><a href="2" rel="2">5 days - $179</a></li>
                            <li><a href="3" rel="3">4 days - $229</a></li>
                            <li><a href="4" rel="4">3 days - $269</a></li>
                            <li><a href="5" rel="5">2 days - $299</a></li>
                        </ul>
                    </div>
                </div>
                <div class="estimatelin cf">
                    <div class="line-left">Estimated delivery time: <span id="act_time1">10th February, 9:16 PM</span>
                    </div>
                    <div class="zone-selector">&nbsp;&nbsp;GMT&nbsp;&nbsp;</div>
                </div>
            </div>
        </div>
        <!--step7-->
        <div id="onlyCoding-Addons" class="show">
            <div class="section-title addon cf">
                <div class="section-titlein"><span>7</span>Add-ons</div>
                <div class="currancy_message">(Prices are in USD)</div>
            </div>
            <div class="section-box addon cf">
                <div class="layout-box addon-position " v-for="(data,index) in addOnsData" :key="index"
                     :id=" 'checked' + (index + 1) ">
                    <div class="section-tip-addon">
                        <a href="" class="popup-tooltip tooltip-trigger i-pop-bg addon"></a>
                    </div>
                    <input :key="index" class="d-none" type="checkbox" :name="data.title" :id="data.title"
                           :value="{addonsName:data.title,price:setAddOnPrice(data.price),time:setAddOnTime(data.time)}"
                           v-model="$parent.data.order.addOns" @change="isChecked($event,index + 1)">
                    <label :for="data.title">
                        <div class="boxin text-capitalize"> {{ replaceText(data.title) }} - $<span class="price">{{ setAddOnPrice(data.price) }}</span>
                        </div>
                    </label>
                </div>
            </div>
        </div>

        <!--step8-->
        <div id="Email_Soft_Integration" class="show">
            <div class="section-title integration cf">
                <div class="section-titlein"><span>8</span>Email Software Integration</div>
                <div class="currancy_message">(Prices are in USD)</div>
                <div class="section-tip"><a href="" class="popup-tooltip tooltip-trigger i-pop-bg"></a></div>
            </div>

            <div class="section-box basic-advnc-redio cf">
                <div class="basic-advnc-redio cf">
                    <div class="layout-box" :class="$parent.data.order.softwareIntegration.integratName === 'no_ntegration' ?'active':''">
                        <label for="no_ntegration">
                            <div class="boxin" >No Integration</div>
                            <input type="radio" class="d-none" name="softwareintegration"
                                   id="no_ntegration" :value="{integratName:'no_ntegration' ,price:0,time:0,}"
                                    v-model="$parent.data.order.softwareIntegration">
                        </label>
                    </div>
                    <div class="layout-box basic" :class="$parent.data.order.softwareIntegration.integratName === 'basic' ?'active':''">
                        <label for="basic">
                            <div class="boxin">Basic</div>
                            <input type="radio" class="d-none" name="softwareintegration"
                                   id="basic" :value="{integratName:'basic' ,price:19,time:2,}"
                                   v-model="$parent.data.order.softwareIntegration">
                        </label>
                    </div>
                    <div class="layout-box advance last" :class="$parent.data.order.softwareIntegration.integratName === 'advanced' ?'active':''">
                        <label for="advanced">
                            <div class="boxin">Advanced</div>
                            <input type="radio" class="d-none" name="softwareintegration"
                                   id="advanced" :value="{integratName:'advanced' ,price:49,time:2,}"
                                   v-model="$parent.data.order.softwareIntegration">
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!--step9-->
        <div class="section-title frameworkbox cf show">
            <div class="section-titlein"><span id="layout-sr1">9</span>Email Frameworks:</div>
            <div class="section-tip"><a href="" class="popup-tooltip tooltip-trigger i-pop-bg"></a></div>
            <div class="currancy_message">(Prices are in USD)</div>
        </div>
        <div id="email-framework" class="show">
            <div id="email-framework-detail" class="show">
                <div class="section-box frameworkbox cf">
                    <div class="mainl">
                        <div class="layout-box MjMl" :class="$parent.data.order.emailFrameworks.frameworkName === 'MJML' ?'active':''">
                            <label for="MJML">
                                <div class="boxin fixed">MJML - $<span class="price">79</span></div>
                                <input  class="d-none" type="radio" name="emailframework" id="MJML" title="MJML"
                                       :value="{frameworkName:'MJML',price:79,time:24}"
                                       v-model="$parent.data.order.emailFrameworks">
                            </label>
                        </div>
                        <div class="layout-box last ZurB" :class="$parent.data.order.emailFrameworks.frameworkName === 'Zurb' ?'active':''">
                            <label for="Zurb">
                                <div class="boxin scalable">Zurb Foundation - $<span class="price">79</span></div>
                                <input class="d-none" type="radio" name="emailframework" id="Zurb" title="Zurb"
                                       :value="{frameworkName:'Zurb',price:79,time:24}"
                                       v-model="$parent.data.order.emailFrameworks">
                            </label>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="brief-section-text">
                        <p class="framework_msg_show" style="display: none;"></p>
                    </div>
                </div>
            </div>
        </div>

        <!--step10-->
        <div class="section-title reportbox cf show">
            <div class="section-titlein"><span id="layout-sr1">10</span>Email Rendering Test Report:</div>
            <div class="currancy_message">(Prices are in USD)</div>
            <div id="select-layout-box" class="tooltip-popup-box mfp-hide white-popup-block popup zoom-anim-dialog">
            </div>
        </div>
        <div id="email-test-report" class="show">
            <div id="email-test-report-detail" class="show">
                <div class="section-box reportbox cf">
                    <div class="mainl">
                        <div class="layout-box" :class="$parent.data.order.emailRendering.RenderingName === 'Litmus' ?'active':''">
                            <label for="Litmus">
                                <div class="boxin fixed">Litmus - $<span class="price">10</span></div>
                                <input class="d-none" type="radio" name="emailRendering" id="Litmus" title="Litmus"
                                       :value="{RenderingName:'Litmus',price:10,time:10}"
                                       v-model="$parent.data.order.emailRendering">
                            </label>
                        </div>
                        <div class="layout-box last" :class="$parent.data.order.emailRendering.RenderingName === 'EmailonAcid' ?'active':''">
                            <label for="EmailonAcid">
                                <div class="boxin scalable">EmailonAcid - $<span class="price">0</span></div>
                                <input class="d-none" type="radio" name="emailRendering" id="EmailonAcid" title="EmailonAcid"
                                       :value="{RenderingName:'EmailonAcid',price:0,time:0}"
                                       v-model="$parent.data.order.emailRendering">
                            </label>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EmailNewsLatter",
        data() {
            return {
                addOnsData: [
                    {title: 'gif_email', time: 2, price: 79},
                    {title: 'retina_email', time: 2, price: 29},
                    {title: 'video_email', time: 2, price: 29},
                    {title: 'dropdown_nav_email', time: 2, price: 49},
                    {title: 'according_email', time: 2, price: 49},
                    {title: 'flip_email', time: 2, price: 49},
                    {title: 'scratch_email', time: 2, price: 29},
                    {title: 'outlook_120_dpl', time: 2, price: 29},
                    {title: 'slider_tabs', time: 2, price: 49},
                    {title: 'countdown', time: 2, price: 149},
                    {title: 'cinemagraph', time: 2, price: 59},
                    {title: 'rollover_efect', time: 2, price: 19},
                    {title: 'accessibility', time: 2, price: 59},
                    {title: 'personalised_image', time: 2, price: 149},
                    {title: 'gmail_annotation', time: 2, price: 49},
                    {title: 'apng', time: 2, price: 79},
                    {title: 'dark_mode', time: 2, price: 29},
                ],
                checkedData:[]
            }

        },
        methods: {
            replaceText(title) {
                let replaced
                if (title != null){
                    replaced = title.replace('_', ' ')
                    return replaced
                }
            },
            // isChecked(event,id) {
            //     // (document).ready(function () {
            //     //     if (event.target.checked){
            //     //         $('#checked'+id).addClass('active')
            //     //     }else{
            //     //         $('#checked'+id).removeClass('active')
            //     //     }
            //     // })
            // },
            setAddOnPrice(price){
                let currntPrice
                this.$parent.data.order.package === 'design-coding' ? currntPrice = price + 10 : currntPrice = price
                return currntPrice
            },
            setAddOnTime(time){
                let currntTime
                this.$parent.data.order.package === 'design-coding' ? currntTime = time + 2 : currntTime = time
                return currntTime
            }
        },
        mounted() {
        },
        updated() {
        }

    }
</script>

<style>
    .text-capitalize {
        text-transform: capitalize;
    }
</style>
