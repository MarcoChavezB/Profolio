<template>
    <section>
        <div class="title">
            <h1>ABOUT ME</h1>
        </div>
        <div class="h-full center">
            <div class="cont  grid h-full">
                <div class="grid header mb-10">
                    <div></div>
                    <div class="links flex items-center">
                        <div class="flex gap-10">
                            <router-link to="/" @click="select('myStory')">
                                <h1 :class="{ 'selected': isSelect.myStory, 'un-selected': !isSelect.myStory }">MY STORY</h1>
                            </router-link>
                            <router-link to="/personal/hobbies" @click="select('hobbies')">
                                <h1 :class="{ 'selected': isSelect.hobbies, 'un-selected': !isSelect.hobbies }">HOBBIES</h1>
                            </router-link>
                            <router-link to="/personal/education" @click="select('education')">
                                <h1 :class="{ 'selected': isSelect.education, 'un-selected': !isSelect.education }">EDUCATION</h1>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="view center w-full">
                    <router-view/>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import router from '@/router';
import { onMounted } from 'vue';

export default {
    data() {
        return {
            isSelect: {
                myStory: true,
                hobbies: false,
                education: false
            }
        }
    },
    methods: {
        select(key) {
            for (let k in this.isSelect) {
                this.isSelect[k] = false;
            }
            this.isSelect[key] = true;
        }
    },
    setup() {
        onMounted(() => {
            router.push('/');
        });
    }
}
</script>
<style scoped>
.cont {
    height: 50vh;
    grid-template-rows: 1fr 6fr;
    width: 80%;
}
.header{
    grid-template-columns: 1fr 2fr;
}
.links .flex h1 {
    cursor: pointer;
    transition: all 0.3s;
}

.cont .profile,
.text {
    height: 90%;
}

.un-selected {
    font-size: 1.3rem;
    font-weight: 700;
    color: #4b4b4b;
}

.selected {
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    border-bottom: 2px solid #4a4a4a;
}

.title {
    display: flex;
    justify-content: center;
    align-items: end;
}

.title h1 {
    font-size: 15rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    color: #171717;
}
</style>