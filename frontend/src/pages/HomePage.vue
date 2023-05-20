<template>
  <div>
    <PostList>
      <PostItem v-for="post in posts" :post="post" :key="post.id" />
    </PostList>
  </div>
  <!-- <PostDetails /> -->
  <PostUpload v-if="showPostUpload" />
</template>
<script setup>
import PostList from '../components/PostList.vue';
import PostItem from '../components/PostItem.vue';
// import PostDetails from '../components/PostAction.vue';
import PostUpload from '../components/PostUpload.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

const store = useStore();
const showPostUpload = computed(() => store.state.showPostUpload);
const posts = computed(() => store.state.post.list);

onMounted(() => {
  store.dispatch('loadAllPosts');
});
</script>
