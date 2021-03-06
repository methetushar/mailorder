<template>
<div class="">
    <div class="section-title cf">
        <div class="section-titlein"><span>1</span>Provide your details</div>
    </div>
    <div class="section-box basic cf">
        <div class="input-box">
            <input type="text" name="customer_name" v-model="$parent.data.customer.customer_name" placeholder="Your Name*">
            <div class="error-box name"></div>
        </div>
        <div class="input-box">
            <input type="text" name="email" v-model="$parent.data.customer.email" placeholder="Email Address*">
            <div class="error-box emailaddress"></div>
        </div>
        <div class="input-box last">
            <input type="text" name="phone" v-model="$parent.data.customer.phone" placeholder="Phone">
            <div class="error-box phoneno"></div>
        </div>
    </div>

    <div class="section-title cf">
        <div class="section-titlein"><span>2</span>Project Name/Reference Name
            <i class="sm-text">(This name will be referenced in your invoice)</i>
        </div>
    </div>
    <div class="section-box basic cf">
        <div class="input-box-long">
            <input type="text" name="projectname" v-model="$parent.data.order.project_name"
                   placeholder="Project Name">
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "VisitorDetails"
    }
</script>

<style scoped>

</style>
