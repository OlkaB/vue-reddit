<template>
    <v-navigation-drawer
        v-model="isOpened"
        app
        clipped
    >
        <v-alert
            v-if="userSubreddits.length === 0"
            border="left"
            class="mx-auto"
            color="deep-purple accent-4"
            elevation="2"
            max-width="400"
            type="info"
        >
            Start here by adding subreddits
        </v-alert>

        <v-list dense>
            <v-list-item>
                <v-list-item-action class="mr-2">
                    <v-icon
                        size="16"
                        data-cy="addSubreditIcon"
                        @click="handleAddSubreddit"
                    >
                        fa fa-search
                    </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-text-field
                        v-model="searchQuery"
                        placeholder="vue"
                        :append-icon="searchQuery ? 'fa fa-times' : ''"
                        label="Add subreddit"
                        data-cy="addSubreditInput"
                        @click:append="searchQuery = null"
                        @keyup.enter="handleAddSubreddit"
                    />
                </v-list-item-content>
            </v-list-item>

            <v-divider />

            <v-list-item
                v-for="(subredit, index) in userSubreddits"
                :key="index"
                data-cy="chosenSubreddit"
            >
                <v-list-item-content>
                    <v-chip class="chip--full">
                        {{ subredit }}
                        <v-icon
                            class="mr-0"
                            right
                            size="16"
                            data-cy="removeSubreddit"
                            @click="handleRemoveSubreddit(subredit)"
                        >
                            fa fa-times
                        </v-icon>
                    </v-chip>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: {
        isDrawerOpened: {
            type: Boolean,
            required: true
        }
    },
    data: () => ({
        // isOpened: true,
        searchQuery: null
    }),
    computed: {
        ...mapGetters([
            'userSubreddits'
        ]),
        isOpened: {
            get: function() {
                return this.isDrawerOpened
            },
            set: function(data) {
                this.$emit('toggleIsDrawerOpened', data)
            }
        }
    },
    watch: {
        userSubreddits() {
            this.getSubreddits({})
        }
    },
    methods: {
        ...mapActions([
            'getSubreddits',
            'setUserSubreddits'
        ]),
        handleAddSubreddit() {
            // split reddits added with comma and/or semicolon
            const subreddits = this.searchQuery.split(/[;,]+/)
            this.setUserSubreddits([ ...this.userSubreddits, ...subreddits ])
            this.searchQuery = null
        },
        handleRemoveSubreddit(subreddit) {
            this.setUserSubreddits([ ...this.userSubreddits.filter(item => item !== subreddit) ])
        }
    }
}
</script>

<style lang="sass">
// leave unscoped
.chip--full .v-chip__content
    justify-content: space-between
    width: 100%
</style>
