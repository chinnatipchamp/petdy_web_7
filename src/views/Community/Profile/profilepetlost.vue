<template>
  <v-container grid-list-xs>
    <v-app id="inspire">
      <v-app-bar app color="#BA4A00 " flat height="50">
        <v-container class="py-0 fill-height">
          <v-row align="center" justify="space-around" class="Text white--text">
            <h2>Lost pet</h2>
          </v-row>
          <v-spacer></v-spacer>
        </v-container>
      </v-app-bar>

      <v-main class="grey lighten-3">
        <v-card height="1020">
          <v-container grid-list-xs>
            <v-row>
              <div class="text-start">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="#BA4A00"
                  @click="back"
                >
                  <v-icon dark>
                    mdi-arrow-left
                  </v-icon>
                </v-btn>
              </div>
              <v-col align="end" justify="end" class="champ">
                <span>{{ lostDate }}</span>
                <span class="Text-bold brown--text"> : Last Seen</span></v-col
              ></v-row
            >
          </v-container>

          <v-row>
            <v-col align="center" justify="center">
              <v-card max-width="250">
                <v-img
                  max-height="280"
                  max-width=""
                  :src="
                    'https://s3gw.inet.co.th:8082/static/media/' + fromlostpic
                  "
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="champ"
            ><v-col align="center"
              ><h3>{{ fromlostName }}</h3></v-col
            ></v-row
          >
          <v-container grid-list-xs class="champ">
            <v-row style="background-color:#F47A66">
              <v-col align="center" justify="center"
                ><h3 class="white--text">ประกาศหาย</h3></v-col
              >
            </v-row>
            <v-row align="center" justify="center">
              <v-col align="start" justify="start" cols="1"
                ><v-icon medium color="#FED579 ">mdi-map-marker</v-icon></v-col
              >
              <v-col align="start" justify="start">{{
                fromlostlastseenplace
              }}</v-col>
            </v-row>
            <v-row>
              <v-col>เบอร์</v-col>
            </v-row>
            <v-row>
              <v-col>
                <!-- ------- -->
                <v-card>
                  <v-sheet height="100" width="100">
                    <h1>GPS</h1>
                  </v-sheet>
                </v-card>
                <!-- ----------- -->
              </v-col>
            </v-row>

            <v-container class="">
              <v-row><h3>ลักษณะทั่วไป</h3></v-row>
              <v-row>
                <v-col cols="12" sm="6"
                  ><v-icon color="#1AB2CB ">mdi-alpha-p-circle-outline</v-icon>
                  pettype. : {{ fromlostlastpettype }}</v-col
                ><v-col cols="12" sm="6"
                  ><v-icon color="#1AB2CB ">mdi-alpha-b-circle-outline</v-icon>
                  breed. : {{ fromlostlastbreed }}</v-col
                >
              </v-row>
              <v-row>
                <v-col cols="12" sm="6"
                  ><v-icon color="#1AB2CB ">mdi-alpha-f-circle-outline</v-icon>
                  furcolor. : {{ fromlostlastfurcolor }}</v-col
                ><v-col cols="12" sm="6"
                  ><v-icon color="#1AB2CB ">mdi-alpha-w-circle-outline</v-icon>
                  weight. : {{ fromlostlastweight }}</v-col
                >
              </v-row>
              <v-row>
                <v-col cols="12" sm="6"
                  ><v-icon color="#1AB2CB ">mdi-alpha-t-circle-outline</v-icon>
                  title. : {{ fromlostlasttitle }}</v-col
                >
              </v-row>
            </v-container>
          </v-container>
        </v-card>
      </v-main>
    </v-app>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {

  name: 'profilecat',
  data () {
    return {
      lostDate: '',
      fromlostData: [],
      fromlostpic: '',
      fromlostdatetime: '',
      fromlostlastseenplace: '',
      fromlostlastpettype: '',
      fromlostlastbreed: '',
      fromlostlastfurcolor: '',
      fromlostlastweight: '',
      fromlostlasttitle: ''
    }
  },
  async mounted () {
    const result = await axios.post(
      'https://testchat.one.th/petdyget_pet_fromlost'
    )
    result.data.list_pet_fromlost.forEach(fromlost => {
      if (JSON.stringify(fromlost.id) === this.$ls.get('fromlostID')) {
        this.fromlostpic = fromlost.pic
        this.fromlostdatetime = fromlost.datetime
        this.fromlostlastseenplace = fromlost.lastseenplace
        this.fromlostlastpettype = fromlost.pettype
        this.fromlostlastbreed = fromlost.breed
        this.fromlostlastfurcolor = fromlost.furcolor
        this.fromlostlastweight = fromlost.weight
        this.fromlostlasttitle = fromlost.title
        var result = this.fromlostdatetime.split('T')
        console.log(result)
        this.lostDate = result[0]
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
      this.$router.push({ name: 'pagePetlost' })
    }
  }

}
</script>
<style lang="scss">
@import "../../../assets/Style/style.css";
</style>
