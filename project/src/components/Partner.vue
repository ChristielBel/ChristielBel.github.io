<script>
export default {
    name: "Partner",
    props: {
        image: {
            String,
            required: true
        }
    }
};
</script>

<template>
    <div class="main-block">
        <div class="image-container">
            <img v-bind:src="image" alt="image" width="290" height="155" class="img-responsive">
        </div>
    </div>
</template>

<style scoped>
.main-block {
    padding: 0px;
}

.image-container {
    background: #fff;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: #DDD;
    box-shadow: 0 20px 40px rgba(5, 12, 51, .15);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 15vw;
    overflow: hidden;
}

.image-container img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}

@media screen and (min-width: 768px) {
    .advantage {
        margin: 0;
    }
}
</style>