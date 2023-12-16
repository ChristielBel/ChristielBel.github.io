<script>
export default {
    name: "TeamBlock",
    props: {
        image: {
            String,
            required: true
        },
        text: {
            String,
            required: true
        },
        header: {
            String,
            required: true
        }
    }
};
</script>

<template>
    <div class="col-6 col-md-4 main-block">
        <div class="advantage">
            <div class="men">
                <div class="image-wrapper">
                    <img v-bind:src="image" alt="image" class="img-responsive">
                </div>
                <div class="header">
                    {{ header }}
                </div>
                <div class="main-text">
                    {{ text }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-block {
    margin: 0 0px;
    padding: 0px 0px;
}

.advantage {
    height: 100%;
    padding: 0px 40px 0px 40px;
    min-height: 300px;
}

.men {
    width: 220px;
    margin-bottom: 70px;
}

.header {
    font-size: 16px;
    font-weight: 700;
    color: #050c33;
    margin-top: 25px;
    margin-bottom: 5px;
}

.main-text {
    font-size: 16px;
    color: #4e5a73;
    line-height: 1.37;
    z-index: 10;
}

.image-wrapper {
    z-index: 5;
}

@media screen and (min-width: 768px) {
    .advantage {
        margin: 0;
    }
}
</style>