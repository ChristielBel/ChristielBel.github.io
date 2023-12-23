<script>
export default {
    name: "NavbarLink",
    props: {
        text: {
            String,
            required: true
        }
    }
};
</script>

<template>
    <li class="nav-item glowing-link">
        <a class="nav-link" href="#">
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
    border-bottom: 3px transparent solid;
}

.glowing-link:hover {
    border-bottom: 3px #f14d34 solid;
}

.text {
    color: white;
}
</style>