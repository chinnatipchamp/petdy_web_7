<template>
  <v-app id="inspire" >
     <v-app-bar app color="#804C00  "
       flat
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
       height="0 fade-img-on-scroll"
      dark
      shrink-on-scroll
     >
<v-btn
              icon
              color=""
              @click="blog"
            >
              <v-icon>mdi-less-than</v-icon>
            </v-btn>
      <v-toolbar-title>Pet Breed</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <template v-slot:extension >

        <v-tabs align-with-title fixed-tabs mobile-breakpoint >
          <v-tab  @click="pagecat"> CAT</v-tab>
          <v-tab @click="pagedog"> DOG</v-tab>

        </v-tabs>
      </template>
    </v-app-bar>

    <v-main class="grey lighten-3" >
      <v-container>
        <v-row>
          <v-col>
            <v-card class="grey lighten-3" elevation="0">
              <router-view></router-view>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data () {
    return {
      x: {}
    }
  },

  methods: {
    pagecat () {
      this.$router.push({ name: 'pagecat' })
    },
    pagedog () {
      this.$router.push({ name: 'pagedog' })
    },

    blog () {
      this.$router.push({ name: 'pageBlog' })
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/Style/style.css";
</style>
