<template>
    <div>
        <v-select
            :items="sortTypes"
            label="Sort"
        />
        <v-select
            :items="filters"
            label="Filter"
        />
        <v-text-field
            v-model="searchQuery"
            placeholder="vue tips"
            :append-icon="searchQuery ? 'fa fa-times' : ''"
            prepend-icon="fa fa-search"
            label="Search subreddits"
            @click:append="searchQuery = null"
        />
        <v-row>
            <v-col
                v-for="(post, index) in posts.data"
                :key="index"
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

// Components
import AppSubredditsPost from '@/components/Subreddits/Post.vue'

export default {
    components: {
        AppSubredditsPost
    },
    data: () => ({
        searchQuery: null,
        sortTypes: [ 'hot', 'recent' ],
        filters: [ 'subredit 1', 'subredit 21', 'subredit 13' ]
    }),
    computed: {
        ...mapGetters([
            'posts'
        ])
    },
    watch: {
        posts(posts) {
            console.log('WATCH ', { posts })
        }
    },
    mounted() {
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