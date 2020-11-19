<template>
  <v-container>
    <v-app id="inspire">
      <v-main class="grey lighten-3">
        <v-container style="margin-Top:0px; padding: 0px; width: 100%">
          <v-card
            class="grey lighten-3"
            elevation="0"
            align="center"
            justify="center"
          >
            <v-container
              fluid
              style="margin-Top:0px; padding: 0px; width: 100%"
            >
              <v-data-iterator
                :items="contentscatData"
                :items-per-page="itemsPerPage"
                :page="page"
                hide-default-footer
                data-app
              >
                <template v-slot:default="props">
                  <v-row class="champ">
                    <v-col
                      v-for="(item, index) in props.items"
                      :key="index"
                      cols="6"
                      sm="4"
                      md="3"
                    >
                       <v-card @click="onClickImage1(item.id)" height="190" min-width="160" width="220" >
                  <v-img
                    :src="
                      'https://s3gw.inet.co.th:8082/static/media/' + item.image">
                  </v-img>
<v-container>
<v-row  class="cc" >
      <v-col class="Hide-text1" align="start" justify="start">{{ item.content_short_en}}</v-col>
      </v-row>
</v-container>
            </v-card>
                    </v-col>
                  </v-row>
                </template>
                <template v-slot:footer>
                  <v-container grid-list-xs>
                    <div align="start" justify="start">
                      <v-btn
                        fab
                        dark
                        small
                        color="grey"
                        class="mr-1"
                        @click="formerPage"
                      >
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>
                      <v-btn
                        fab
                        dark
                        small
                        color="grey"
                        class="ml-1"
                        @click="nextPage"
                      >
                        <v-icon>mdi-chevron-right</v-icon>
                      </v-btn>
                      <span class="mr-4 grey--text">
                        Page {{ page }} of {{ numberOfPages }}
                      </span>
                    </div>
                  </v-container>
                </template>
              </v-data-iterator>
            </v-container>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'profilefindhome',
  data () {
    return {
      dialog: false,
      hidden: false,
      contentscatData: [],
      page: 1,
      itemsPerPage: 8,
      blogName: '',
      blogContent: ''
    }
  },
  async mounted () {
    const result = await axios.post(
      'https://testchat.one.th/petdy/get_contents'
    )
    result.data.list_contents_cat.forEach(contentscat => {
      this.contentscatData.push(contentscat)
    })
  },

  computed: {
    numberOfPages () {
      return Math.ceil(this.contentscatData.length / this.itemsPerPage)
    }
  },

  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    onClickImage1 (CONTENTSCATID) {
      this.CONTENTSCATID = CONTENTSCATID
      this.$ls.set('CONTENTSID', JSON.stringify(this.CONTENTSCATID))
      this.$router.push({ name: 'profileblog' })
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/Style/style.css";
</style>
