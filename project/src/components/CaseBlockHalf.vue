<script>
export default {
    name: "CaseBlockHalf",
    props: {
        image: {
            String,
            required: true
        },
        header: {
            String,
            required: true
        },
        text: {
            String,
            required: true
        },
        date: {
            String,
            required: true
        },
    }
};
</script>

<template>
    <div class="col-12 col-md-4 main-block">
        <div class="advantage">
            <div class="image-wrapper">
                <img v-bind:src="image" alt="image" class="img-responsive">
            </div>
            <div class="overlay">
                <div class="header">
                    {{ header }}
                </div>
                <div class="number">
                    {{ date }}
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
    height: 360px;
    padding: 0px 10px 0px 10px;
    margin-bottom: 10px;
}

.advantage {
    border-radius: 5px;
    position: relative;
    height: 100%;
}

.overlay {
    padding: 20px 15px 15px 15px;
    width: 100%;
    bottom: 0;
}

.number {
    margin-bottom: 20px;
    font-size: 12px;
    color: #828a9b;
}

.header {
    font-size: 14px;
    font-weight: 700;
    color: #050c33;
    line-height: 1.22;
    margin-bottom: 5px;
}

.main-text {
    font-size: 12px;
    color: #4e5a73;
}

.image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-wrapper img {
    border-radius: 5px;
    height: 200px;
    width: auto;
}

@media screen and (min-width: 768px) {
    .advantage {
        min-height: 220px;
        margin: 0;
    }
}
</style>