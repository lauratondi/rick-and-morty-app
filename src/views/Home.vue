<template>
  <div class="cards">
    <h5 class="title">Main Characters</h5>
    <div class="dropdown">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort By
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li class="dropdown-item" @click="sortByCreated()">Last Created</li>
        <li class="dropdown-item" @click="sortByName()">Name</li>
      </ul>
    </div>
    <!-- / sorting dropdown -->

    <div class="row">
      <div v-for="character in mainCharacters" :key="character.id">
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
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
// import axios from 'axios';

export default defineComponent({
  name: 'MainCharacters',

  setup() {
    const mainCharacters = ref([] as any);

    onMounted(async () => {
      // const { data } = await axios.get(
      //   'https://rickandmortyapi.com/api/character/1,2,3,4,5,7,11,183,14,20'
      // );

      // console.log(data);
      // mainCharacters.value = data;

      const res = await fetch(
        'https://rickandmortyapi.com/api/character/5,7,11,183,14,20,1,2,3,4,'
      );

      const data = await res.json();
      mainCharacters.value = data;
      console.log(mainCharacters.value);
    });

    const sortByName = async () => {
      mainCharacters.value.sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      );
    };

    const sortByCreated = async () => {
      mainCharacters.value.sort((a: any, b: any) => {
        return b.created.localeCompare(a.created);
      });
    };

    return {
      mainCharacters,
      sortByName,
      sortByCreated,
    };
  },
});
</script>

<style scoped>
.cards {
  width: 100%;
  margin-top: 15%;
  margin-bottom: 5%;
  overflow: hidden;
}
.title {
  text-align: center;
  color: white;
}
/* Sorting dropdown */
.dropdown {
  display: flex;
  justify-content: flex-end;
  margin-right: 7%;
  margin-bottom: 2%;
}
.btn-secondary {
  background-color: var(--dark-green);
}
.btn-secondary.dropdown-toggle {
  background-color: var(--dark-green);
  border: var(--dark-green);
}
ul {
  background-color: var(--dark-green);
}
li {
  background-color: var(--dark-green);
  color: white;
}
li:hover {
  background-color: var(--dark-green);
  cursor: pointer;
}

/* Cards container */
.row {
  justify-content: center;
  margin-right: 0;
  margin-left: 0;
}
.row > * {
  width: unset;
}

.col-sm-3 {
  padding-bottom: 2%;
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
  border: red 5px solid;
}

img {
  border-radius: 1%;
}
.card-body {
  justify-content: space-between;
}

.card-text {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.card-text > * {
  margin-right: 2%;
}

a:hover {
  text-decoration: none !important;
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
