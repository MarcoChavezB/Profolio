<template>
    <section>
        <div class="grid h-full gap-2" style="grid-template-columns: 4fr 1fr">
            <div class="grid gap-2" style="grid-template-rows: 5fr 2fr">
                <div class="img cont"></div>
                <div class="email cont center">
                        <div class="intra-layout flex flex-col justify-center">
                            <h2 class="text-4xl font-extrabold dark:text-white">Contact with my email.</h2>
                            <h2 class="email-text text-4xl font-extrabold dark:text-white">marco1102004@gmail.com</h2>
                        </div>
                </div>
            </div>
            <aside class="grid gap-2">
                <div class="cont">
                    <div class="ico linkedin"></div>
                    <div class="name">
                        <p class="text-left rtl:text-right text-gray-500 dark:text-gray-400" style="background-clip: text; -webkit-background-clip: text; color: transparent; background-image: linear-gradient(to right, #ffff, #0288d1);">Linkedin</p>
                    </div>
                </div>
                <div class="cont">
                    <div class="ico github"></div>
                    <div class="name">
                            <p class="text-left rtl:text-right text-gray-500 dark:text-gray-400" style="background-clip: text; -webkit-background-clip: text; color: transparent; background-image: linear-gradient(to right, #ffff, #0000);">Github</p>
                    </div>
                </div>
                <div class="cont">
                    <div class="ico dribble"></div>
                    <div class="name">
                            <p class="text-left rtl:text-right text-gray-500 dark:text-gray-400" style="background-clip: text; -webkit-background-clip: text; color: transparent; background-image: linear-gradient(to right, #ffff, #ed3675);">Dribble</p>
                    </div>
                </div>
                <div class="cont">
                    <div class="ico facebook"></div>
                    <div class="name">
                            <p class="text-left rtl:text-right text-gray-500 dark:text-gray-400" style="background-clip: text; -webkit-background-clip: text; color: transparent; background-image: linear-gradient(to right, #ffff, #3f51b5);">Facebook</p>
                    </div>
                </div>
                <div class="cont">
                    <div class="ico instagram"></div>
                    <div class="name">
                            <p class="text-left rtl:text-right text-gray-500 dark:text-gray-400" style="background-clip: text; -webkit-background-clip: text; color: transparent; background-image: linear-gradient(to right, #5761c3, #dc4283);">INSTAGRAM</p>
                    </div>
                </div>
            </aside>
        </div>
    </section>
</template>
<style scoped>
.cont{  
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 20px;
    background-color: #171717;
}
.cont .name{
    font-size: 1.2rem;
}
.cont .name, .ico{
    transition: transform 0.3s;
}

.cont:hover .name{
    transform: translateY(-10px);
}
.cont:hover .ico{
    transform: translateY(-10px);
}

section {
    height: 100vh;
}
.img{
    background-image: url('../../assets/img/links.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
}
.ico{
    width: 40px;
    height: 40px;
}
.name {
    font-weight: 700;
}
.instagram{
    background-image: url('../../assets/img/icons/instagram.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.linkedin{
    background-image: url('../../assets/img/icons/linkedin.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.github{
    background-image: url('../../assets/img/icons/github.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.dribble{
    background-image: url('../../assets/img/icons/dribble.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.facebook{
    background-image: url('../../assets/img/icons/facebook.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>