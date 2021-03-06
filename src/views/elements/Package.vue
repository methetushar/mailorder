<template>
    <div class="">
        <div class="section-title helpbox cf">
            <div class="section-titlein">
                <span>3</span>Choose Your Package <i class="sm-text">(You can add multiple jobs to your cart
                – One at a time)</i>
            </div>
            <div class="section-tip">
                <a class="popup-tooltip tooltip-trigger i-pop-bg" @click="$parent.showModal = true"></a>
            </div>
            <modal v-if="$parent.showModal" @close="$parent.showModal = false">
                <Modal title="" body=""/>
            </modal>
        </div>
        <div class="section-box helpbox cf">
            <label for="email_newsletter">
                <input type="radio" class="d-none" id="email_newsletter" name="service"
                       v-model="$parent.data.order.service" value="email-newsletter">
                <div class="service-box " :class="$parent.data.order.service === 'email-newsletter' ? 'active':'' ">
                    <div class="select-arrow">&nbsp;</div>
                    <div class="ser-title">Emails | Newsletters</div>
                    <div class="arrow order-tab-arrow">&nbsp;</div>
                </div>
            </label>

            <label for="landing_pages">
                <input type="radio" class="d-none" id="landing_pages" name="service"
                       v-model="$parent.data.order.service" value="landing-pages">
                <div class="service-box last"
                     :class="$parent.data.order.service === 'landing-pages' ? 'active':'' ">
                    <div class="select-arrow">&nbsp;</div>
                    <div class="ser-title">Landing Pages</div>
                    <div class="arrow order-tab-arrow">&nbsp;</div>
                </div>
            </label>

            <div class="clear"></div>
            <div class="service-inner cf" v-if="$parent.data.order.service">
                <div class="innerbox " :class="$parent.data.order.package === 'only-coding' ? 'active':''">
                    <label for="only_coding">
                        <div class="select-arrow">&nbsp;</div>
                        <div class="ser-title">Only Coding</div>
                        <div class="ser-text">Let the Monks hand-code your designs to HTML.</div>
                        <input class="d-none" type="radio" name="package" id="only_coding"
                               v-model="$parent.data.order.package" value="only-coding">
                    </label>
                </div>
                <div class="innerbox" :class="$parent.data.order.package === 'design-coding' ? 'active':''">
                    <label for="design_coding">
                        <div class="select-arrow">&nbsp;</div>
                        <div class="ser-title">Design <span>+</span> Coding</div>
                        <div class="ser-text">Let the Monks create eye-catching designs and hand-code them
                            for you.
                        </div>
                        <input class="d-none" type="radio" name="package" id="design_coding"
                               v-model="$parent.data.order.package" :value="'design-coding'">
                    </label>
                </div>
                <div class="or-separator"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Package"
    }
</script>

<style scoped>

</style>
