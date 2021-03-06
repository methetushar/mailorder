<template>
    <div class="white-bg cf">
        <div class="main cf">
            <form v-on:submit.prevent="orderSubmit" id="orderform" class="order-form"  enctype="multipart/form-data">
                <!--leftside-->
                <div class="order-left">
                    <VisitorDetails />
                    <Package />
                    <Layout />
                    <EmailNewsLatter v-if="data.order.service === 'email-newsletter' " />
                    <LandingPage v-else />
                    <BriefBox />
                </div>
                <!--leftside-->
                <!--rightside-->
                <div id="cart_boxc" class="order-right" data-sticky_column style="">
                    <EstimateCard />
                    <!--order submit box-->
                    <SubmitBox/>
                    <Button type="primary" @click="renderFunc">Open notice</Button>
                </div>
                <!--rightside-->
            </form>
        </div>
        <pre>{{ data }}</pre>
    </div>
</template>

<script>
    import moment from "moment"
    import VisitorDetails from "./elements/VisitorDetails";
    import EstimateCard from "./elements/EstimateCard";
    import SubmitBox from "./elements/SubmitBox";
    import Package from "./elements/Package";
    import EmailNewsLatter from "./service/EmailNewsLatter";
    import LandingPage from "./service/LandingPage";
    import BriefBox from "./elements/BriefBox";
    export default {
        name: "Form",
        components: {BriefBox, LandingPage, EmailNewsLatter, Package, SubmitBox, EstimateCard, VisitorDetails},
        data() {
            return {
                loader: false,
                showModal: false,
                data: {
                    customer: {},
                    order: {
                        service: 'email-newsletter',
                        package: "only-coding",
                        servicePrice: 49,
                        no_of_service: 1,
                        deliveryInfo: {deliveryName: 'seventytwo', time: 72, price: 49},
                        DeliveryTime: '',
                        layout: {price: 49, time: 2, layoutName: 'responsive'},
                        addOns: [],
                        softwareIntegration: {integratName: "no_ntegration", price: 0, time: 0,},
                        emailFrameworks: {frameworkName: "MJML", price: 79, time: 24,},
                        emailRendering: {RenderingName: "EmailonAcid", price: 0, time: 0,}
                    },
                    jobBrief: {},
                    image: {},
                    subTotal: null,
                    estimateDate: '',
                },
                discountSet: {
                    couponCode: 'EMAIL2021',
                    percentage: 20,
                    couponActiveTime: 24,
                    couponExpireTime: null
                },
                discountGet: {
                    msg: {error: '', success: ''}
                }
            }
        },
        methods: {
            setDeliveryDate() {
                let amount = 'hours';
                if (this.data.order.package === 'design-coding') {
                    amount = 'days'
                } else {
                    amount = 'hours'
                }
                let newDate = moment().add(this.data.order.deliveryInfo.time, amount).format('MMMM Do YYYY, h:mm:ss A');
                this.data.order.DeliveryTime = newDate
            },
            servicePrice() {
                if (this.data.order.package === 'design-coding') {
                    this.data.order.servicePrice = 99
                } else {
                    this.data.order.servicePrice = 49
                }
            },
            timeCalculation() {
                let calculatePrice = (this.data.order.servicePrice +
                    this.data.order.deliveryInfo.price +
                    this.data.order.layout.price +
                    this.data.order.softwareIntegration.price +
                    this.data.order.emailFrameworks.price +
                    this.data.order.emailRendering.price) * this.data.order.no_of_service;
                this.data.order.addOns.forEach(data => {
                    calculatePrice += data.price
                });
                this.data.subTotal = calculatePrice
            },
            priceCalculation() {
                let deliverytime = this.data.order.deliveryInfo.time;
                if (this.data.order.package === 'design-coding') {
                    deliverytime = deliverytime * 24
                }
                let calculateTime = (
                    deliverytime +
                    this.data.order.softwareIntegration.time +
                    this.data.order.emailFrameworks.time +
                    this.data.order.emailRendering.time) * this.data.order.no_of_service
                this.data.order.addOns.forEach(data => {
                    calculateTime += data.time
                });
                let totaldate = moment().add(calculateTime, "hours").format('MMMM Do YYYY, h:mm:ss A');
                this.data.estimateDate = totaldate;

            },
            setCouponExpireTime() {
                let couponActive = moment().add(this.discountSet.couponActiveTime, "hours").format('MMMM Do YYYY, h:mm:ss A');
                this.discountSet.couponExpireTime = couponActive;
            },
            discount() {
                let currentTime = moment().format('MMMM Do YYYY, h:mm:ss A');
                if (this.discountSet.couponExpireTime > currentTime) {
                    if (this.discountGet.inputCouponCode === this.discountSet.couponCode) {
                        this.data.subTotal = ((this.data.subTotal / 100) * this.discountSet.percentage).toFixed(1)
                        this.discountGet.msg.success = 'Discount is successfully added !';
                    } else {
                        this.discountGet.msg.error = 'Your Coupon not match !'
                    }
                } else {
                    this.discountGet.msg.error = 'This Coupon expired !'
                }
            },
            onFileChange() {
                var form = document.getElementById("orderform");

                var formData = new FormData(form);
                formData.append('image',this.data.image)
                // let check = data.append('photo', this.$parent.data.jobBrief.attachFile);
                // this.data.jobBrief.attachFile = file.name
                // this.imagePreview = URL.createObjectURL(file);
            },


            async orderSubmit() {
                // await axios.post('order-submit', this.data)
                //     .then(res => {
                //         console.log(res)
                //     }).catch(error => {
                //         console.log(error.response)
                //     })
            },
        },
        updated() {
            // this.loader = true
            // setTimeout(function () {
            //     this.loader = false
            // },3000)

            this.setDeliveryDate()
            this.servicePrice()
            this.timeCalculation()
            this.priceCalculation()
            this.setCouponExpireTime()
        },
        mounted() {
            this.setDeliveryDate()
            this.servicePrice()
            this.timeCalculation()
            this.priceCalculation()
            this.setCouponExpireTime()
        }
    }
</script>

<style scoped>
    .text-capitalize {
        text-transform: capitalize;
    }
</style>