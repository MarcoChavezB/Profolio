<template>
    <dialog id="necklace" class="modal">
        <div class="modal-box1 grid" style="height: 100%; width: 90rem; grid-template-rows: 1fr 10fr;">
            <form method="dialog" class="header-modal flex justify-end items-center" style="background-color: #0d0d0d;">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-4">✕</button>
            </form>
            <div class="cont grid" style="grid-template-columns: 4fr 3fr">
                <div style="background-color:#000;" class="flex justify-center items-center">
                    <img src="https://cdn.dribbble.com/userupload/14040191/file/original-304709d837458edd7c84260d82f63e48.png?resize=1024x768"
                        alt="">
                </div>
                <div class="flex justify-center items-center">
                    <div class="grid cont-grid" style="height: 90%; width: 90%">
                        <div class="title ">
                            <h2
                                class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                                Necklace Managment</h2>
                        </div>
                        <div class="description ">
                            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque optio ab
                                voluptates hic illum impedit assumenda, consequatur excepturi tenetur magnam ea
                                enim repellat cupiditate ipsa placeat qui similique aspernatur.
                            </p>
                        </div>
                        <div class="tecnologies ">
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
                            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                2021
                            </p>
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
</style>