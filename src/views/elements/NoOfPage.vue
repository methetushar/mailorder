<template>
    <div class="">
        <div class="section-title no-of-email email-list cf" style="display: block;">
            <div id="noAdaptation">
                <div class="section-titlein"><span>4</span>No. of Emails:</div>
                <div class="number-box">
                    <div class="stepper ">
                        <input type="number" name="no_of_service" min="1" max="20"
                               v-model="$parent.data.order.no_of_service" class="stepper-input">
                        <span class="stepper-arrow up" @click="$parent.data.order.no_of_service +=1">Increase</span>
                        <span class="stepper-arrow down"
                              @click="$parent.data.order.no_of_service > 1 ? $parent.data.order.no_of_service -=1 : false ">Decrease</span>
                    </div>
                </div>
                <div class="num-text">
                    <a id="adaptation" title="I also need adaptations of this email">I also need adaptations of this
                        email &gt;&gt;</a>
                </div>
                <div class="section-tip"><a href="" class="popup-tooltip tooltip-trigger i-pop-bg"></a></div>
            </div>
        </div>
        <div class="section-box no-of-email"></div>
    </div>
</template>

<script>
    export default {
        name: "NoOfpage"
    }
</script>

<style scoped>

</style>
