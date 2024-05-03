<template>
    <dialog id="necklace" class="modal">
        <div class="modal-box1 grid">
            <form method="dialog" class="header-modal flex justify-end items-center" style="background-color: #0d0d0d;">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-4">✕</button>
            </form>
            <div class="cont grid">
                <div style="background-color:#fff;" class="flex justify-center items-center">
                    <img class="rounded-lg" src="../../../assets/img/Proyects/vetMockup.jpg" alt="">
                </div>
                <div class="flex justify-center items-center">
                    <div class="grid cont-grid" style="height: 90%; width: 90%">
                        <div class="title flex">
                            <h2
                                class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                                Veterinary Managment</h2>
                            <form method="dialog" class="phone hidden" style="background-color: #0d0d0d;">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-4">✕</button>
                            </form>
                        </div>
                        <div class="description  ">
                            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                This is a software project designed to help manage a veterinary clinic, simplifying
                                tasks and improving efficiency in handling patients, medical records, appointments, and
                                products. The system aims to make the lives of veterinary staff easier by providing a
                                friendly and functional platform for carrying out daily operations.
                            </p>
                            <div class="divider" />
                            <ol class="space-y-3 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Patient Management
                                        🐶</span>: Recording, editing, and viewing of data.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Medical Records 🏥</span>:
                                    Storage and consultation of medical records.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Appointments 📅</span>:
                                    Scheduling and tracking with reminders.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Inventory 📦</span>:
                                    Control of products and medications.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Billing 💰</span>:
                                    Generation and tracking of payments.
                                </li>
                                <li>
                                    <span class="font-semibold text-gray-900 dark:text-white">Reports 📊</span>: Reports
                                    and statistics.
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