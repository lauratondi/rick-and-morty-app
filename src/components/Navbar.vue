<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" role="navigation">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../asset/rick-e-morty.jpeg" alt="" />
      </router-link>
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
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
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
  flex-wrap: nowrap;
  padding-right: 5%;
  padding-left: 5%;
  background-color: #80c352;
  border-bottom: #1f8b4f 3px solid;
}
.navbar-brand {
  width: 30%;
}
img {
  width: 50%;
}
.navbar-toggler {
  font-size: 1rem;
}
.navbar-collapse {
  flex-grow: unset !important;
}
li {
  color: black;
}
</style>
