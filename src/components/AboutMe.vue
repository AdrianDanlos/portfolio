<template>
  <v-sheet color="#ffffee">
    <v-container class="flex-column fullHeight">
      <!-- FIRST ROW -->
      <v-row class="content-wrapper align-center flex-column flex-sm-row mt-15">
        <v-col sm12 md6>
          <h4>A FEW WORDS ABOUT ME</h4>
          <h1
            class="mb-4"
          >I'm a Frontend Developer who enjoys creating things that live on the internet, whether that be websites, applications, or anything in between.</h1>

          <div id="dynamic-text-container">
            <!-- PASSION -->
            <transition name="fade">
              <div v-if="currentText === 'PASSION'" class="dynamic-text">
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
              <div v-if="currentText === 'TEAMWORK'" class="dynamic-text">
                <p>
                  I'm well aware about the importance of
                  <span
                    class="special-text"
                  >interpersonal skills</span> when building projects. Thus, have read some of the most popular books such as
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
              <div v-if="currentText === 'PROBLEM SOLVING'" class="dynamic-text">
                <p>
                  <span class="special-text">Logical and Rational Thinking</span> stand out as my main tools to face any kind of challenge and push innovation. Since I was a kid I played games based on Logic and Decision Making, hitting
                  <span
                    class="special-text"
                  >profesional level</span> in games such as Hearthstone and League of Legends.
                </p>
              </div>
            </transition>
            <h3>
              <span @mouseover="setNewText('PASSION')">PASSION</span> -
              <span @mouseover="setNewText('TEAMWORK')">TEAMWORK</span> -
              <span @mouseover="setNewText('PROBLEM SOLVING')">PROBLEM SOLVING</span>
            </h3>
          </div>
        </v-col>
        <v-col sm12 md6 id="img-about-me-container">
          <img src="/images/about-me.svg" alt />
        </v-col>
      </v-row>

      <!-- SECOND ROW -->
      <v-row class="content-wrapper">
        <v-col md6 class="arrow-container d-none d-sm-block">
          <img id="img-arrow" src="/images/arrow.png" alt />
        </v-col>
        <v-col sm12 md6 class="d-flex flex-column">
          <isometric-icons @displayTechnology="displayTechnology($event)"></isometric-icons>
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
      technologies: [
        "Always learning",
        "VueJS",
        "JavaScript",
        "Laravel",
        "PHP",
        "HTML5",
        "SASS"
      ],
      currentTech: 0,
      currentText: "PASSION"
    };
  },
  methods: {
    displayTechnology(n) {
      this.currentTech = n;
    },
    setNewText(keyWord) {
      this.currentText = keyWord;
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
h3 span {
  display: inline-block;
  text-decoration: none;
}

h3 span::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: rgb(121, 121, 121);
  transition: width 0.3s;
}

h3 span:hover::after {
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
  margin: 0;
}
h4,
h3 {
  font-family: montserrat;
  letter-spacing: 4px;
  font-weight: $regular;
  color: rgb(71, 71, 71);
}
.special-text {
  color: $orange;
}
#skills-legend {
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  transform: rotate(-25deg) skew(25deg);
  // margin-left: 159px;
  // margin-top: -31px;
  font-family: Montserrat;
  font-size: 54px;
  color: gray;
  font-weight: 100;
  span {
    margin-left: 167px;
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
  left: 20px;
  top: -45px;
  width: 700px;
}
</style>