<template>
<div >
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

      <v-toolbar-title>Community</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <template v-slot:extension >

        <v-tabs align-with-title fixed-tabs mobile-breakpoint >
          <v-tab @click="Blog">Blog</v-tab>
          <v-tab @click="lost">Lost&Found</v-tab>
          <v-tab @click="Find">Find Home</v-tab>
          <v-tab @click="Donate">Donate</v-tab>
          <v-tab>Matching</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main class="grey lighten-3" style="margin-Top:0px; padding: 0px; width: 100%">
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
</div>

</template>

<script>

export default {

  name: 'profilesociety',
  data () {
    return {
      dialog: false,
      hidden: false,
      fromlostData: [],
      page: 1,
      itemsPerPage: 8

    }
  },
  methods: {
    lost () {
      this.$router.push({ name: 'pagePetlost' })
    },
    Find () {
      this.$router.push({ name: 'pageFindhome' })
    },
    Blog () {
      this.$router.push({ name: 'pageBlog' })
    },
    Donate () {
      this.$router.push({ name: 'pageDonate' })
    }
  }

}
</script>
<style lang="scss">
@import "../../assets/Style/style.css";
</style>
