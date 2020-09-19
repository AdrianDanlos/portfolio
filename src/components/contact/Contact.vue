<template>
  <v-sheet class="img-container">
    <v-container id="contact-container">
      <v-row>
        <v-col class="col-12">
          <header class="d-flex justify-center flex-column align-center">
            <h1 class="mt-3 mb-0 mt-sm-14 mb-sm-6">SAY HELLO</h1>
            <v-form
              @submit.prevent="sendEmail"
              onsubmit="return false;"
              ref="form"
              v-model="valid"
              lazy-validation
              class="form d-flex justify-center mt-2 w100"
            >
              <!-- We use d-none instead of v-if so emailjs library can retrieve the user_email text field from the DOM -->
              <v-row :class="{'d-none': currentStep !== 1}" class="w100">
                <v-col class="col-9 col-md-4 offset-1 offset-md-4 pr-0 d-flex justify-center">
                  <v-text-field
                    name="user_email"
                    class="email"
                    label="Your Email"
                    v-model="recruiterEmail"
                    @keyup.enter="triggerNext"
                    required
                    :rules="emailRules"
                    @mouseover="cursorHover"
                    @mouseleave="cursorLeave"
                  ></v-text-field>
                </v-col>
                <v-col class="col-2 col-md-4 pt-0 pl-0 d-flex align-center">
                  <v-btn
                    class="ml-lg-n6 mt-2"
                    @click="validate"
                    icon
                    color="#5e7682"
                    ref="nextBtn"
                    @mouseover="cursorHover"
                    @mouseleave="cursorLeave"
                  >
                    <v-icon class="gray-blue-text">mdi-arrow-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-if="currentStep !== 1" class="w100 align-center">
                <v-col
                  class="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4 pr-sm-0 d-flex justify-center"
                >
                  <transition name="form" mode="out-in">
                    <v-text-field
                      v-if="!emailSent"
                      name="message"
                      class="message"
                      label="Write your message"
                      v-model="recruiterMessage"
                      autofocus
                      required
                      counter
                      @mouseover="cursorHover"
                      @mouseleave="cursorLeave"
                    ></v-text-field>
                    <h5
                      v-else
                      class="mt-0 mt-md-14"
                    >{{ emailError ? "SORRY, MESSAGE COULDN'T BE SENT. PLEASE CONTACT ME VIA EMAIL OR PHONE" : "THANK YOU FOR REACHING OUT! I WILL REPLY YOU AS SOON AS POSSIBLE." }}</h5>
                  </transition>
                </v-col>
                <v-col
                  v-if="!emailSent"
                  class="col-12 col-md-3 col-lg-4 pt-0 liquid-button-container d-flex justify-center justify-lg-start"
                >
                  <button
                    v-if="valid"
                    @mouseover="cursorHover(); setCursorContrast()"
                    @mouseleave="cursorLeave(); removeCursorContrast()"
                    @click="removeCursorContrast()"
                  >
                    <liquid-button bgcolor="light-violet-bg">
                      <span>SEND</span>
                    </liquid-button>
                  </button>
                </v-col>
              </v-row>
            </v-form>
            <span
              v-if="!emailSent"
              class="d-none d-sm-block gray-blue-text"
            >Step {{ currentStep }} / 2</span>
          </header>
        </v-col>

        <main>
          <h1
            :style="[displayContactTitle() ? {opacity: 1} : {opacity: 0}]"
            class="mt-0 pl-1 pl-sm-0"
          >CONTACT ME</h1>
          <div class="pl-2 text-container">
            <div class="d-none d-md-block">
              <h5 class="get-in-touch">Get in touch</h5>
              <h5 class="work-together">Let's work together.</h5>
              <p>{{setBookMessage()}}</p>
            </div>
            <div>
              <a href="mailto:danlosadrian@gmail.com" target="_blank">
                <p>
                  <v-icon>mdi-email</v-icon>
                  <span @mouseover="cursorHover" @mouseleave="cursorLeave">{{ email }}</span>
                </p>
              </a>
              <p>
                <v-icon>mdi-phone</v-icon>
                {{ phone }}
              </p>
              <a href="https://www.linkedin.com/in/adrian-danlos/" target="_blank">
                <p>
                  <v-icon>mdi-linkedin</v-icon>
                  <span @mouseover="cursorHover" @mouseleave="cursorLeave">{{ linkedin }}</span>
                </p>
              </a>
              <a href="https://github.com/AdrianDanlos" target="_blank">
                <p>
                  <v-icon>mdi-github</v-icon>
                  <span @mouseover="cursorHover" @mouseleave="cursorLeave">{{ github }}</span>
                </p>
              </a>
            </div>
          </div>
        </main>
        <footer-vue color="gray-blue-text"></footer-vue>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import personalData from "./../../shared/mixins/personalData";
