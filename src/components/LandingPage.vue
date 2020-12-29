<template>
<div>
    <section>
        <VideoParallax :src="video" height="600">
          <v-layout column align-center justify-center class="white--text">
            <v-btn class="imageMain" dark href="/register">
              Get Started
            </v-btn>
          </v-layout>
        </VideoParallax>
      </section>
    <section>
    </section>
    <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="curaousel">
              <h2 class="headline">The best way to share your amazing experience</h2>
              <span class="subheading">
                No more restrictions, no more limits
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="icon">public</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout">
                      <div class="headline text-xs-center">Reach the world</div>
                    </v-card-title>
                    <v-card-text>
                      You can see amazing physics in the world and you can research all about physics
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="icon">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout">
                      <div class="headline">Fast learning</div>
                    </v-card-title>
                    <v-card-text>
                      You can learning anything about physics in here
                      with experienced tutors
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="icon">share</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout">
                      <div class="headline text-xs-center">Create new connections</div>
                    </v-card-title>
                    <v-card-text>
                      you can create new connection with new scientist for explore your experience. lets connect now!
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
    </section>
    <v-layout column align-center justify-center>
        <div class="headline white--text curaousel">We are dropping cool news and opportunities on socials</div>
    </v-layout>
    <section>
     <v-layout column align-center justify-center>
        <v-parallax :src="image.main" height="380">
          <v-layout class="social">
              <v-icon x-large dark>fab fa-facebook-f</v-icon>
              <v-spacer></v-spacer>
              <v-icon x-large dark>fab fa-twitter</v-icon>
              <v-spacer></v-spacer>
              <v-icon x-large dark>fab fa-reddit-alien</v-icon>
              <v-spacer></v-spacer>
              <v-icon x-large dark>fab fa-instagram</v-icon>
              <v-spacer></v-spacer>
              <v-icon x-large dark>fab fa-discord</v-icon>
              <v-spacer></v-spacer>
            </v-layout>
        </v-parallax>
     </v-layout>
      </section>
</div>
</template>

<script>
import imageMain from '../assets/physics.jpg'
import imageSocial from '../assets/physics3.jpg'
import VideoURL from '../assets/physics.mp4'
import VideoParallax from 'vuetify-video-parallax';

export default {
    components: {
        VideoParallax,
    },
    data() {
        return {
            image: {
                main: imageMain,
                socialCover: imageSocial
            },
            video: VideoURL
        }
    },
}
</script>

<style scoped>
    .imageMain {
        align-content: center;
        width: 150px;
        margin-left: 50%;
        margin-top: 2%;
    }
    .layout {
        justify-content: center;
    }
    .curaousel {
        padding-top: 50px;
        margin-left: 30%;
        padding-bottom: 50px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: x-large;
    }
    .subheading {
        margin-left: 90px;
        font-family: 'Courier New', Courier, monospace;
    }
    .icon {
        padding-left: 45%;
    }
    .social {
        justify-content: center;
        margin-left: 175px;
        padding-top: 175px;
    }
</style>>