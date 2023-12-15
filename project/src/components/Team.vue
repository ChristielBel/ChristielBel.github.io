<script>
import TeamBlock from "@/components/TeamBlock.vue";
import photo1 from "../assets/images/IMG_2472_0.jpg"
import photo2 from "../assets/images/IMG_2539_0.jpg"
import photo3 from "../assets/images/IMG_2474_1.jpg"
import photo4 from "../assets/images/IMG_2522_0.jpg"
import photo5 from "../assets/images/IMG_9971_16.jpg"

export default {
    name: "Support",
    components: { TeamBlock },
    data: () => {
        return {
            header1: "Сергей Синица",
            text1: "Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора",
            header2: "Роман Агабеков",
            text2: "Руководитель отдела DevOps, директор",
            header3: "Алексей Синица",
            text3: "Руководитель отдела поддержки сайтов",
            header4: "Дарья Бочкарёва",
            text4: "Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов",
            header5: "Ирина Торкунова",
            text5: "Менеджер по работе с клиентами",
            photo1, photo2, photo3, photo4, photo5,
        }
    }
}
</script>

<template>
    <div class="team-main-block">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1 class="team-title text-center">
                        Команда
                    </h1>
                </div>
            </div>
            <div class="row flex-row">
                <TeamBlock :header="header1" :text="text1" :image="photo1" />
                <TeamBlock :header="header2" :text="text2" :image="photo2" />
                <TeamBlock :header="header3" :text="text3" :image="photo3" />
                <TeamBlock :header="header4" :text="text4" :image="photo4" />
                <TeamBlock :header="header5" :text="text5" :image="photo5" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.team-main-block {
    margin-bottom: 0px;
    position: relative;
}

.flex-row {
    margin-bottom: 0px;
    display: flex;
}

.team-title {
    padding-top: 100px;
    margin-bottom: 20px;
    text-align: center;
    color: #050c33;
    font-weight: 700;
    font-size: 24px;
}

@media screen and (min-width: 768px) {
    .team-title {
        margin-bottom: 55px;
        font-size: 42px;
    }
}
</style>