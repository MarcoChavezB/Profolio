<template>
    <section>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
            <button onclick="modal1.showModal()">
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
            </button>
            <dialog id="modal1" class="modal">
                <div class="modal-box1" style="height: 100%; width: 90rem">
                    <div class="h-full flex flex-col">
                        <div>
                            <form method="dialog">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 class="font-bold text-lg">modal 1!</h3>
                        </div>
                        <section class="grid gap-2" style="grid-template-columns: 4fr 3fr">
                            <div class="images flex justify-center items-center">

                            </div>
                            <div class="text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis commodi quae fugit earum vel qui aperiam! Recusandae, quo suscipit adipisci quam corrupti, ullam nemo asperiores porro similique est quod aliquid.
                            </div>
                        </section>
                    </div>

                </div>
            </dialog>


            <div>
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="">
            </div>
        </div>
    </section>
    <modalWork id_modal="firstImage" />
</template>

<style scoped>
section {
    height: fill;
}

.gray {
    filter: grayscale(100%);
    transition: filter 0.6s;
    cursor: pointer;
}

img:hover {
    filter: grayscale(0%);
}

.modal-box1 {
    grid-column-start: 1;
    grid-row-start: 1;
    --tw-scale-x: .9;
    --tw-scale-y: .9;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    border-bottom-right-radius: var(--rounded-box, 1rem);
    border-bottom-left-radius: var(--rounded-box, 1rem);
    border-top-left-radius: var(--rounded-box, 1rem);
    border-top-right-radius: var(--rounded-box, 1rem);
    --tw-bg-opacity: 1;
    background-color: #1a1a1a;
    padding: 1.5rem;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    overflow-y: auto;
    overscroll-behavior: contain;
}
</style>