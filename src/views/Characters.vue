<template>
  <div class="cards">
    <h5 class="title">All Characters</h5>
    <div class="row">
      <div v-for="character in characters" :key="character.id">
        <div class="col-sm-3">
          <router-link :to="`/characters/${character.id}`">
            <!-- <div class="card" :class="character.status">
              <img :src="character.image" alt=".." />
              <div class="card-body">
                <h5 class="card-title">{{ character.name }}</h5>
                <p>{{ character.status }} | {{ character.species }}</p>

                <div class="card-text">
                  <p><b>Origin:</b> {{ character.origin.name }}</p>
                  <p><b>Location:</b> {{ character.location.name }}</p>
                </div>
              </div>
            </div> -->
            <div class="card text-center" :class="character.status">
              <div class="card-header">
                {{ character.name }}
              </div>
              <div class="card-body">
                <img :src="character.image" alt=".." />
                <p class="card-text"></p>
                <p><b>Origin:</b> {{ character.origin.name }}</p>
                <p><b>Location:</b> {{ character.location.name }}</p>
              </div>
              <div class="card-footer">
                {{ character.status }} | {{ character.species }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="prev"
          >Previous</a
        >
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="next">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent, PropType } from 'vue';
import { Character } from '@/types';

export default defineComponent({
  name: 'Characters',

  setup() {
    const characters = ref([] as any);
    const page = ref(1);

    const load = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page.value}`
      );

      const data = await res.json();
      characters.value = data.results;

      console.log(characters.value);
    };

    onMounted(load);

    const next = async () => {
      page.value++;
      await load();
    };

    const prev = async () => {
      page.value--;
      await load();
    };

    return {
      characters,
      next,
      prev,
    };
  },
});
</script>

<style scoped>
.cards {
  width: 100%;
  margin-top: 15%;

  overflow: hidden;
}

.title {
  text-align: center;
  color: white;
}

.row {
  justify-content: center;
  margin-right: 0;
  margin-left: 0;
  margin-top: 2%;
}

.row > * {
  width: unset;
}

.col-sm-3 {
  padding-bottom: 5%;
}

.card {
  width: 18rem;
  border-radius: 2%;
  color: white;
  background-color: var(--dark-color);
}
.card:hover {
  text-decoration: none !important;
}

.Alive {
  border: green 5px solid;
}

.Dead {
  border: 5px solid red;
}

img {
  width: 100%;
  border-radius: 50%;
}
.card-header {
  border-bottom: white 2px solid;
}
.card-footer {
  border-top: white 2px solid;
}
/* .card-body {
  justify-content: space-between;
}

.card-text {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.card-text > * {
  margin-right: 2%;
} */

/* a {
  color: black !important;
} */

a:hover {
  text-decoration: none !important;
}

/* Pagination */
nav {
  margin-bottom: 5%;
}
.page-link {
  color: white !important;
  background-color: var(--dark-green) !important;
  border: var(--grey-color) 1px solid;
}
/* 668px */
@media (max-width: 43em) {
  .cards {
    padding-top: 5%;
  }
  .card {
    width: 15rem;
  }
}
</style>
