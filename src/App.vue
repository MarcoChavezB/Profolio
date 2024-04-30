<template>

   <router-view/>
    <navbar/>
</template>

<script>
import navbarVue from "./components/Sections/navbar.vue";
export default {
    components: {
        navbar: navbarVue
    }
}
</script>