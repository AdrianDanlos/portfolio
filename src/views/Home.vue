<template>
  <div id="web-container">
    <intro></intro>
    <about-me></about-me>
    <featured-projects></featured-projects>
  </div>
</template>

<script>
import Intro from "./../components/intro/Intro";
import AboutMe from "./../components/about_me/AboutMe";
import FeaturedProjects from "./../components/featured_projects/FeaturedProjects";
export default {
  components: {
    Intro,
    AboutMe,
    FeaturedProjects
  }
};
</script>

