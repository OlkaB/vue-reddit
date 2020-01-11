<template>
    <div>
        <v-row>
            <v-col>
                <v-select
                    v-model="listingTypeFilter"
                    :items="listingTypes"
                    label="Filter by type"
                />
            </v-col>
            <v-col>
                <v-select
                    v-if="subredditsList.length > 1"
                    v-model="themeFilter"
                    :items="subredditsListWithAll"
                    label="Filter by subreddit"
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col
                v-for="(post, index) in postsToShow"
                :key="index"
                class="post"
            >
                <app-subreddits-post
                    :post="post"
                />
            </v-col>
        </v-row>
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
        listingTypeFilter: 'new',
        themeFilter: 'all'
    }),
    computed: {
        ...mapGetters([
            'posts'
        ]),
        listingTypes () {
            return subredditListingTypes
        },
        postsToShow () {
            return (
                this.themeFilter === 'all' ?
                    this.posts.data :
                    this.posts.data.filter(post => post.data.subreddit === this.themeFilter)
            )
        },
        subredditsList () {
            return [ ...new Set(this.posts.data.map(post => post.data.subreddit)) ]
        },
        subredditsListWithAll () {
            return [ ...this.subredditsList, 'all' ].sort()
        }
    },
    watch: {
        listingTypeFilter(type) {
            this.getPosts({
                subredditsArray: this.subredditsList,
                postType: type
            })
        }
    },
    mounted() {
        // TODO UNCOMMENT
        this.getPosts({
            subredditsArray: [ 'pics', 'gifs', 'todayilearned' ],
            postType: 'top'
        })
    },
    methods: {
        ...mapActions([
            'getPosts'
        ])
    }
}
</script>

<style lang="sass" scoped>
.post
    width: 260px
</style>
