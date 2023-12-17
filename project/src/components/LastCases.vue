<script>
import CaseBlockFull from "@/components/CaseBlockFull.vue";
import CaseBlockFullBig from "@/components/CaseBlockFullBig.vue";
import CaseBlockHalf from "@/components/CaseBlockHalf.vue";
import pic1 from "../assets/images/picture_2.webp"
import pic2 from "../assets/images/picture_1.webp"
import pic3 from "../assets/images/picture_3.jpg"
import pic4 from "../assets/images/picture_4.png"

export default {
    name: "LastCases",
    components: { CaseBlockFull, CaseBlockFullBig, CaseBlockHalf },
    data: () => {
        return {
            pic1, pic2, pic3, pic4,
            header1: "Настройка кэширования данных. Апгрейд сервера. Ускорение работысайта в 30 раз!",
            text1: "Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения...",
            date1: "03.12.23",
            header2: "Использование отчетов Ecommerce в Яндекс.Метрике",
            header3: "Повышение конверсии страницы с формой заявки с применением AB-тестирования",
            date3: "24.10.23",
            header4: "mail",
            date4: "11.11.23",
            header5: "mail",
            text5: "fds",
            date5: "22.07.23",
        }
    }
}
</script>

<template>
    <div class="support-main-block">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1 class="support-title text-center">
                        Последние кейсы
                    </h1>
                </div>
            </div>
            <div class="row flex-row">
                <CaseBlockHalf :image="pic1" :header="header1" :text="text1" :date="date1" />
                <CaseBlockFullBig :image="pic2" :header="header2" />
                <CaseBlockFull :image="pic3" :header="header3" :date="date3" />
                <CaseBlockFull :image="pic2" :header="header4" :date="date4" />
                <CaseBlockHalf :image="pic4" :header="header5" :text="text5" :date="date5" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.support-main-block {
    margin-bottom: 0px;
    position: relative;
}

.flex-row {
    margin-bottom: 75px;
}

.support-title {
    padding-top: 100px;
    margin-bottom: 20px;
    text-align: center;
    color: #050c33;
    font-weight: 700;
    font-size: 24px;
}

@media screen and (min-width: 768px) {
    .support-title {
        margin-bottom: 55px;
        font-size: 42px;
    }
}
</style>