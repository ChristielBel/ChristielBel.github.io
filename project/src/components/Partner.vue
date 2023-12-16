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
    box-shadow: 0 20px 40px rgba(5, 12, 51, .15);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
}

@media screen and (min-width: 768px) {
    .advantage {
        margin: 0;
    }
}
</style>