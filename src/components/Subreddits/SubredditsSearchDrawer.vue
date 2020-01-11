<template>
    <v-navigation-drawer
        v-model="isDrawerOpened"
        app
        clipped
    >
        <v-text-field
            v-model="searchQuery"
            placeholder="vue tips"
            :append-icon="searchQuery ? 'fa fa-times' : ''"
            prepend-icon="fa fa-search"
            label="Search subreddits"
            @click:append="searchQuery = null"
        />
        <v-list dense>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>fa fa-search</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>fa fa-times</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Settings</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        isDrawerOpened: {
            type: Boolean,
            required: true
        }
    },
    data: () => ({
        isOpened: true,
        searchQuery: null
    }),
    watch: {
        isOpened(isOpened) {
            this.$emit('toggleIsDrawerOpened', isOpened)
        }
    }
}
</script>

<style>

</style>
