<template>
<v-container grid-list-xs>
   <v-app id="inspire" >

    <v-main class="grey lighten-3" >

      <v-container style="margin-Top:0px; padding: 0px; width: 100%">

            <v-card class="grey lighten-3" elevation="0" align="center" justify="center">
<v-container grid-list-sm  fluid style="margin-Top:0px; padding: 0px; width: 100%" >
    <v-data-iterator
      :items="fromlostData"
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
                      'https://s3gw.inet.co.th:8082/static/media/' + item.pic"
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

  <v-row align="center" justify="center" style="background-color:#F47A66">
  <h4 class="Text-size white--text">ประกาศหาย</h4>
</v-row>
<v-row  class="cc" >

<v-col align="start" justify="start" cols="1"><v-icon medium color="#FED579 " >mdi-map-marker</v-icon></v-col>
      <v-col class="Hide-text1" align="start" justify="start">{{ item.lastseenplace }}</v-col>
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
<Popup/>
</v-flex>
            </v-card>

      </v-container>
    </v-main>
  </v-app>

</v-container>

</template>

<script>
import axios from 'axios'
import Popup from '../../../components/Popup'

export default {
  components: { Popup },
  name: 'profilepetlost',
  data () {
    return {
      dialog: false,
      hidden: false,
      fromlostData: [],
      page: 1,
      itemsPerPage: 8,
      fromlostName: '',
      fromlostImage: '',
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
      this.fromlostData.push(fromlost)
    })
  },

  computed: {
    numberOfPages () {
      return Math.ceil(this.fromlostData.length / this.itemsPerPage)
    }
  },

  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    onClickImage (fromlostID) {
      this.fromlostID = fromlostID
      this.$ls.set('fromlostID', JSON.stringify(this.fromlostID))
      this.$router.push({ name: 'profilepetlost' })
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/Style/style.css";
</style>
