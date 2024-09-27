<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Authors</h1>
    <table class="table table-striped table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Nationality</th>
          <th>Birth Year</th>
          <th>Fields</th>
          <th>Books</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="author in authors" :key="author.id">
          <td>{{ author.id }}</td>
          <td>{{ author.author }}</td>
          <td>{{ author.nationality }}</td>
          <td>{{ author.birth_year }}</td>
          <td>{{ author.fields }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="book in author.books" :key="book.book_id">
                {{ book.title }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Authors',
  data() {
    return {
      authors: []
    };
  },
  created() {
    this.fetchAuthors();
  },
  methods: {
    async fetchAuthors() {
      try {
        const response = await axios.get('https://master--backendtarea2dcs.netlify.app/.netlify/functions/getAuthors');
        this.authors = response.data;
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    }
  }
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
