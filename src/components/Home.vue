<template>
  <div class="cards">
    <div class="btn-container">
      <button class="btn" @click="sortByName()">Sort By Name</button>
    </div>
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
import { onMounted, ref } from 'vue';
// import axios from 'axios';

export default {
  name: 'MainCharacters',

  setup() {
    const mainCharacters = ref([]);

    onMounted(async () => {
      // const { data } = await axios.get(
      //   'https://rickandmortyapi.com/api/character/1,2,3,4,5,7,11,183,14,20'
      // );

      // console.log(data);
      // mainCharacters.value = data;
      const res = await fetch(
        'https://rickandmortyapi.com/api/character/1,2,3,4,5,7,11,183,14,20'
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
    return {
      mainCharacters,
      sortByName,
    };
  },
};
</script>

<style scoped>
.cards {
  width: 100%;
  margin-top: 15%;
  overflow: hidden;
}
.btn-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 7%;
  margin-bottom: 2%;
}
.btn {
  color: white;
  background-color: #1f8b4f;
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

a:hover {
  text-decoration: none !important;
}

/* 668px */
@media (max-width: 43em) {
  .card {
    width: 15rem;
  }

  .btn-container {
    margin-right: 17%;
  }
  .btn {
    font-size: 12px;
    padding: 0.1rem 0.3rem;
  }
}
</style>
