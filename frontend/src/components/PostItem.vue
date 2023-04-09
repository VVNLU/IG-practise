<template>
  <div class="postItem">
    <img src="" alt="" width="100%" height="100%" style="background: #eee" />
    <div class="postInfo">
      <div class="postMeta">
        <TheAvatar />
        <span>vivian</span>
        <span class="postPubDate">12小時前發佈</span>
        <PostAction />
      </div>
      <div class="postDec">
        <p>HI iam VVN</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import PostAction from '../components/PostAction.vue';
import TheAvatar from '../components/TheAvatar.vue';
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
