<template>
    <dialog id="administrative" class="modal">
        <div class="modal-box1 grid">
            <form method="dialog" class="header-modal flex justify-end items-center" style="background-color: #0d0d0d;">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-4">✕</button>
            </form>
            <div class="cont grid">
                <div style="background-color:#000;" class="flex justify-center items-center">
                    <img src="../../../assets/img/Proyects/productosmokup.jpg"
                        alt="">
                </div>
                <div class="flex justify-center items-center">
                    <div class="grid cont-grid" style="height: 90%; width: 90%">
                        <div class="title flex">
                            <h2
                                class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                                Administrative Software</h2>
                            <form method="dialog" class="phone hidden" style="background-color: #0d0d0d;">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-4">✕</button>
                            </form>
                        </div>
                        <div class="description ">
                            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque optio ab
                                voluptates hic illum impedit assumenda, consequatur excepturi tenetur magnam ea
                                enim repellat cupiditate ipsa placeat qui similique aspernatur.
                            </p>
                            <div class="divider"/>
                            <ol class="space-y-3 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white"> websockets comunication
                                    </span>: Real time comunication between two players.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Game history</span>:
                                    Save the game history for the players.
                                </li>
                            </ol>
                        </div>
                        <div class="tecnologies">
                            <div class="flex justify-center gap-2 flex-co w-full">
                                <button class="btn">
                                    Vuejs
                                    <div class="badge">
                                        <img height="30px" width="30px" src="../../../assets/logo.svg" alt="">
                                    </div>
                                </button>
                                <button class="btn">
                                    Lavel
                                    <div class="badge">
                                        <img height="40px" width="40px" src="../../../assets/img/icons/laravel.png" alt="">
                                    </div>
                                </button>
                                <button class="btn">
                                    MySQL
                                    <div class="badge">
                                        <img height="45px" width="45px" src="../../../assets/img/icons/mysql.png" alt="">
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="date flex justify-end">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </dialog>
</template>

<style scoped>
.cont-grid {
    grid-template-rows: 1fr 5fr 1fr;
}

.cont{
    grid-template-columns: 4fr 3fr
}
.modal-box1{
    height: 100%; 
    width: 90%; 
    grid-template-rows: 1fr 10fr;
}
@media screen and (max-width: 768px){
    .cont{
        grid-template-columns: 1fr;
    }
    .modal-box1{
        height: 100%; 
        width: 96%; 
        grid-template-rows: 1fr 10fr;
    }
    .header-modal{
        display: none;
    }
    .phone{
        display: block;
    }
    .tecnologies{
        display: flex;
        align-items: end;
    }
    .tecnologies .flex{
        margin-top: 2rem;
    }
}
</style>