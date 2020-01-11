<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            overflow
        >
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

        <v-app-bar
            app
            clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: true,
        source: '/about'
    })
}
</script>

