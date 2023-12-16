<script>
import FaqBlock from "@/components/FaqBlock.vue";

export default {
    name: "Faq",
    components: { FaqBlock },
    data: () => {
        return {
            header1: "Вопрос 1",
            header2: "Вопрос 2saddddddddddd dasfvxva      qwdsad mand,madadbac dakbc cjhxab ajkdbakcbxk",
            header3: "Вопрос 3",
            text1: "Ответ 1.",
            text2: "Ответ 2.",
            text3: "Ответ 3djalkjdanldnalnd danjkdka dbajbd haidgj gjsa ygqe uab adag kagsdahdakd hjkasahj uqwhk gdhka lanldlkjlskjadl.",
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
                        FAQ
                    </h1>
                </div>
            </div>
            <div class="flex-row">
                <ol>
                    <FaqBlock :header="header1" :text="text1" />
                    <FaqBlock :header="header2" :text="text2" />
                    <FaqBlock :header="header3" :text="text3" />
                </ol>

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
    padding: 0px;
    margin-bottom: 0px;
}

.support-title {
    padding-top: 100px;
    margin-bottom: 20px;
    text-align: center;
    color: #050c33;
    font-weight: 700;
    font-size: 24px;
}

ol {
    padding-left: 0px;
}

@media screen and (min-width: 768px) {
    .support-title {
        margin-bottom: 55px;
        font-size: 42px;
    }
}
</style>