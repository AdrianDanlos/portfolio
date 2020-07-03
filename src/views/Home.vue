<template>
  <div id="web-container">
    <intro></intro>
    <v-sheet height="100vh" color="purple">
      <v-container class="content-wrapper pa-5 pa-md-3"></v-container>
    </v-sheet>
  </div>
</template>

<script>
import Intro from "./../components/Intro";
export default {
  components: {
    Intro
  }
};
</script>

