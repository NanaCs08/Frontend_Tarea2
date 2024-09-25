<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <a class="navbar-brand font-weight-bold" href="#">My Library</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/authors">Authors</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/books">Books</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/publishers">Publishers</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-primary rounded-pill" type="submit">
              <i class="fas fa-search"></i> Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.navbar {
  border-bottom: 2px solid #007bff; /* Blue border for separation */
}

.navbar-brand {
  font-size: 1.5rem; /* Larger brand name */
}

.nav-link {
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: #0056b3; /* Darker blue on hover */
  font-weight: bold; /* Make text bold on hover */
}

.container {
  max-width: 1200px; /* Centering the content */
}

.btn-outline-primary {
  padding: 0.5rem 1rem; /* Increase button size */
}

.dropdown-menu {
  background-color: #f8f9fa; /* Light background for dropdown */
}
</style>
