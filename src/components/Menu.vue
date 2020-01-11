<template>
    <div>
        <component
            :is="drawerComponent"
            :is-drawer-opened="isDrawerOpened"
            @toggleIsDrawerOpened="handleIsDrawerOpened"
        />
        <v-app-bar
            app
            clipped-left
        >
            <v-app-bar-nav-icon @click.stop="handleIsDrawerOpened(!isDrawerOpened)" />

            <router-link
                to="/subreddits"
                class="d-flex white--text text--link"
            >
                <v-avatar
                    size="32px"
                    item
                    class="ml-12"
                >
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                        alt="Vuetify"
                    />
                </v-avatar>
                <v-toolbar-title>
                    Subreddits
                </v-toolbar-title>
            </router-link>

            <v-spacer />
            <span class="grey--text">menu placeholder</span>
        </v-app-bar>
    </div>
</template>

<script>
// Components
import AppSubredditsSearchDrawer from '@/components/Subreddits/SubredditsSearchDrawer'

export default {
    data: () => ({
        isDrawerOpened: true,
        source: '/about'
    }),
    computed: {
        drawerComponent () {
            const view = this.$route.name
            switch (view) {
            case 'subreddits':
                return AppSubredditsSearchDrawer
            default:
                return null
            }
        }
    },
    methods: {
        handleIsDrawerOpened(isOpened) {
            this.isDrawerOpened = isOpened
        }
    }
}
</script>

