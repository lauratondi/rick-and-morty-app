<template>
  <div class="cards">
    <div class="row">
      <div v-for="character in characters" :key="character.id">
        <div class="col-sm-3">
          <router-link :to="`/characters/${character.id}`">
            <div class="card" :class="character.status">
              <img :src="character.image" alt=".." />
              <div class="card-body">
                <h5 class="card-title">{{ character.name }}</h5>
                <p>{{ character.status }} | {{ character.species }}</p>

                <div class="card-text">
                  <p><b>Origin:</b> {{ character.origin.name }}</p>
                  <p><b>Location:</b> {{ character.location.name }}</p>
                </div>
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
import { onMounted, ref, defineComponent } from 'vue';
import { Character } from '@/models/character';
import axios from 'axios';

export default defineComponent({
  name: 'Characters',

  setup() {
    const characters = ref([]);
    const page = ref(1);

    const load = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page.value}`
      );

      const data = await res.json();
      characters.value = data.results;

      console.log(characters.value);
    };
    // const load () {
    //   const data = axios.get(
    //     `https://rickandmortyapi.com/api/character/?page=${page.value}`
    //   );
    //   characters.value = data.results;

    //   console.log(characters.value);
    // };
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
  margin-top: 15%;
  width: 100%;
  overflow: hidden;
}

.row {
  justify-content: center;
  margin-right: 0;
  margin-left: 0;
}

.col-sm-3 {
  /* display: flex;
  justify-content: center; */
  padding-bottom: 2%;
}

.card {
  width: 18rem;
  border-radius: 2%;
  color: white;
  background-color: #333333;
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
  border-radius: 1%;
}
.card-body {
  /* display: flex; */
  justify-content: space-between;
}

.card-text {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.card-text > * {
  margin-right: 2%;
}

a {
  color: black !important;
}

a:hover {
  text-decoration: none !important;
}

.page-link {
  color: white !important;
  background-color: #1f8b4f !important;
  border: #222b31 1px solid;
}
/* 668px */
@media (max-width: 43em) {
  .card {
    width: 15rem;
  }
}
</style>
