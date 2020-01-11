<template>
    <v-lazy
        :options="{
            threshold: .5
        }"
        transition="scale-transition"
    >
        <v-card
            :href="`https://www.reddit.com/${post.data.url}`"
            hover
            ripple
            target="blank"
            class="mx-auto pa-2"
            min-width="260"
            height="260"
        >
            <v-card-text class="d-flex flex-column justify-space-between card__content">
                <div>
                    <div class="d-flex justify-space-between">
                        <div class="overline font-weight-thin">
                            <span class="mb-2">
                                {{ post.data.subreddit }}
                            </span>
                            <br>
                            <small>{{ post.data.created | dateFromUnixTime }}</small>
                            <div class="mt-1">
                                <v-icon
                                    class="mr-1"
                                    size="12"
                                >
                                    fa fa-thumbs-up
                                </v-icon>
                                <span class="subheading mr-2">{{ post.data.ups }}</span>
                                <span class="mr-2">·</span>
                                <v-icon
                                    class="mr-1"
                                    size="12"
                                >
                                    fa fa-award
                                </v-icon>
                                <span class="subheading">{{ post.data.total_awards_received }}</span>
                            </div>
                        </div>

                        <div>
                            <v-img
                                v-if="thumbnail && thumbnail !== 'default'"
                                :src="thumbnail"
                                alt="reddit thumb"
                                class="ml-3"
                                height="60"
                                width="60"
                            />
                            <div
                                v-else
                                class="card__image-placeholder grey darken-2"
                            >
                                <v-icon class="mt-2">
                                    fa fa-image
                                </v-icon>
                                <br>
                                <small>no image</small>
                            </div>
                        </div>
                    </div>
                    <span class="card__title mt-3">
                        {{ post.data.title }}
                    </span>
                </div>

                <div>
                    <v-divider class="mb-2" />
                    <span>
                        <v-icon
                            size="12"
                        >fas fa-user-edit</v-icon>
                        {{ post.data.author }}
                    </span>
                </div>
            </v-card-text>
        </v-card>
    </v-lazy>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    computed: {
        thumbnail() {
            return this.post.data.thumbnail && this.post.data.thumbnail !== 'default' ? this.post.data.thumbnail : null
        }
    }
}
</script>

<style lang="sass" scoped>
.card__title
    overflow: hidden
    text-overflow: ellipsis
    white-space: normal
    -webkit-line-clamp: 4
    -webkit-box-orient: vertical
    display: -webkit-box

.card__content
    height: 100%

.card__image-placeholder
    text-align: center
    height: 60px
    opacity: .6
    width: 60px
</style>

