<template>
  <v-container fluid style="margin-Top:0px; padding: 0px; width: 100%">

    <v-container >
      <v-data-iterator
      :items="CATData"
      :items-per-page="itemsPerPage"
      :page="page"
      hide-default-footer
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
            <v-card
              height="220"
              min-width="160"
              width="220"
              align="center"
              justify="center"
            >
              <v-row>
                <v-col>
                  <v-img
                    @click="onClickImage(item.id)"
                    :src="
                      'https://s3gw.inet.co.th:8082/static/media/' + item.image
                    "
                    height="120"
                    min-height="100"
                    min-width="100"
                    width="120"
                    class="grey darken-4 aa"
                    fab
                  ></v-img>
                </v-col>
              </v-row>

              <v-row>
                <v-container>
                  <v-col class="Hide-text" align="center" justify="start"
                    >{{ item.pet_title_th }} ({{ item.pet_title }})</v-col
                  >
                </v-container>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <div align="end" justify="end">
          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn fab dark small color="grey" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark small color="grey" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-iterator>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'pagecat',
  data () {
    return {
      CATData: [],
      page: 1,
      itemsPerPage: 8,
      CATbreedID: null
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
      this.CATData.push(CAT)
    })
  },

  computed: {
    numberOfPages () {
      return Math.ceil(this.CATData.length / this.itemsPerPage)
    }
  },

  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    onClickImage (catbreedID) {
      this.CATbreedID = catbreedID
      this.$ls.set('catbreedID', JSON.stringify(this.CATbreedID))
      this.$router.push({ name: 'profilecat' })
    }
  }
}
</script>
