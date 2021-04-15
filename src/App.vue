<template>
  <div id="container">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

:root {
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
  overflow-x: hidden !important;
  width: 100vw;
  height: 100vh;
}

p {
  font-weight: 400;
}
b {
  font-weight: 500;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--grey-color);
  overflow-x: hidden;
}
</style>
