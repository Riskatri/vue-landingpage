<template>
<div>
    <v-toolbar class="white">
     <!-- <v-toolbar-side-icon><img :src="logo" alt="Vuetify.js" height="100%"></v-toolbar-side-icon> -->
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-dialog>
            <v-btn text class="pink lighten-3" @click="dialog = true">Sign In</v-btn>
        </v-dialog>
      </v-toolbar-items>
    </v-toolbar>
    <v-section v-if="notLoggedIn">
        <LandingPage/>
    </v-section>
</div>
</template>

<script>

import LandingPage from './LandingPage.vue'
export default {
    components: {
        LandingPage
    },
    data() {
        return {
            title: 'Physics',
            notLoggedIn: true
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