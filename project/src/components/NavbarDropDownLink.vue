
import { withDirectives } from 'vue';

<script>
import $ from 'jquery'
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
    },
    data() {
        return {
            isMobileMenuOpen: false,
            isDesktopMenuOpen: false
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    }
};
</script>

<template>
    <li class="nav-item dropdown">
        <a @click="toggleMobileMenu" class="menu-button nav-link glowing-link" v-bind:href="link">
            <div class="text"> {{ text }}</div>
        </a>
        <ul v-if="isMobileMenuOpen" class="mobile-menu list-menu drop-content">
            <li v-for="(dropDownText, index) in dropDownTexts" :key="index">
                <a class="list-item" :href="dropDownLinks[index]">{{ dropDownText }}</a>
            </li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link glowing-link" v-bind:href="link" id="navbarDropdown1" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <div class="text drop-btn"> {{ text }}</div>
        </a>
        <ul class="list-menu drop-content" aria-labelledby="navbarDropdown1">
            <li v-for="(dropDownText, index) in dropDownTexts" :key="index">
                <a class="list-item" :href="dropDownLinks[index]">{{ dropDownText }}</a>
            </li>
        </ul>
    </li>
</template>

<style scoped>
.mobile-menu,
.desktop-menu {
    display: none;
    padding: 0px;
}

.menu-button:hover+.desktop-menu,
.desktop-menu:hover {
    display: block;
}

.drop-btn {
    background-color: #4CAF50;
    color: white;
}

.drop-content {
    display: none;
    background-color: #f1f1f1;
    min-width: 160px;
    z-index: 1;
    padding: 8px 0px;
}

.drop-content li {
    color: black;
    padding: 2px 0px;
    text-decoration: none;
    display: block;
}

.dropdown:hover .drop-content {
    display: block;
}

.dropdown:hover .drop-btn {
    background-color: #3e8e41;
}

.glowing-link {
    border-bottom: 3px #f14d3400 solid;
    transition: border-color 0.3s ease;
}

.nav-item {
    white-space: nowrap;
    padding: 0;
}

.text {
    color: white;
}

.text:hover {
    color: #f14d34;
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

.list-menu {
    font-size: 12px;
    background-color: black;
    border-radius: 0;
}

.list-item {
    padding: 4px 4px;
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
    .dropdown:hover .drop-content {
        position: absolute;
    }

    .glowing-link:hover {
        border-bottom: 3px #f14d34FF solid;
    }

    .text:hover {
        color: white;
    }

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

    .list-menu {
        background-color: #f14d34;
    }

    .list-item:hover {
        background-color: #ab1a0e;
        color: white;
    }
}
</style>