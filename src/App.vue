<template>
    <div id="app">
        <div class="frontend">
            <Header/>
            <div class="main-body">
                <router-view></router-view>
            </div>
            <Footer/>
        </div>
    </div>
</template>
<script>
    import Footer from "./components/elements/Footer";
    import Header from "./components/elements/Header";

    export default {
        components: {Header, Footer}
    }
</script>


<style>
</style>