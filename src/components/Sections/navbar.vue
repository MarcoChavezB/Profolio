<template>
    <div class="cont cont-color rounded-3xl center">
        <div class="intra flex justify-between items-center">
            <svg @click="scrollToSection('home')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#ffffff" fill="none">
                <path d="M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
            <svg @click="scrollToSection('proyects')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="46" color="#ffffff" fill="none">
                <path d="M17 8L18.8398 9.85008C19.6133 10.6279 20 11.0168 20 11.5C20 11.9832 19.6133 12.3721 18.8398 13.1499L17 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 8L5.16019 9.85008C4.38673 10.6279 4 11.0168 4 11.5C4 11.9832 4.38673 12.3721 5.16019 13.1499L7 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.5 4L9.5 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg @click="scrollToSection('experience')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="35" height="35" color="#ffffff" fill="none">
                <path d="M8 21C8 19.5858 8 18.8787 8.43934 18.4393C8.87868 18 9.58579 18 11 18H13C14.4142 18 15.1213 18 15.5607 18.4393C16 18.8787 16 19.5858 16 21V22H8V21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 13L12 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 22H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.0366 2.86651L14.0925 4.99573C14.2364 5.29212 14.6204 5.57642 14.9444 5.63086L16.8582 5.95145C18.082 6.15712 18.37 7.05236 17.4881 7.9355L16.0003 9.43563C15.7483 9.68968 15.6103 10.1796 15.6883 10.5305L16.1142 12.3875C16.4502 13.8574 15.6763 14.426 14.3864 13.6578L12.5926 12.5871C12.2687 12.3935 11.7347 12.3935 11.4048 12.5871L9.61096 13.6578C8.3271 14.426 7.54719 13.8513 7.88315 12.3875L8.3091 10.5305C8.3871 10.1796 8.24911 9.68968 7.99714 9.43563L6.5093 7.9355C5.6334 7.05236 5.91537 6.15712 7.13923 5.95145L9.05302 5.63086C9.37099 5.57642 9.75494 5.29212 9.89893 4.99573L10.9548 2.86651C11.5307 1.71116 12.4666 1.71116 13.0366 2.86651Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg @click="scrollToSection('aboutme')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#ffffff" fill="none">
                <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
            </svg>
        </div>
    </div>
</template>
<script setup>
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<style scoped>
.cont {
    width: 16%;
    height: 8vh;
    position: fixed;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    animation: slideFromBottom 1.5s ease forwards;
}
svg{
    cursor: pointer;
    transition: transform 0.3s;
}
svg:hover{
    transform: translateY(-7px);
}
.intra{
    height: 97%;
    width: 70%;
}


@keyframes slideFromBottom {
    from {
        transform: translateY(190%) translateX(-50%);
    }
    to {
        transform: translateY(0) translateX(-50%);
    }
}
</style>
