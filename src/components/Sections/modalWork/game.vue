<template>
    <dialog id="game" class="modal">
        <div class="modal-box1 grid">
            <form method="dialog" class="header-modal flex justify-end items-center" style="background-color: #0d0d0d;">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-4">✕</button>
            </form>
            <div class="cont grid">
                <div style="background-color:#000;" class="flex justify-center items-center">
                    <img src="../../../assets/img/Proyects/battleshipGamemockup.jpg"
                        alt="">
                </div>
                <div class="flex justify-center items-center">
                    <div class="grid cont-grid" style="height: 90%; width: 90%">
                        <div class="title flex">
                            <h2
                                class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                                BattleShip Game Online</h2>
                            <form method="dialog" class="phone hidden" style="background-color: #0d0d0d;">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-4">✕</button>
                            </form>
                        </div>
                        <div class="description ">
                            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                este fue un proyecto realizado con tecnologias como angular y laravel, la caracteriztica principal es el 
                                uso de websockets para la comunciacion entre dos jugadores en tiempo real para maximizar la experiencia de juego.
                            </p>
                            <div class="divider"/>
                            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                El sistema tiene un sistema de autenticacion de dos pasos y registro de usuarios, ademas de un sistema de ranking para los jugadores.
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
                        <div class="tecnologies ">
                            <div class="flex justify-center gap-2 w-full">
                                <button class="btn">
                                    Angular
                                    <svg height="30px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x32_1-angular"><g><path d="M216.879,268.426h78.241L256,174.372L216.879,268.426L216.879,268.426z M256,26.001L42.635,102.395    l32.652,283.081L256,485.999l180.712-100.523l32.653-283.081L256,26.001z M389.688,376.957h-49.904l-26.9-67.153H199.321    l-26.903,67.153h-50.003L256,76.827L389.688,376.957z" style="fill:#DD0031;"/></g></g><g id="Layer_1"/></svg>
                                </button>
                                <button class="btn">
                                    Lavel
                                    <div >
                                        <img height="40px" width="40px" src="../../../assets/img/icons/laravel.png" alt="">
                                    </div>
                                </button>
                                <button class="btn">
                                    MySQL
                                    <div>
                                        <img height="45px" width="45px" src="../../../assets/img/icons/mysql.png" alt="">
                                    </div>
                                </button>
                            </div>
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
        margin-top: 3rem;
    }
}
</style>