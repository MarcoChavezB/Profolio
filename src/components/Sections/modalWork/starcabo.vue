<template>
    <dialog id="starcabo" class="modal">
        <div class="modal-box1 grid">
            <form method="dialog" class="header-modal flex justify-end items-center" style="background-color: #0d0d0d;">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-4">✕</button>
            </form>
            <div class="cont grid">
                <div style="background-color:#fff;" class="flex justify-center items-center">
                    <img class="rounded-lg" src="../../../assets/img/Proyects/starcabomockup.jpg" alt="">
                </div>
                <div class="flex justify-center items-center">
                    <div class="grid cont-grid" style="height: 90%; width: 90%">
                        <div class="title flex">
                            <h2
                                class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                                Transportation Booking Platform
                            </h2>
                            <form method="dialog" class="phone hidden" style="background-color: #0d0d0d;">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-4">✕</button>
                            </form>
                        </div>
                        <div class="description  ">
                            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                I developed a comprehensive web platform for managing transportation bookings,
                                showcasing my skills as a fullstack developer. This platform provides a seamless
                                solution for handling transportation reservations, featuring the following key
                                functionalities:
                            </p>
                            <div class="divider" />
                            <ol class="space-y-3 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white"> User experience
                                    </span>: A user-friendly interface for booking transportation services.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">destinos filtrados</span>:
                                    Filtered destinations based on user preferences.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Excelent CEO</span>:
                                    Search engine optimization for increased visibility.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Price control</span>:
                                    Dynamic pricing based on demand and availability.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Email notifications</span>:
                                    Automated email notifications for booking confirmations.
                                </li>
                            </ol>
                        </div>
                        <div class="tecnologies ">
                            <div class="flex justify-center gap-2 flex-co w-full">
                                <button class="btn">
                                    Vuejs
                                    <img height="30px" width="30px" src="../../../assets/logo.svg" alt="">
                                </button>
                                <button class="btn">
                                    Lavel
                                    <img height="40px" width="40px" src="../../../assets/img/icons/laravel.png" alt="">
                                </button>
                                <button class="btn">
                                    MySQL
                                    <img height="45px" width="45px" src="../../../assets/img/icons/mysql.png" alt="">
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
}
</style>