<template>
    <div>
        <v-row>
            <v-col>
                <v-select
                    v-model="postTypeFilter"
                    :items="arePostsAvailable ? listingTypes : []"
                    label="Filter by type"
                />
            </v-col>
            <v-col>
                <v-select
                    v-model="themeFilter"
                    :items="arePostsAvailable ? subredditsList : []"
                    label="Filter by subreddit"
                    data-cy="themeFilter"
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col v-if="postsToShow.length === 0 && !isPostsLoading">
                <v-alert
                    v-if="posts.error"
                    border="left"
                    class="mx-auto mt-12"
                    color="red accent-4"
                    elevation="2"
                    max-width="400"
                    type="error"
                >
                    {{ posts.error }}
                </v-alert>

                <v-alert
                    border="left"
                    class="mx-auto mt-12"
                    color="deep-purple accent-4"
                    elevation="2"
                    max-width="400"
                    type="info"
                >
                    No posts available
                </v-alert>
            </v-col>
            <v-col
                v-for="(post, index) in postsToShow"
                :key="index"
                class="post"
                data-cy="post"
            >
                <app-subreddits-post
                    :post="post"
                />
            </v-col>
        </v-row>

        <v-dialog
            v-if="isModalOpen"
            v-model="isModalOpen"
            hide-overlay
            persistent
            width="300"
        >
            <v-card
                color="primary"
                dark
            >
                <v-card-text class="pt-3">
                    Loading posts... Please wait.
                </v-card-text>
                <v-card-text>
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    />
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { subredditListingTypes } from '@/enums/subreddit.js'

// Components
import AppSubredditsPost from '@/components/Subreddits/Post.vue'

export default {
    components: {
        AppSubredditsPost
    },
    data: () => ({
        postTypeFilter: null,
        themeFilter: 'all',
        isModalOpen: false
    }),
    computed: {
        ...mapGetters([
            'isPostsLoading',
            'posts',
            'postType',
            'userSubreddits'
        ]),
        listingTypes () {
            return subredditListingTypes
        },
        arePostsAvailable() {
            return this.posts.data.length > 0
        },
        postsToShow () {
            return (
                this.themeFilter === 'all' ?
                    this.posts.data :
                    this.posts.data.filter(post => post.data.subreddit === this.themeFilter)
            )
        },
        subredditsList () {
            return (
                this.arePostsAvailable ?
                    [ ...this.userSubreddits, 'all' ].sort() :
                    []
            )
        }
    },
    watch: {
        isPostsLoading(isPostsLoading) {
            this.isModalOpen = isPostsLoading
        },
        postTypeFilter(postType) {
            this.setSubredditsPostType(postType)
            this.getSubreddits({})
        }
    },
    mounted() {
        this.getSubreddits({})
        this.postTypeFilter = this.postType
    },
    methods: {
        ...mapActions([
            'getSubreddits',
            'setSubredditsPostType'
        ])
    }
}
</script>

<style lang="sass" scoped>
.post
    width: 260px
</style>
