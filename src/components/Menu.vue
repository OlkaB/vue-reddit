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
            <v-toolbar-title>Your subreddits</v-toolbar-title>
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

