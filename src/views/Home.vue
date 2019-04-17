<template>
  <div class="home">
    <v-container>
      <v-layout row wrap>
        <v-flex xs8>
          <v-card>

            <v-carousel height="500">
              <v-carousel-item
                      v-for="(item,i) in items"
                      :key="i"
                      :src="item.src"
                      height="500"
              ></v-carousel-item>
            </v-carousel>

          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card elevation="12">
            <v-card-title class="justify-center">
              <h3 class="display-3 text-xs-center">Register Now</h3>
            </v-card-title>
            <v-form>
              <v-container>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-text-field
                            placeholder="First Name"
                            solo
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                            placeholder="Last Name"
                            solo
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                            placeholder="Email"
                            solo
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                            solo
                            v-model="password"
                            :append-icon="show1 ? 'visibility' : 'visibility_off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                            solo
                            v-model="password2"
                            :append-icon="show2 ? 'visibility' : 'visibility_off'"
                            :type="show2 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Confirm Password"
                            @click:append="show2 = !show2"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
            <v-card-actions class="justify-center">
              <v-btn color="primary">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="display-4 py-5 my-5">A Platform for Services and Skills.</h1>
          <p class="subheading">Vendr is a platform to help you find the services you need.</p>
        </v-flex>
        <v-flex xs12>
          <h1 class="display-4 py-5 my-5">Make Money.</h1>
          <p class="subheading">Sign up to be a service or skill provider today and start reaching out to customers.</p>
        </v-flex>
        <v-flex xs12>
          <h1 class="display-4 py-5 my-5">Get Things Done.</h1>
          <p class="subheading">Sign up to be a service or skill provider today and start reaching out to customers.</p>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>

  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/vendr_screenshot.png')
          },
          {
            src: require('../assets/cleaning.jpg')
          },
          {
            src: require('../assets/cleaning-tips.jpg')
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
        show1: false,
        show2: false,
        password: '',
        password2: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        }
      }
    }
  }
</script>
