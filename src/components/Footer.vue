<template>
  <footer>
    <div class="info">
      <p>
        <a
          href="https://www.en.d-tt.nl/"
          target="_blank"
          rel="noopener noreferrer"
          >&copy; DDT</a
        >
      </p>
    </div>
    <div>|</div>
    <!-- Offcanvas -->
    <div id="offcanvas">
      <button
        class="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        Sitemap
      </button>

      <div
        class="offcanvas offcanvas-bottom"
        tabindex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasBottomLabel">Sitemap</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body small">
          <h6><router-link to="/">Main Characters</router-link></h6>
          <h6><router-link to="/characters">Characters</router-link></h6>
          <h6><router-link to="/locations">Locations</router-link></h6>
          <h6><router-link to="/random">Random</router-link></h6>
        </div>
      </div>
    </div>
    <!-- /Offcanvas -->
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped>
footer {
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  width: 100%;
  height: 15%;
  border-top: var(--dark-green) 1px solid;
  color: white;
}
/* Offcanvas */
.btn {
  color: white;
  border: none;
}

.offcanvas {
  background-color: var(--dark-color);
  color: white;
}
.offcanvas-body {
  display: flex;
  justify-content: space-evenly;
}

a {
  color: white;
}
/* 668px */
@media (max-width: 43em) {
  .offcanvas-body {
    display: inline;
  }
}
</style>
