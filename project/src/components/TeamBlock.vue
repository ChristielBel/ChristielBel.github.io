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
</template>

<style scoped>
.main-block {
    padding: 5px 5px;
}

.advantage {
    box-shadow: 0 20px 40px rgba(5, 12, 51, .15);
    height: 100%;
    padding: 20px 45px 80px 45px;
    min-height: 300px;
    margin: 0 10px;
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
        min-height: 220px;
        margin: 0;
    }
}
</style>