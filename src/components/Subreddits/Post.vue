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
                        <div>
                            <small class="d-block mb-2 overline font-weight-thin">
                                {{ post.data.subreddit }}
                            </small>

                            <span>{{ post.data.created | dateFromUnixTime }}</span>
                        </div>

                        <div>
                            <v-img
                                v-if="thumbnail"
                                :src="thumbnail"
                                alt="reddit thumb"
                                class="ml-3"
                                height="60"
                                width="60"
                            />
                            <template v-else>
                                <v-icon>
                                    fa fa-image
                                </v-icon>

                                <small>no image</small>
                            </template>
                        </div>
                    </div>
                    <span class="card__title mt-3">
                        {{ post.data.title }}
                    </span>
                </div>

                <div>
                    <v-divider class="mb-2" />
                    <div class="d-flex justify-space-between align-center">
                        <span>
                            <v-icon
                                size="12"
                            >fas fa-user-edit</v-icon>
                            {{ post.data.author }}
                        </span>
                        <div>
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
            return this.post.data.thumbnail || null
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
</style>

