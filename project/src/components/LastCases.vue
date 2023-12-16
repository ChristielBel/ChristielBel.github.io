<script>
import CaseBlock from "@/components/CaseBlock.vue";
import pic1 from "../assets/images/support1.svg"

export default {
    name: "LastCases",
    components: { CaseBlock },
    data: () => {
        return {
            pic1,
            header1: "mail",
            text1: "fds",
            date1: "01.",
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
                <CaseBlock :image="pic1" :header="header1" :text="text1" :date="date1" />
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