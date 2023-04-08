<template>
  <TheModal>
    <div class="postDetails">
      <img class="postImage" src="" alt="" />
      <div class="postMeta">
        <div class="author">
          <TheAvatar />
          <span>vivian</span>
        </div>
        <pre class="postDesc">This is my house!</pre>
        <div class="comments">
          <div class="comment" v-for="n in 10" :key="n">
            <TheAvatar />
            <span class="user">amy</span>
            <span class="commentPunDate">1d</span>
            <p class="commentContent">NICE!</p>
          </div>
        </div>
        <div class="actions">
          <PostAction />
          <span class="postPubDate">12h</span>
          <input
            type="text"
            name="comment"
            id=""
            class="commentInput"
            placeholder="留言吧!"
          />
          <button class="commentBtn">POST</button>
        </div>
      </div>
    </div>
  </TheModal>
</template>
<script setup>
import PostAction from './PostAction.vue';
import TheAvatar from './TheAvatar.vue';
import TheModal from './TheModal.vue';
</script>
