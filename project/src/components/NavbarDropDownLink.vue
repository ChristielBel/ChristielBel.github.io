<script>
export default {
    name: "NavbarDropDownLink",
    props: {
        text: {
            String,
            required: true
        },
        link: {
            String,
            required: true
        },
        dropDownTexts: {
            Array,
            requared: true
        },
        dropDownLinks: {
            Array,
            requared: true
        }
    }
};
</script>

<template>
    <li class="nav-item glowing-link dropdown">
        <a class="nav-link dropdown-toggle" v-bind:href="link" id="navbarDropdown1" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <div class="text"> {{ text }}</div>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
            <li><a class="dropdown-item" href="#">МИГРАЦИЯ</a></li>
            <li><a class="dropdown-item" href="#">БЭКАПЫ</a></li>
            <li><a class="dropdown-item" href="#">АУДИТ БЕЗОПАСНОСТИ</a></li>
            <li><a class="dropdown-item" href="#">ОПТИМИЗАЦИЯ СКОРОСТИ</a></li>
            <li><a class="dropdown-item" href="#">ПЕРЕЕЗД НА HTTPS</a></li>
        </ul>
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