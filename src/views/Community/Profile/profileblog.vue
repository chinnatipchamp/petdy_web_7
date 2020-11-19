<template>
  <v-container>
    <v-app id="inspire">
      <v-app-bar app color="#3DBD91" flat height="50">
        <v-container class="py-0 fill-height">
          <v-row align="center" justify="space-around" class="Text white--text">
            <h2>Article</h2>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-main class="grey lighten-3">
        <v-card>
          <v-container grid-list-xs>
            <v-row>
              <div class="text-start">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="#3DBD91"
                  @click="back">
                  <v-icon dark>
                    mdi-arrow-left
                  </v-icon>
                </v-btn>
              </div>
              <v-col align="end" justify="end" class="champ">
                <span>{{ lostDate }}</span>
                <span class="Text-bold brown--text"> : Last Seen</span></v-col
              ></v-row>
          </v-container>

          <v-row class="champ">
            <v-col align="center" justify="center">
              <h3>{{ blogName }}</h3>
              </v-col>
              </v-row>
          <v-container class="champ">
            <v-row >
              <v-col> <span v-html="blogContent"></span></v-col>
            </v-row>
          </v-container>

        </v-card>
      </v-main>
    </v-app>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profileblog',
  data () {
    return {
      lostDate: '',
      blogName: '',
      blogContent: '',
      blogName1: '',
      blogContent1: '',
      CATSize: '',
      allcontents: []
    }
  },
  async mounted () {
    const result = await axios.post(
      'https://testchat.one.th/petdy/get_contents'
    )
    result.data.list_contents_dog.forEach(CONTENTSDOG => {
      this.allcontents.push(CONTENTSDOG)
    })
    result.data.list_contents_cat.forEach(CONTENTSCAT => {
      this.allcontents.push(CONTENTSCAT)
    })
    this.allcontents.forEach(content => {
      if (JSON.stringify(content.id) === this.$ls.get('CONTENTSID')) {
        this.blogName = content.title_en
        this.blogContent = content.content_en
      }
    })
  },
  // mounted () {
  //   var result = this.fromlostdatetime.split('T')
  //   console.log(result)
  //   this.lostDate = result[0]
  // },
  methods: {
    back () {
      this.$router.push({ name: 'pageBlog' })
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/Style/style.css";
</style>
