<template>
  <div class="content">
    <div class="postList">
      <div class="postItem" v-for="n in 10" :key="n">
        <img
          src=""
          alt=""
          width="100%"
          height="100%"
          style="background: #eee"
        />
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
    </div>
  </div>
  <PostDetails />
  <PostUpload />
</template>
<script setup>
import PostAction from '../components/PostAction.vue';
import TheAvatar from '../components/TheAvatar.vue';
import PostDetails from '../components/PostAction.vue';
import PostUpload from '../components/PostUpload.vue';
</script>
