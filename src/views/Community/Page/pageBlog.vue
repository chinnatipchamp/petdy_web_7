<template>
  <v-app id="inspire" class="grey lighten-3">
    <v-container >
      <div id="Blog"  align="center">
        <v-row>
          <v-col cols="12">
          </v-col>
          <v-col cols="12">
          </v-col>
        </v-row>
        <!-- ----------------------------------- -->
        <v-row class="Font-top">
          <v-col align="start">
            <h4>Dog</h4>
          </v-col>
           <!-- ---------- -->
          <v-col align="end">
            <v-btn
              color="purple"
              elevation="2"
              outlined
              raised
              rounded
              @click="pageBlogDog"
            >
              More</v-btn
            >
          </v-col>
        </v-row>
        <!-- ----------------------------------- -->
        <v-row >
             <v-container style="margin-Top:0px; padding: 0px; width: 100%">
            <v-card class="grey lighten-3" elevation="0" align="center" justify="center">
<v-container fluid style="margin-Top:0px; padding: 0px; width: 100%" >
    <v-data-iterator
      :items="contentsdogData"
      :items-per-page="itemsPerPage"
      :page="page"
      hide-default-footer data-app>
      <template v-slot:default="props" >
        <v-row class="champ">
          <v-col
            v-for="(item, index) in props.items"
            :key="index"
            cols="6">
  <v-card @click="onClickImage(item.id)" height="190" min-width="160" width="220" >
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
    </v-data-iterator></v-container></v-card></v-container>
        </v-row>
        <!-- ----------------------------------- -->
        <v-divider class="Font-top"></v-divider>
        <!-- ----------------------------------- -->
        <v-row class="Font-top">
          <v-col align="start">
            <h4>Cat</h4>
          </v-col>
           <!-- ---------- -->
          <v-col align="end">
            <v-btn
              color="purple"
              elevation="2"
              outlined
              raised
              rounded
              @click="pageBlogCat">More</v-btn
            >
          </v-col>
        </v-row>
        <!-- ----------------------------------- -->
        <v-row >
             <v-container style="margin-Top:0px; padding: 0px; width: 100%">
            <v-card class="grey lighten-3" elevation="0" align="center" justify="center">
<v-container fluid style="margin-Top:0px; padding: 0px; width: 100%" >
    <v-data-iterator
      :items="contentscatData"
      :items-per-page="itemsPerPage"
      :page="page"
      hide-default-footer data-app>
      <template v-slot:default="props" >
        <v-row class="champ">
          <v-col
            v-for="(item, index) in props.items"
            :key="index"
            cols="6">
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
    </v-data-iterator></v-container></v-card></v-container>
        </v-row>
        <!-- ----------------------------------- -->
        <v-divider class="Font-top"></v-divider>
        <!-- ----------------------------------- -->
        <v-row class="Font-top">
           <v-col align="start">
            <h4>Pet Breed</h4>
          </v-col>
        </v-row>
        <v-row >
          <v-col >
            <v-row align="center" justify="center">
            <router-link fab  to="/pagecat"
              ><img fab width="110" src="../../../assets/Images/cat.png" /> </router-link
          ></v-row>
          <v-row align="center" justify="center">
            <h4>Cat</h4>
          </v-row>
          </v-col>
          <v-col>
            <v-row align="center" justify="center">
            <router-link fab  to="/pagedog"
              ><img fab width="120" src="../../../assets/Images/dog.png" /> </router-link
          ></v-row>
          <v-row align="center" justify="center">
            <h4>Dog</h4>
          </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {

  data () {
    return {
      dialog: false,
      hidden: false,
      contentsdogData: [],
      contentscatData: [],
      page: 1,
      itemsPerPage: 2,
      blogName: '',
      blogContent: ''

    }
  },
  async mounted () {
    const result = await axios.post(
      'https://testchat.one.th/petdy/get_contents'
    )
    result.data.list_contents_dog.forEach(contentsdog => {
      this.contentsdogData.push(contentsdog)
    })
    result.data.list_contents_cat.forEach(contentscat => {
      this.contentscatData.push(contentscat)
    })
  },
  methods: {
    pagecat () {
      this.$router.push({ name: 'pagecat' })
    },
    pagedog () {
      this.$router.push({ name: 'pagedog' })
    },
    pageBlogDog () {
      this.$router.push({ name: 'pageBlogDog' })
    },
    pageBlogCat () {
      this.$router.push({ name: 'pageBlogCat' })
    },
    onClickImage (CONTENTSDOGID) {
      this.CONTENTSDOGID = CONTENTSDOGID
      this.$ls.set('CONTENTSID', JSON.stringify(this.CONTENTSDOGID))
      this.$router.push({ name: 'profileblog' })
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
