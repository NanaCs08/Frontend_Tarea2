<template>
  <div class="container my-5">
    <h1 class="mb-4 text-center text-primary">Publishers</h1>
    <table class="table table-bordered table-striped">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Publisher</th>
          <th>Country</th>
          <th>Founded</th>
          <th>Genre</th>
          <th>Books</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="publisher in publishers" :key="publisher.id">
          <td>{{ publisher.id }}</td>
          <td>{{ publisher.publisher }}</td>
          <td>{{ publisher.country }}</td>
          <td>{{ publisher.founded }}</td>
          <td>{{ publisher.genere }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="book in publisher.books" :key="book.book_id">
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
  name: 'Publishers',
  data() {
    return {
      publishers: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/publishers')
      .then(response => {
        this.publishers = response.data;
      })
      .catch(error => {
        console.error('Error fetching publishers:', error);
      });
  }
}
</script>

<style scoped>
.table {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

thead th {
  background-color: #007bff; /* Bootstrap primary color */
  color: white; /* White text for headers */
}

tbody tr:hover {
  background-color: #f1f1f1; /* Light grey on row hover */
}
</style>
