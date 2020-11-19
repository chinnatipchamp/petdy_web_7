<template>
<v-app id="inspire"  >
<v-container style="margin-
:0px; padding: 10px; width: 100%">
<v-app-bar app color="#389E89 " flat  height="50" >

      <v-container class="py-0 fill-height" >
        <v-row align="center" justify="space-around" class="Text white--text">
<h2>Cat Breed</h2>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
<v-main >
  <ul>
      <li><router-link fab to="/pagecat">Cat</router-link></li>
      /

      <li>{{ CATName }}</li>
    </ul>
    <v-row>
      <v-col align="center" justify="center"
        ><h2>{{ CATName }}</h2></v-col
      ></v-row
    >
    <v-row>
      <v-col align="center" justify="center">
        <v-card max-width="300">
          <v-img
            :src="'https://s3gw.inet.co.th:8082/static/media/' + CATImage"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-container grid-list-xs>

    <v-row><h3>คุณสมบัติของสัตว์เลี้ยง</h3></v-row>

    <v-container grid-list-xs>
      <v-row align="center" justify="center"  class="Font-top">
        <v-card rounded="lg"
        min-height="170"
        width="500"
        min-width="250"
        align="center"
        justify="center">
          <v-row align="center" justify="center">
          <v-col
            ><v-row align="center" justify="center"
              ><v-icon x-large color="#2B9F00 "
                >mdi-dog</v-icon
              ></v-row
            ><v-row align="center" justify="center"> {{CATSize}}</v-row></v-col
          >
          <v-col
            ><v-row align="center" justify="center"
              ><v-icon x-large color="#CBA71A "
                >mdi-shower-head</v-icon
              ></v-row
            ><v-row align="center" justify="center">{{CATClean}}</v-row></v-col
          >
          <v-col>
            <v-row align="center" justify="center">
              <v-icon x-large color="#1AB2CB "
                >mdi-hair-dryer-outline</v-icon
              >
            </v-row >
            <v-row align="center" justify="center">{{CATFur}}</v-row>
          </v-col>
        </v-row>
        <v-row >
          <v-col >
            <v-row align="center" justify="center">
              <v-icon x-large color="#DF2F2F"
                >mdi-heart-circle-outline</v-icon
              >
            </v-row>
            <v-row align="center" justify="center">{{CATFriendship}}</v-row>
          </v-col>
          <v-col>
            <v-row align="center" justify="center"
              ><v-icon x-large color="#6FEE38 "
                >mdi-home-heart</v-icon
              ></v-row>

            <v-row align="center" justify="center"> {{CATLocation}}</v-row>
          </v-col>
        </v-row>
        </v-card>

    </v-row >
    </v-container>

    <v-row class="Font-top"><h3>ลักษณะทั่วไป</h3></v-row>
    <v-row ><v-col align="" justify="center" > {{CATGeneralization}}</v-col></v-row>

    <v-row class="Font-top"><h3>รายละเอียดขนาดตัว</h3></v-row>
    <v-row ><v-col align="" justify="center"> {{CATdetail}}</v-col></v-row>

    <v-row class="Font-top"><h3>รายละเอียดสีขน</h3></v-row>
    <v-row ><v-col align="" justify="center"> {{CATfurcolor}}</v-col></v-row>
    </v-container>
</v-main>
  </v-container>
</v-app>

</template>

<script>
import axios from 'axios'
export default {
  name: 'profilecat',
  data () {
    return {
      CATName: '',
      CATImage: '',
      CATSize: '',
      CATClean: '',
      CATFur: '',
      CATFriendship: '',
      CATLocation: '',
      CATGeneralization: '',
      CATdetail: '',
      CATfurcolor: ''
    }
  },

  async mounted () {
    const result = await axios.post(
      'https://testchat.one.th/petdy/get_breed_pets',
      {
        pet_type: 'CAT'
      }
    )
    result.data.list_breed_pets.forEach(CAT => {
      if (JSON.stringify(CAT.id) === this.$ls.get('catbreedID')) {
        this.CATName = CAT.pet_title_th
        this.CATImage = CAT.image
        this.CATSize = CAT.size_filter
        this.CATClean = CAT.clean_filter
        this.CATFur = CAT.fur_filter
        this.CATFriendship = CAT.friendship_filter
        this.CATLocation = CAT.location_filter
        this.CATGeneralization = CAT.generalization
        this.CATdetail = CAT.size_detail
        this.CATfurcolor = CAT.furcolor
      }
    })
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 8px;
}
</style>
