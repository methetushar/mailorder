<template>
    <div class="orderform">
        <HeroSection />
        <Form />
    </div>
</template>

<script>
    import HeroSection from "../components/elements/HeroSection";
    import Form from "./Form";
    export default {
        name: "FormLayout",
        components: {Form, HeroSection}
    }
</script>

<style scoped>

</style>