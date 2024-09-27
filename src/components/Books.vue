<template>
  <div>
    <h1>Books</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
          <th>Copyright</th>
          <th>Language</th>
          <th>Pages</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.edition }}</td>
          <td>{{ book.copyright }}</td>
          <td>{{ book.language }}</td>
          <td>{{ book.pages }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Books',
  data() {
    return {
      books: []
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('https://master--backendtarea2dcs.netlify.app/.netlify/functions/getBooks');
        this.books = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #f2f2f2;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  text-align: left;
}
</style>
