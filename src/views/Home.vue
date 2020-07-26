<template>
  <div id="web-container">
    <intro></intro>
    <about-me></about-me>
    <featured-projects></featured-projects>
    <experience></experience>
    <contact></contact>
  </div>
</template>

<script>
import Intro from "./../components/intro/Intro";
import AboutMe from "./../components/about_me/AboutMe";
import FeaturedProjects from "./../components/featured_projects/FeaturedProjects";
import Contact from "./../components/contact/Contact";
import Experience from "./../components/experience/Experience";
export default {
  components: {
    Intro,
    AboutMe,
    FeaturedProjects,
    Experience,
    Contact,
  },
};
</script>

