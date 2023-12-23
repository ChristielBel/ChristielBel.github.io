<script>
export default {
    name: "NavbarLink",
    props: {
        text: {
            String,
            required: true
        },
        link: {
            String,
            required: true
        }
    }
};
</script>

<template>
    <li class="nav-item glowing-link">
        <a class="nav-link" v-bind:href="link">
            <div class="text"> {{ text }}</div>
        </a>
    </li>
</template>

<style scoped>
.nav-item {
    white-space: nowrap;
    padding: 0;
}

.glowing-link {
    margin-top: 3px;
    border-bottom: 3px #f14d3400 solid;
    transition: border-color 0.3s ease;
}

.glowing-link:hover {
    border-bottom: 3px #f14d34FF solid;
}

.text {
    color: white;
}
</style>