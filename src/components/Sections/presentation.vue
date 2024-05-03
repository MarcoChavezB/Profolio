<template>
    <section class="w-full flex justify-center items-center">
        <div class="cont intra-layout grid">
            <div class="prof flex justify-center items-center">
                <div class="intra-layout flex justify-center flex-col">
                    <p>Developer</p>
                    <p class="sub-text">From Mexico</p>
                </div>
            </div>
            <div class="about center">
                <div class="intra-layout flex justify-end flex-col">
                    <div class="text">
                        <p class="sub-text">Nice to meet you!</p>
                        <div class="flex gap-5">
                            <p class="flex items-center ">I'm</p>
                            <span class="flex avatar"/>
                            <p class="flex justify-center items-center">Marco. I'm pasionate</p>
                        </div>
                        <p>Software Developer.</p>
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
    grid-template-columns: 1fr 3fr;
}

.text{
    width: 63%
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


@media screen and (max-width: 768px){
    section{
        height: 50vh;
    }
    .cont{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 3fr;
    }
    .about p{
        font-size: 2.5rem;
    }
    .text{
        width: 100%;
    }
    .prof .intra-layout
    {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .text p{
        text-align: center;
        font-size: 2rem;
    }
    .avatar{
        width: 80px;
        height: 80px;
    }
    .text .flex{
        gap: 0;
    }
}
</style>