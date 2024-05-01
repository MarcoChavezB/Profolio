<template>
    <main>
        <headerComp/>
        <presentationComp/>
        <worksComp/>
        <experience/>
        <personal/>
        <div style="height: 50vh"></div>
    </main>
    <alert/>
</template>

<script setup>
import headerComp from '../components/Sections/header.vue'
import presentationComp from '../components/Sections/presentation.vue'
import worksComp from '../components/Sections/works.vue'
import experience from '../components/Sections/experience.vue'
import personal from '../components/Sections/personal.vue'
import alert from '../components/modal/alert.vue'
</script>