<template>
<v-app id="inspire"  >
<v-container style="margin-Top:0px; padding: 10px; width: 100%">
<v-app-bar app color="#389E89 " flat  height="50" >

      <v-container class="py-0 fill-height" >
        <v-row align="center" justify="space-around" class="Text white--text">
<h2>Dog Breed</h2>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
<v-main >

    <ul>
      <li><router-link fab to="/pagedog">Dog</router-link></li>
      /

      <li>{{ DOGName }}</li>
    </ul>
    <v-row>
      <v-col align="center" justify="center"
        ><h2>{{ DOGName }}</h2></v-col
      ></v-row
    >
    <v-row>
      <v-col align="center" justify="center">
        <v-card max-width="300">
          <v-img
            :src="'https://s3gw.inet.co.th:8082/static/media/' + DOGImage"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-container grid-list-xs>

    <v-row><h3>คุณสมบัติของสัตว์เลี้ยง</h3></v-row>
    <v-row><v-col></v-col></v-row>
    <v-row align="center" justify="center" >
      <v-card
        rounded="lg"
        min-height="170"
        width="500"
        min-width="250"
        align="center"
        justify="center"
      >
        <v-row align="center" justify="center">
          <v-col
            ><v-row align="center" justify="center"
              ><v-icon x-large color="#2B9F00 "
                >mdi-dog</v-icon
              ></v-row
            ><v-row align="center" justify="center"> {{DOGSize}}</v-row></v-col
          >
          <v-col
            ><v-row align="center" justify="center"
              ><v-icon x-large color="#CBA71A "
                >mdi-shower-head</v-icon
              ></v-row
            ><v-row align="center" justify="center">{{DOGClean}}</v-row></v-col
          >
          <v-col>
            <v-row align="center" justify="center">
              <v-icon x-large color="#1AB2CB "
                >mdi-hair-dryer-outline</v-icon
              >
            </v-row >
            <v-row align="center" justify="center">{{DOGFur}}</v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row align="center" justify="center">
              <v-icon x-large color="#DF2F2F"
                >mdi-heart-circle-outline</v-icon
              >
            </v-row>
            <v-row align="center" justify="center">{{DOGFriendship}}</v-row>
          </v-col>
          <v-col>
            <v-row align="center" justify="center"
              ><v-icon x-large color="#6FEE38 "
                >mdi-home-heart</v-icon
              ></v-row>

            <v-row align="center" justify="center"> {{DOGLocation}}</v-row>
          </v-col>
        </v-row>
      </v-card>

    </v-row>
    <v-row><v-col></v-col></v-row>
    <v-row><h3>ลักษณะทั่วไป</h3></v-row>
    <v-row><v-col></v-col></v-row>
    <v-row ><v-col align="" justify="center"> {{DOGGeneralization}}</v-col></v-row>

    <v-row><v-col></v-col></v-row>
    <v-row><h3>รายละเอียดขนาดตัว</h3></v-row>
    <v-row><v-col></v-col></v-row>
    <v-row ><v-col align="" justify="center"> {{DOGdetail}}</v-col></v-row>

    <v-row><v-col></v-col></v-row>
    <v-row><h3>รายละเอียดสีขน</h3></v-row>
    <v-row><v-col></v-col></v-row>
    <v-row ><v-col align="" justify="center"> {{DOGfurcolor}}</v-col></v-row>
     </v-container>
</v-main>
  </v-container>
</v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profiledog',
  data () {
    return {
      DOGName: '',
      DOGImage: '',
      DOGSize: '',
      DOGClean: '',
      DOGFur: '',
      DOGFriendship: '',
      DOGLocation: '',
      DOGGeneralization: '',
      DOGdetail: '',
      DOGfurcolor: ''
    }
  },
  async mounted () {
    const result = await axios.post(
      'https://testchat.one.th/petdy/get_breed_pets',
      {
        pet_type: 'DOG'
      }
    )
    result.data.list_breed_pets.forEach(DOG => {
      if (JSON.stringify(DOG.id) === this.$ls.get('dogbreedID')) {
        this.DOGName = DOG.pet_title_th
        this.DOGImage = DOG.image
        this.DOGSize = DOG.size_filter
        this.DOGClean = DOG.clean_filter
        this.DOGFur = DOG.fur_filter
        this.DOGFriendship = DOG.friendship_filter
        this.DOGLocation = DOG.location_filter
        this.DOGGeneralization = DOG.generalization
        this.DOGdetail = DOG.size_detail
        this.DOGfurcolor = DOG.furcolor
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
