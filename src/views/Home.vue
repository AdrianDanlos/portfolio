<template>
  <div id="web-container">
    <intro></intro>
    <about-me></about-me>
    <v-sheet height="100vh" color="white">
      <v-container class="content-wrapper pa-5 pa-md-3"></v-container>
    </v-sheet>
  </div>
</template>

<script>
import Intro from "./../components/intro/Intro";
import AboutMe from "./../components/about_me/AboutMe";
export default {
  components: {
    Intro,
    AboutMe
  }
};
</script>

