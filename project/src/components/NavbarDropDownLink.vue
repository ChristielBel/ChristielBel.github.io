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
        <a class="nav-link " v-bind:href="link" id="navbarDropdown1" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <div class="text dropdown-toggle"> {{ text }}</div>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
            <li v-for="(dropDownText, index) in dropDownTexts" :key="index">
                <a class="dropdown-item" :href="dropDownLinks[index]">{{ dropDownText }}</a>
            </li>
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

.navbar-nav li a {
    border-bottom: 1px solid #312a2a;
}


.navbar-toggler:focus,
.navbar-toggler:active {
    outline: none;
    box-shadow: none;
}

.navbar-dark .navbar-nav {
    color: white;
}

.dropdown-menu {
    font-size: 12px;
    background-color: black;
    border-radius: 0;
}

.dropdown-item {
    padding: 8px 20px;
    color: white;
}

.navbar {
    z-index: 20;
    font-weight: 500;
    background-color: black;
    font-size: 12px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.header-logo {
    width: 156px;
    height: 31px;
}


@media screen and (min-width: 1000px) {
    .navbar {
        border: none;
        background: none;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }

    .header-logo {
        margin-left: 50px;
    }

    .nav-item {
        margin: 0 5px;
    }

    .navbar-nav li a {
        border: none;
    }

    .dropdown-menu {
        background-color: #f14d34;
    }

    .dropdown-item:hover {
        background-color: #ab1a0e;
        color: white;
    }
}
</style>