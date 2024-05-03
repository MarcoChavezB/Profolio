<template>
    <section class="center">
        <div class="intra-layout">
            <div class="divider" />
            <div class="contenido h-full w-full grid">
                <div class="title ">
                    <p>About my experience</p>
                </div>
                <div class="cont flex flex-col">
                    <div class="text mb-5 w-2/3 flex flex-col gap-2 justify-center">
                        <h2 class="text-4xl font-extrabold dark:text-white">2022: Continuously Expanding My Skill Set in <span class="underline">Software Development</span> </h2>
                        <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Right now, I'm focused on learning new things and improving my skills in software development. 
                            Although I'm a student, I've had the opportunity to work on different projects where I've 
                            been able to learn a lot.
                        </p>
                    </div>
                    <div class="divider"/>
                    <div class="experience grid">
                        <p>Experience</p>
                        <div class="time">
                            <div class="row">
                                <p>VetCachorros</p>
                                <p>2022-Apr</p>
                                <p>Full-Stack developer</p>
                            </div>
                            <div class="divider"/>
                            <div class="row">
                                <p>Necklace</p>
                                <p>2023-Sept</p>
                                <p>Front-End developer</p>
                            </div>
                            <div class="divider"/>
                            <div class="row">
                                <p>StarCabo</p>
                                <p>2023-Nov</p>
                                <p>Full-Stack developer</p>
                            </div>
                            <div class="divider"/>
                            <div class="row">
                                <p>Vex-Robotics</p>
                                <p>2024-Nov</p>
                                <p>Data analyst</p>
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
