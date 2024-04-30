<template>
    <main>
        <headerComp/>
        <presentationComp/>
        <worksComp/>
    </main>
</template>

<script>
import headerComponent from '../components/Sections/header.vue'
import presentationComponent from '../components/Sections/presentation.vue'
import worksComponent from '../components/Sections/works.vue'
export default {
    components: {
        worksComp: worksComponent,
        presentationComp:presentationComponent,
        headerComp: headerComponent
    }
}
</script>