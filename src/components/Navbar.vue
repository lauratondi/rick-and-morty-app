<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" role="navigation">
    <router-link class="navbar-brand" to="/">Rick & Morty</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/"
            >Home
            <!-- <span class="sr-only">(current)</span> -->
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/characters"
            >Characters</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/random">Random</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  margin-right: 5%;
  margin-left: 5%;
}
</style>
