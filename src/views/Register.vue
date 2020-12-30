<template>
    <div id="login">
    <v-app>
     <v-container grid-list-xl text-xs-center>
       <v-layout row wrap>
         <v-flex xs4 offset-xs4>
           <v-card color="dark" style="padding: 20px; border: 1px; padding-top: 20px">
             <v-card-text>
               <h4 class="display-2 font-weight-bold">Login</h4>
               <hr>
               <br>
               <v-form>
                 <v-text-field 
                   clearable
                   v-model="username"
                   label="Username"
                   prepend-icon="face"
                   type="text"
                 >
                 </v-text-field>
                 <v-text-field 
                   clearable
                   v-model="password"
                   label="Password"
                   prepend-icon="lock"
                   type="password"
                 >
                 </v-text-field>
              </v-form>
              <br>
               <v-btn color="grey darken-2" large @click="loginUser">Login</v-btn>
             </v-card-text>
           </v-card>
         </v-flex>
       </v-layout>
     </v-container>
  </v-app>
</div>
</template>

<script>
import Vuetify from 'vuetify'
import Vue from 'vue'
import { mapActions } from 'vuex'

Vue.use(Vuetify)

export default {
    name: 'register',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
      ...mapActions(['login']),
      loginUser() {
        let user = {
          username: this.username,
          password: this.password
        }
        this.login(user)
        .then((res) => {
          if (res) {
            this.$router.push('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
}
</script>