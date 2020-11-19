<template>
<v-container grid-list-xs>
   <v-app id="inspire" >

    <v-main class="grey lighten-3" >

      <v-container style="margin-Top:0px; padding: 0px; width: 100%">

            <v-card class="grey lighten-3" elevation="0" align="center" justify="center">
<v-container grid-list-sm  fluid style="margin-Top:0px; padding: 0px; width: 100%" >
    <v-data-iterator
      :items="findhomeData"
      :items-per-page="itemsPerPage"
      :page="page"
      hide-default-footer
    data-app>
      <template v-slot:default="props" >
        <v-row class="champ">
          <v-col
            v-for="(item, index) in props.items"
            :key="index"
            cols="6"
            sm="4"
            md="3"

          >
  <v-card @click="onClickImage(item.id)" height="260" min-width="160" width="220" >
                  <v-row><v-col></v-col></v-row>
                  <v-img
                    :src="
                      'https://s3gw.inet.co.th:8082/static/media/' + item.picture"
                      onerror="imgPetError(this);"
                  height="120"
                  min-height="100"
                  min-width="100"
                  width="120"
                  class="grey darken-4 aa"
                   fab >
                  </v-img>
<v-container>

            <h4> {{ item.name }}</h4>

  <v-row align="center" justify="center" style="background-color:#60CAAE">
  <h4 class="Text-size white--text">ตามหาบ้าน</h4>
</v-row>
<v-row  class="cc" >

<v-col align="start" justify="start" cols="1"><v-icon medium color="#FED579 " >mdi-map-marker</v-icon></v-col>
      <v-col class="Hide-text" align="start" justify="start">{{ item.place}}</v-col>
      </v-row>

</v-container>

            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
       <v-container grid-list-xs>
          <div align="start" justify="start">
          <v-btn fab dark small color="grey" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark small color="grey" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
        </div>
       </v-container>
      </template>
    </v-data-iterator>

  </v-container>
<v-flex>
<Popup2/>
</v-flex>
            </v-card>

      </v-container>
    </v-main>
  </v-app>

</v-container>

</template>

<script>
import axios from 'axios'
import Popup2 from '../../../components/Popup2'

export default {
  components: { Popup2 },
  name: 'profilefindhome',
  data () {
    return {
      dialog: false,
      hidden: false,
      findhomeData: [],
      page: 1,
      itemsPerPage: 8,
      findhomepicture: '',
      fromlostcreate_date: '',
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
      this.findhomeData.push(findhome)
    })
  },

  computed: {
    numberOfPages () {
      return Math.ceil(this.findhomeData.length / this.itemsPerPage)
    }
  },

  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    onClickImage (findhomeID) {
      this.findhomeID = findhomeID
      this.$ls.set('findhomeID', JSON.stringify(this.findhomeID))
      this.$router.push({ name: 'profilefindhome' })
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/Style/style.css";
</style>
