<template>
    <!--spte6-->
    <div class="">
        <div class="section-title layout cf">
            <div class="section-titlein"><span id="layout-sr">6</span>Select Layout</div>
            <div class="currancy_message">(Prices are in USD)</div>
        </div>
        <div id="email-layouts" class="show">
            <div id="email-designcoding-layout" class="show">
                <div class="section-box layoutbox cf">
                    <div class="mainl">
                        <div class="layout-box"
                             :class="$parent.data.order.layout.layoutName === 'fixed' ? 'active' :''">
                            <label for="fixed">
                                <div class="boxin fixed">Fixed - $<span class="price">0</span></div>
                                <input type="radio" class="d-none" name="layout" id="fixed"
                                       v-model="$parent.data.order.layout" :value="{price:0,time:0,layoutName:'fixed'}">
                            </label>
                        </div>
                        <div class="layout-box "
                             :class="$parent.data.order.layout.layoutName === 'scalable' ? 'active' :''">
                            <label for="scalable">
                                <div class="boxin scalable">Scalable - $<span class="price">49</span></div>
                                <input type="radio" class="d-none" name="layout" id="scalable"
                                       v-model="$parent.data.order.layout"
                                       :value="{price:49,time:2,layoutName:'scalable'}">
                            </label>
                        </div>
                        <div class="layout-box last"
                             :class="$parent.data.order.layout.layoutName === 'responsive' ? 'active' :''">
                            <label for="responsive">
                                <div class="boxin scalable">Responsive - $<span class="price">49</span></div>
                                <input type="radio" class="d-none" name="layout" id="responsive"
                                       v-model="$parent.data.order.layout"
                                       :value="{price:49,time:2,layoutName:'responsive'}">
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
        name: "Layouts"
    }
</script>

<style scoped>

</style>
