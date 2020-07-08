<template>
  <v-sheet color="#ffffee">
    <v-container class="flex-column" id="about-me-container">
      <!-- FIRST ROW -->
      <v-row class="content-wrapper align-center flex-column flex-sm-row mt-7 mt-sm-15">
        <v-col class="col-12 col-sm-6">
          <h4>A FEW WORDS ABOUT ME</h4>
          <h1
            class="mb-4"
          >I'm a Frontend Developer who enjoys creating things that live on the internet, whether that be websites, applications, or anything in between.</h1>

          <div id="dynamic-text-container">
            <!-- CORE SKILLS -->
            <transition name="fade">
              <div v-if="currentSection === 'CORE SKILLS'" class="dynamic-text">
                <p>
                  Despite being specialized on Frontend technologies I have a broad experience building performant
                  <span
                    class="special-text"
                  >end-to-end applications</span>. In 2019 I joined the engineering team at Ibai Sistemas where I had the opportunity to work on a
                  <span
                    class="special-text"
                  >wide variety of projects</span>.
                </p>
                <p>I feel at home in young, fresh, and fast-paced organizations.</p>
              </div>
            </transition>

            <!-- TEAMWORK -->
            <transition name="fade">
              <div v-if="currentSection === 'TEAMWORK'" class="dynamic-text">
                <p>
                  I'm well aware about the importance of
                  <span
                    class="special-text"
                  >interpersonal skills</span> when building projects. Thus, I have read some of the most popular books on the topic such as
                  <span
                    class="special-text"
                  >'How To Win Friends and Influence People'</span>, 'The Power of Introvers', 'How To Stop Worrying and Start Living' and many more to develop my social skills and contribute to a
                  <span
                    class="special-text"
                  >pleasant team environment</span>.
                </p>
              </div>
            </transition>

            <!-- PROBLEM SOLVING -->
            <transition name="fade">
              <div v-if="currentSection === 'PROBLEM SOLVING'" class="dynamic-text">
                <p>
                  <span class="special-text">Logical and Rational Thinking</span> stand out as my main tools to face any kind of challenge and push innovation. Since I was a kid I have played games based on Logic and Decision Making, hitting
                  <span
                    class="special-text"
                  >professional level</span> in games such as Hearthstone and League of Legends.
                </p>
              </div>
            </transition>
            <h3>
              <span
                @mouseover="setNewText('CORE SKILLS')"
                class="mb-3 mb-sm-0"
                :class="!userInteracted ? 'defaultSectionTitle' : 'currentSectionTitle'"
              >CORE SKILLS</span>
              <span class="mx-2 d-none d-sm-inline-block">-</span>
              <span
                @mouseover="setNewText('TEAMWORK')"
                class="mb-3 mb-sm-0"
                :class="{currentSectionTitle: userInteracted}"
              >TEAMWORK</span>
              <span class="mx-2 d-none d-sm-inline-block">-</span>
              <span
                @mouseover="setNewText('PROBLEM SOLVING')"
                class="mb-3 mb-sm-0"
                :class="{currentSectionTitle: userInteracted}"
              >PROBLEM SOLVING</span>
            </h3>
          </div>
        </v-col>
        <v-col class="col-12 col-sm-6" id="img-about-me-container">
          <img src="/images/about-me.svg" alt />
        </v-col>
      </v-row>

      <!-- SECOND ROW -->
      <v-row class="content-wrapper">
        <v-col class="col-12 col-sm-6 arrow-container d-none d-sm-block">
          <img id="img-arrow" src="/images/arrow.png" alt />
        </v-col>
        <v-col class="col-12 col-sm-6 d-flex flex-column isometric-container mt-n11 mt-sm-0">
          <isometric-icons class="mt-13 mt-sm-0" @displayTechnology="displayTechnology($event)"></isometric-icons>
          <p id="skills-legend">
            <span>{{ technologies[currentTech] }}</span>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import IsometricIcons from "./IsometricIcons";
export default {
  components: {
    IsometricIcons
  },
  data() {
    return {
      technologies: ["VueJS", "JavaScript", "Laravel", "PHP", "HTML5", "SASS"],
      currentTech: 0,
      currentSection: "CORE SKILLS",
      technologiesLargeText: "Always Learning",
      technologiesSmallText: "CORE",
      userInteracted: false
    };
  },
  methods: {
    displayTechnology(n) {
      this.currentTech = n;
    },
    setNewText(keyWord) {
      this.userInteracted = true;
      this.currentSection = keyWord;
    }
  },
  mounted() {
    if (screen.width < 600) {
      this.technologies.unshift(this.technologiesSmallText);
    } else {
      this.technologies.unshift(this.technologiesLargeText);
    }
  }
};
</script>

<style scoped lang="scss">
#dynamic-text-container {
  position: relative;
  height: 165px;
}
.dynamic-text {
  position: absolute;
}
h3 {
  position: absolute;
  bottom: 0;
}
.currentSectionTitle, .defaultSectionTitle {
  display: inline-block;
}
h3 .currentSectionTitle::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: $gray-blue;
  transition: width 0.3s;
}

h3 .currentSectionTitle:hover::after {
  width: 100%;
}

.defaultSectionTitle::after {
  content: "";
  display: block;
  height: 2px;
  background: $gray-blue;
  transition: width 0.3s;
  width: 100%;
}

.arrow-container {
  position: relative;
}
.text-layout {
  margin-top: 60px;
}
p {
  font-weight: 300;
}
h1 {
  font-family: Montserrat;
  color: rgb(71, 71, 71);
  color: $dark-gray;
  margin: 0;
}
h4,
h3 {
  font-family: montserrat;
  letter-spacing: 2px;
  font-weight: $regular;
  color: $gray-blue;
}
.special-text {
  color: $orange;
}
#skills-legend {
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  transform: rotate(-25deg) skew(25deg);
  font-family: Montserrat;
  font-size: 50px;
  color: gray;
  font-weight: 100;
  span {
    margin-left: 161px;
    margin-top: 10px;
  }
}
#img-about-me-container {
  @include flexCenter();
  img {
    width: 350px;
  }
}

#img-arrow {
  position: absolute;
  left: 30px;
  top: -45px;
  width: 700px;
}
@media (min-width: 600px) {
  #about-me-container {
    @include fullHeight();
  }
}
@media (max-width: 599px) {
  .isometric-container {
    overflow: hidden;
  }
  #skills-legend {
    span {
      margin-left: 80px;
      margin-top: 10px;
    }
  }
  #dynamic-text-container {
    position: relative;
    height: 370px;
  }
  h3 {
    @include flexCenter();
    flex-direction: column;
    width: 100%;
  }
}
</style>