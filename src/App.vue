<template>
    <div class="app">
        <header class="app-header">
            <RouterLink
                class="app-header__link"
                to="/"
                >A11Y FOR ALL</RouterLink
            >
        </header>
        <aside class="app-aside">
            <nav class="app-navigation">
                <ul class="app-navigation__list">
                    <li class="app-navigation__list-item">
                        <RouterLink
                            class="app-navigation__list-link"
                            to="/"
                            >Introdution</RouterLink
                        >
                    </li>
                    <li class="app-navigation__list-item">
                        <RouterLink
                            class="app-navigation__list-link"
                            to="/tutorials"
                            >Tutorials</RouterLink
                        >
                    </li>
                </ul>
            </nav>
        </aside>
        <main class="app-main">
            <RouterView />
        </main>
        <footer class="app-footer">
            <a href="https://github.com/UwetU/a11y-for-all">GitHub</a>
        </footer>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
    .app {
        display: grid;
        grid-template-areas:
            'header header'
            'aside main'
            'footer footer';
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 20rem 1fr;
        min-height: 100vh;
        width: 100%;
    }

    .app-header {
        grid-area: header;
    }

    .app-aside {
        grid-area: aside;
    }

    .app-main {
        grid-area: main;
    }

    .app-footer {
        grid-area: footer;
    }
</style>
