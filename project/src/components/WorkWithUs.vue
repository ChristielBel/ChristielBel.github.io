<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Partner from "@/components/Partner.vue";
import pic1 from "../assets/images/logo.png";
import pic2 from "../assets/images/logo_0.png";
import pic3 from "../assets/images/logo_2.png";
import pic4 from "../assets/images/logo-estee.png";
import pic5 from "../assets/images/lpcma_rus_v4.jpg";
import pic6 from "../assets/images/nashagazeta_ch.png";

export default {
    name: "WorkWithUs",
    components: { Partner },
    data: () => {
        return {
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
        }
    },
    mounted() {
        this.swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 5000, // Задержка в миллисекундах между переключениями
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
}
</script>

<template>
    <div class="support-main-block">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1 class="wwu-title">
                        С нами работают
                    </h1>
                    <div class="wwu-text col-8 mx-auto">
                        Десятки компаний доверяют нам самок ценное, что у них есть в интернете -
                        свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
                    </div>
                </div>
            </div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <Partner :image="pic1" />
                    </div>
                    <div class="swiper-slide">
                        <Partner :image="pic2" />
                    </div>
                    <div class="swiper-slide">
                        <Partner :image="pic3" />
                    </div>
                    <div class="swiper-slide">
                        <Partner :image="pic1" />
                    </div>
                    <div class="swiper-slide">
                        <Partner :image="pic2" />
                    </div>
                    <div class="swiper-slide">
                        <Partner :image="pic3" />
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="row flex-row">

            </div>
        </div>
    </div>
</template>

<style scoped>
.swiper-container {
    width: 100%;
    padding: 50px 0;
}

.swiper-slide {
    width: 25%;
    float: left;
}

.support-main-block {
    margin-bottom: 0px;
    position: relative;
}

.flex-row {
    margin-bottom: 75px;
}

.wwu-title {
    padding-top: 100px;
    margin-bottom: 20px;
    text-align: center;
    color: #050c33;
    font-weight: 700;
    font-size: 42px;
}

.wwu-text {
    text-align: center;
}

@media screen and (min-width: 768px) {
    .support-title {
        margin-bottom: 55px;
        font-size: 42px;
    }
}
</style>