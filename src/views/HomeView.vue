<template>
  <main>
    <TheWelcome />
    <nav>
      <button @click="showBooks = true; showAuthors = false; showPublishers = false">Books</button>
      <button @click="showAuthors = true; showBooks = false; showPublishers = false">Authors</button>
      <button @click="showPublishers = true; showBooks = false; showAuthors = false">Publishers</button>
    </nav>

    <Books v-if="showBooks" />
    <Authors v-if="showAuthors" />
    <Publishers v-if="showPublishers" />
  </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import Books from '../components/Books.vue';
import Authors from '../components/Authors.vue';
import Publishers from '../components/Publishers.vue';
import { ref } from 'vue';

const showBooks = ref(false);
const showAuthors = ref(false);
const showPublishers = ref(false);
</script>

<style>
nav {
  margin: 20px 0;
}
button {
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
