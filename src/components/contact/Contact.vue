<template>
  <v-sheet class="img-container">
    <v-container id="contact-container">
      <v-row>
        <v-col class="col-12">
          <header class="d-flex justify-center flex-column align-center">
            <h1 class="mt-14">SAY HELLO.</h1>
            <v-form
              @submit.prevent="sendEmail"
              onsubmit="return false;"
              ref="form"
              v-model="valid"
              lazy-validation
              class="form d-flex justify-center mt-2 w100"
            >
              <v-row :class="{'d-none': currentStep === 2}">
                <v-col class="col-4 offset-4 pr-0 d-flex justify-center">
                  <v-text-field
                    name="user_email"
                    class="email"
                    label="Your Email"
                    v-model="recruiterEmail"
                    @keyup.enter="triggerNext"
                    required
                    :rules="emailRules"
                  ></v-text-field>
                </v-col>
                <v-col class="col-4 pt-0 pl-0 d-flex align-center">
                  <v-btn class="ml-n6 mt-2" @click="validate" icon color="#5e7682" ref="nextBtn">
                    <v-icon class="gray-blue-text">mdi-arrow-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-if="currentStep === 2" class="align-center">
                <v-col class="col-4 offset-4 pr-0 d-flex justify-center">
                  <v-textarea
                    name="message"
                    class="message"
                    label="Write your message"
                    v-model="recruiterMessage"
                    autofocus
                    required
                    counter
                    :rules="messageRules"
                    maxlength="281"
                  ></v-textarea>
                </v-col>
                <v-col class="col-4 pt-0 liquid-button-container">
                  <button v-if="valid">
                    <liquid-button bgcolor="gray-blue-bg">
                      <span>SEND</span>
                    </liquid-button>
                  </button>
                </v-col>
              </v-row>
            </v-form>
            <span class="gray-blue-text">Step {{ currentStep }} / 2</span>
          </header>
        </v-col>
        <v-col class="col-12">
          <main>
            <h1 class="mt-0">CONTACT ME</h1>
            <div class="pl-2 text-container">
              <h5 class="get-in-touch">Get in touch</h5>
              <h5 class="work-together">Let's work together.</h5>
              <p>{{recruiterMessage ? recruiterMessage : defaultMessage}}</p>
              <a href="mailto:danlosadrian@gmail.com" target="_blank">
                <p>
                  <v-icon>mdi-email</v-icon>
                  {{ email }}
                </p>
              </a>
              <p>
                <v-icon>mdi-phone</v-icon>
                {{ phone }}
              </p>
              <a href="https://www.linkedin.com/in/adrian-danlos/" target="_blank">
                <p>
                  <v-icon>mdi-linkedin</v-icon>
                  {{ linkedin }}
                </p>
              </a>
              <a href="https://github.com/AdrianDanlos" target="_blank">
                <p>
                  <v-icon>mdi-github</v-icon>
                  {{ github }}
                </p>
              </a>
            </div>
          </main>
        </v-col>
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
      defaultMessage:
        "Got a project? Drop me a line if you want to work together on something exciting. Big or small. Web or mobile.",
      valid: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      messageRules: [v => (v && v.length <= 280) || "Max 280 characters"]
    };
  },
  methods: {
    triggerNext() {
      this.$refs.nextBtn.$el.click();
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.currentStep++;
      }
    },
    sendEmail: e => {
      emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          e.target,
          "user_OaXWIe7otvExuMDlomK64"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.img-container {
  background-image: url("/images/contact-bg.jpg");
  background-size: cover;
  background-position: center;
  height: 1200px;
  position: relative;
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
</style>