import emailjs from "emailjs-com";

export default {
  mixins: [personalData],
  data() {
    return {
      currentStep: 1,
      recruiterEmail: null,
      recruiterMessage: null,
      emailSent: false,
      emailError: false,
      defaultMessage:
        "Got a project? Drop me a line if you want to work together on something exciting. Big or small. Web or mobile.",
      valid: true,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      // messageRules: [v => (v && v.length <= 260) || "Max 260 characters"]
    };
  },
  methods: {
    setBookMessage() {
      if (!this.recruiterMessage) return this.defaultMessage;
      else if (this.recruiterMessage.length < 240) return this.recruiterMessage;
      else return this.recruiterMessage.substr(0, 240) + " ...";
    },
    displayContactTitle() {
      if (screen.width > 600) return true;
      else if (this.currentStep !== 2) return true;
      else return false;
    },
    triggerNext() {
      this.$refs.nextBtn.$el.click();
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.currentStep++;
      }
    },
    sendEmail: function (e) {
      this.emailSent = true;
      this.currentStep = 3;
      emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          e.target,
          "user_OaXWIe7otvExuMDlomK64"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            this.emailError = true;
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.img-container {
  background-image: url("/images/contact-bg.jpg");
  background-size: cover;
  background-position: center;
  height: 1200px;
  position: relative;
  overflow: hidden;
  header {
    .form {
      position: relative;
      .email,
      .message {
        width: 500px;
        max-width: 500px;
      }
      ::v-deep .error--text {
        color: $error-text-color !important;
      }
      .liquid-button-container {
        ::v-deep .btn-container {
          width: 180px;
          padding: 15px 50px;
          margin-bottom: 16px;
        }
        button:focus {
          outline: 0;
        }
      }
      h5 {
        color: $gray-blue;
        font-family: $title-font;
        font-weight: $bold;
        white-space: nowrap;
        font-size: 14px;
      }
    }
  }
  main {
    position: absolute;
    left: 53%;
    top: 430px;
    width: 340px;
    height: 600px;
    padding: 8px;
    transform: rotate(-8deg) skew(1deg);
    h1 {
      transform: rotate(0.4deg) skew(3deg);
    }
    .text-container {
      transform: rotate(-1deg) skew(0deg);
    }
    h5 {
      font-size: 25px;
      z-index: 10;
      font-family: $title-font;
    }
    h5.get-in-touch {
      color: darken($light-orange, 20%);
    }
    h5.work-together {
      color: $gray-500;
      &::after {
        content: "";
        display: block;
        margin-top: -15px;
        margin-left: 170px;
        height: 10px;
        border-radius: 30px;
        width: 85px;
        background: $light-orange;
      }
    }
    p {
      font-weight: $thin;
      margin-top: 25px;
      width: 100%;
      word-break: break-all;
    }
  }
  h1 {
    font-size: 35px;
    letter-spacing: 6px;
    font-family: $title-font;
    color: $gray-blue;
    font-weight: $thin;
  }
}

@media (max-width: 600px) {
  .img-container {
    height: 550px;
    min-height: 100vh;
    header {
      .form {
        h5 {
          white-space: break-spaces;
          text-align: center;
        }
      }
    }
    main {
      left: 59%;
      top: 34%;
      font-size: 11px;
      font-weight: $regular;
      h1 {
        font-size: 13px;
        font-weight: $regular;
        letter-spacing: 5px;
      }
      .text-container {
        transform: rotate(-0.5deg) skew(0deg);
      }
      i {
        font-size: 15px;
      }
    }
  }
}
</style>