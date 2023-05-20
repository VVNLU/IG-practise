<template>
  <div class="postItem">
    <img
      :src="post.image"
      alt=""
      width="100%"
      height="100%"
      style="background: #eee"
    />
    <div class="postInfo">
      <div class="postMeta">
        <TheAvatar :src="post?.user?.avatar" />
        <span>{{ post?.user?.name }}</span>
        <span class="postPubDate">{{ dateToRelative(post.publishedAt) }}</span>
        <PostAction
          :likes="post.liked_bies"
          :comments="post.comments"
          :favors="post.favored_bies"
          :likedByMe="post.likedByMe"
          :favoredByMe="post.favoredByMe"
          @likeClick="this.$store.dispatch('toggleLike', post.id)"
          @favorClick="this.$store.dispatch('toggleFavor', post.id)"
        />
      </div>
      <div class="postDesc">
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import PostAction from '../components/PostAction.vue';
import TheAvatar from '../components/TheAvatar.vue';
import { dateToRelative } from '../utils/date';

defineProps({
  post: {
    type: Object,
    // default: {},
  },
});
</script>
<style scoped>
.postItem {
  box-shadow: 0px 12px 24px rgb(0, 0, 0, 0.08);
  border-radius: 8px;
}

.postInfo {
  padding: 24px;
}
.postItem > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}
.postMeta {
  display: grid;
  grid-template-areas:
    'avatar name actions'
    'pubDate pubDate action';
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
}
.postMeta .avatar {
  grid-area: avatar;
}
.postMeta .postPubDate {
  grid-area: pubDate;
  color: #9f9f9f;
  font-size: 14px;
}
.postAction {
  grid-area: actions;
  justify-self: end;
}
.postDesc {
  margin-top: 28px;
  white-space: pre-line;
}
</style>
