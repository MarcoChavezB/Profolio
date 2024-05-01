<template>
    <section :class="{'hide-alert': hide}">
        <div @click="close()" class="ico flex justify-end cursor-pointer">X</div>
        <div class="mockup-code h-full">
            <div class="cont h-full flex justify-center items-center">
                <div class="texto flex flex-col">
                    <code class="text-violet-500">Hi!</code>
                    <code>
                        I'm <span class="text-green-500">Marco</span>, a student <span class="text-red-500">studying Systems</span>, actively seeking professional 
                        <span class="text-blue-500">internship opportunities</span>. Do you have an opportunity available? 
                        I would <span class="text-cyan-500">love to hear from you!</span>
                    </code>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            hide: false
        }
    },
    methods: {
        close() {
            console.log('close')
            this.hide = true
            setTimeout(() => {
                this.$emit('close');
            }, 1500);
        }
    }
}
</script>

<style scoped>
section {
    width: 35%;
    height: 25vh;
    position: fixed;
    z-index: 9999;
    bottom: 4rem;
    right: 3rem;
    animation: slideFromRight 1.5s ease forwards;
}

.texto{
    width: 80%;
    height: 90%;
}

.mockup-code {
    background-color: #1a1a1a;
}

@keyframes slideFromRight {
    from {
        transform: translateX(190%);
    }
    to {
        transform: translateX(0);
    }
}

.hide-alert {
    animation: hideFromRight 1.5s ease forwards;
}

@keyframes hideFromRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(190%);
    }
}
</style>
