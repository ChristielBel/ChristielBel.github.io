<script>
export default {
    name: "CaseBlockFull",
    props: {
        image: {
            String,
            required: true
        },
        header: {
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
        <div :style="{ backgroundImage: 'url(' + image + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }"
            class="advantage">
            <div class="overlay">
                <div class="header">
                    {{ header }}
                </div>
                <div class="date">
                    {{ date }}
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
    box-shadow: 0 20px 40px rgba(5, 12, 51, .15);
    position: relative;
    height: 100%;
}

.advantage img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.overlay {
    padding: 20px 15px 15px 15px;
    width: 100%;
    line-height: 1;
    position: absolute;
    bottom: 0;
}

.date {
    font-size: 12px;
    color: #BBB;
}

.header {
    font-size: 18px;
    font-weight: 700;
    color: white;
    line-height: 1.22;
    margin-bottom: 5px;
}
</style>