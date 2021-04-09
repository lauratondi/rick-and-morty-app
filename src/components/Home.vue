<template>
  <div class="cards">
    <button @click="sortByName()">Sort By Name</button>
    <div class="row">
      <div v-for="character in mainCharacters" :key="character.id">
        <div class="col-sm-3">
          <router-link :to="`/characters/${character.id}`">
            <div class="card" style="width: 18rem">
              <img :class="character.status" :src="character.image" alt=".." />
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
  margin-top: 10%;
  width: 100%;

  overflow: hidden;
}

.row {
  justify-content: center;
  margin-right: 0;
  margin-left: 0;
}

.character.status Alive {
  border-block-end-color: green 1px solid;
}

.card Dead {
  border: 1px solid red;
}

.col-sm-3 {
  /* display: flex;
  justify-content: center; */
  padding-bottom: 2%;
}

.card {
  border-radius: 2%;
  color: black !important;
}
.card:hover {
  text-decoration: none !important;
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
</style>
