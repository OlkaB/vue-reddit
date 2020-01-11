<template>
    <v-app>
        <app-menu />

        <v-content>
            <v-container
                fluid
            >
                <router-view />
            </v-container>
        </v-content>

        <app-footer />
    </v-app>
</template>

<script>
import AppFooter from './components/Footer'
import AppMenu from './components/Menu'

export default {
    name: 'App',
    components: {
        AppFooter,
        AppMenu
    }
}
</script>

<style lang="sass">
@import './styles/global'
</style>

