<template>
    <section class="w-full flex justify-center items-center">
        <div class="cont intra-layout grid" style="grid-template-columns: 1fr 3fr;">
            <div class="prof flex justify-center items-center">
                <div class="intra-layout flex justify-center flex-col">
                    <p>Web Developer</p>
                    <p class="sub-text">from mexico</p>
                </div>
            </div>
            <div class="about center">
                <div class="intra-layout  flex justify-end flex-col">
                    <div class="text" style="width: 53%">
                        <p class="sub-text">Nice to meet you!</p>
                        <div class="flex gap-5">
                            <p class="flex items-center">I'm</p>
                            <span class="avatar"/>
                            <p class="flex items-center">Marco. A pasionate</p>
                        </div>
                        <p>Software developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section{
    height: 60vh;
}
.cont{
    border-bottom: 1px solid #191719;
}
.about p{
    font-size: 3rem;
}
.avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 0.5rem;
    background-image: url('../../assets/img/ProfesionalProfile.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>