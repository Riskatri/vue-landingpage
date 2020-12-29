<template>
    <div id="login">
    <v-app>
     <v-container grid-list-xl text-xs-center>
       <v-layout row wrap>
         <v-flex xs4 offset-xs4>
           <v-card dark color="dark" style="padding: 20px; border: 1px; border-radius: 50px;">
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
                   color="white"
                   counter="10"
                 >
                 </v-text-field>
                 <v-text-field 
                   clearable
                   v-model="password"
                   label="Password"
                   prepend-icon="lock"
                   type="password"
                   color="white"
                 >
                 </v-text-field>
              </v-form>
              <br>
               <v-btn color="grey darken-2" large>Register</v-btn>
             </v-card-text>
           </v-card>
         </v-flex>
       </v-layout>
     </v-container>
  </v-app>
</div>
</template>

<script>
export default {
    el: '#login',
    data() {
        return {
            username: '',
            password: '',
        }
    }
}
</script>