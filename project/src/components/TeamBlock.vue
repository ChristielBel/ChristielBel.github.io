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
    <div class="col-6 col-lg-4 main-block">
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
    margin: 0 0;
    padding: 0 0;
}

.advantage {
    height: 100%;
    padding: 0 20px;
    min-height: 300px;
}

.men {
    width: 80%; /* Или любой другой подходящий процент */
  margin: 0 auto 70px;
  display: flex;
    flex-direction: column;
    justify-content: center;
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
    display: block;
    z-index: 5;
}

@media (max-width: 1000px){
    img {
        max-width: 100%;
        max-height: 100%;
        height: auto;
    }
}
</style>