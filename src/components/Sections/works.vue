<template>
    <section>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
            <button class="card" onclick="veterinary.showModal()">
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
            </button>
            <button class="card" onclick="necklace.showModal()">
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
            </button>
            <button class="card" onclick="starcabo.showModal()">
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
            </button>
            <button class="card" onclick="dumb_e.showModal()">
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
            </button>
            <button class="card" onclick="portfolio.showModal()">
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
            </button>
            <button class="card" onclick="administrative.showModal()">
                <img class="h-auto max-w-full rounded-lg gray"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
            </button>
        </div>
    </section>
    <veterinaryModal/>
    <necklaceModal/>
    <starcaboModal/>
    <dumb_e/>
    <portfolio/>
    <administrative/>
</template>

<script>
import veterinaryModal from '../Sections/modalWork/veterinary.vue'
import necklaceModal from '../Sections/modalWork/necklace.vue'
import starcaboModal from './modalWork/starcabo.vue';
import dumb_e from './modalWork/dumb_e.vue';
import portfolio from  './modalWork/portfolio.vue';
import administrative from './modalWork/administrative_software.vue';
export default {
    components:{
        veterinaryModal,
        necklaceModal,
        starcaboModal,
        dumb_e,
        portfolio,
        administrative
    }
}
</script>

<style scoped>
section {
    height: fill;
}

.gray {
    cursor: pointer;
}

img:hover {
    filter: grayscale(0%);
}

.card::before,
.card::after {
  position: absolute;
  content: "";
  width: 20%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  transition: all 0.5s;
}

.card::before {
  top: 0;
  right: 0;
  border-radius: 0 15px 0 100%;

}

.card::after {
  bottom: 0;
  left: 0;
  border-radius: 0 100%  0 15px;
}

.card:hover::before,
.card:hover:after {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.50);
}

.card:hover:after {
  content: "Se more details";
}
</style>