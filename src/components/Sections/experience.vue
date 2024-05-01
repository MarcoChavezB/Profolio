<template>
    <section class="center">
        <div class="intra-layout">
            <div class="divider" />
            <div class="contenido h-full w-full grid">
                <div class="title ">
                    <p>About me</p>
                </div>
                <div class="cont flex flex-col">
                    <div class="text mb-5 w-1/2 flex flex-col gap-2 justify-center">
                        <h2 class="text-4xl font-extrabold dark:text-white">Payments tool for companies</h2>
                        <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Deliver great service
                            experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical
                            development work, eliminate toil, and deploy changes with ease.</p>
                    </div>
                    <div class="divider"/>
                    <div class="experience grid">
                        <p>Experience</p>
                        <div class="time">
                            <div class="row">
                                <p>UTT</p>
                                <p>2022-Nov</p>
                                <p>Front-end developer</p>
                            </div>
                            <div class="divider"/>
                            <div class="row">
                                <p>StarCabo</p>
                                <p>2022-Nov</p>
                                <p>Full-Stack developer</p>
                            </div>
                            <div class="divider"/>
                            <div class="row">
                                <p>StarCabo</p>
                                <p>2022-Nov</p>
                                <p>Full-Stack developer</p>
                            </div>
                            <div class="divider"/>
                            <div class="row">
                                <p>StarCabo</p>
                                <p>2022-Nov</p>
                                <p>Full-Stack developer</p>
                            </div>
                            <div class="divider"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 80vh;
}
.experience{
    grid-template-columns: 2fr 4fr;
}
.contenido {
    grid-template-columns: 1fr 3fr;
}
.row{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
div.row p:nth-last-of-type(-n+2) {
    text-align: right;
    color: #abaaab;
}
</style>
