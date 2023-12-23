<script>
export default {
    name: "NavbarDropDownLink",
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
        <a class="nav-link" href="#">{{ text }}</a>
    </li>
</template>

<style scoped></style>