<template>
  <div id="container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

:root {
  --primary-color: #39a2a0;
  --light-green: #80c352;
  --dark-green: #1f8b4f;
  --dark-color: #333333;
  --black-color: #191c1f;
  --grey-color: #222b31;
  --light-color: #e9ecef;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222b31;
  width: 100vw;
  height: 100%;
}
</style>
