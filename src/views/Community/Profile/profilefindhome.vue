<template>
<v-container grid-list-xs>
   <v-app id="inspire" >
    <v-app-bar app color="#389E89 " flat  height="50" >

      <v-container class="py-0 fill-height" >
        <v-row align="center" justify="space-around" class="Text white--text">
<h2>Find Home</h2>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3" >

<v-card height="900">
  <v-container grid-list-xs>
    <v-row>
      <div class="text-start">
 <v-btn
      class="mx-2"
      fab
      dark
      small
      color="#389E89"
      @click="back"
    >
      <v-icon dark>
        mdi-arrow-left
      </v-icon>
    </v-btn>
      </div>
      <v-col align="end" justify="end" class="champ"> <span>{{lostDate}}</span> <span class="Text-bold brown--text"> : Last Seen</span></v-col></v-row>
  </v-container>

<v-row>
      <v-col align="center" justify="center">
        <v-card max-width="250" >
          <v-img
            :src="'https://s3gw.inet.co.th:8082/static/media/' + findhomepicture"
          ></v-img>
        </v-card>
      </v-col>

    </v-row>
     <v-row class="champ"><v-col align="center" ><h3>{{fromlostName}}</h3></v-col></v-row>
    <v-container grid-list-xs class="champ">

<v-row style="background-color:#60CAAE" >
  <v-col align="center" justify="center"><h3  class="white--text">ตามหาบ้าน</h3></v-col>
</v-row>
<v-row align="center" justify="center">

<v-col align="center" justify="center" cols="12"><v-icon medium color="#FED579 " >mdi-map-marker</v-icon>{{findhomeplace}}</v-col>
<v-col align="center" justify="center" cols="12">
  <!-- {{findhomedetail}} -->
  <span v-html="findhomedetail"></span>
  </v-col>
<div class="lost-detail pl-5 pr-5">
  </div>
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

  data () {
    return {
      lostDate: '',
      findhomeData: [],
      findhomepicture: '',
      findhomecreate_date: '',
      findhomeplace: '',
      findhomedetail: '',
      findhomecontact: ''

    }
  },

  async mounted () {
    const result = await axios.post(
      'https://testchat.one.th/petdy/get_pet_find_home'
    )
    result.data.list_pet_findhome.forEach(findhome => {
      if (JSON.stringify(findhome.id) === this.$ls.get('findhomeID')) {
        this.findhomepicture = findhome.picture
        this.findhomecreate_date = findhome.create_date
        this.findhomeplace = findhome.place
        this.findhomedetail = findhome.detail
        this.findhomecontact = findhome.contact
        var result = this.findhomecreate_date.split('T')
        console.log(result)
        this.lostDate = result[0]
      }
    })
  },
  // mounted () {
  //   var result = this.fromlostcreate_date.split('T')
  //   console.log(result)
  //   this.lostDate = result[0]
  // },
  methods: {
    back () {
      this.$router.push({ name: 'pageFindhome' })
    }
  }

}
</script>
<style lang="scss">
@import "../../../assets/Style/style.css";
</style>
