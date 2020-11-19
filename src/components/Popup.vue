<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="v-btn
  v-btn--bottom
  v-btn--contained
  v-btn--fab
  v-btn--fixed
  v-btn--right
  v-btn--round
  theme--light
  "
            elevation="2"
            ><v-icon dark>
              mdi-pencil-plus
            </v-icon></v-btn
          >
        </template>
        <!-- ------------------------------------------------------------------------------- -->
        <v-card>
          <v-row >
            <v-col cols="2" align="center" justify="center">

            <v-btn
              icon
              color=""
              @click="dialog = false"
            >
              <v-icon>mdi-less-than</v-icon>
            </v-btn>
          </v-col>

            <v-col align="center" justify="center" cols="8">
  <span class="headline">Create Lost & Found</span>
            </v-col>

          </v-row>

      <v-divider></v-divider>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['Dog', 'Cat', 'Other']"
                    label="Select your pet*"
                    required
                  ></v-select>
                </v-col>
              </v-row>

              <v-row>
         <v-col
        cols="12"

      >
        <v-textarea
          outlined
          name="input-7-4"
          label="Detail"

        ></v-textarea>
      </v-col>
              </v-row>
              <v-row>
                 <v-col cols="12" >
                  <v-text-field label="Last seen place*" required
                    hint="Please specify the location you saw last."
                  ></v-text-field>
                </v-col>
                <v-col cols="12" >
                  <v-text-field label="Contact*" required></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Avatar"
                  ></v-file-input>
                </v-col>

    <v-col
      cols="12"
    >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>

              </v-row>
              <v-row>
                <v-col><v-card height="150" width="350">
                   <v-sheet ></v-sheet>
                </v-card></v-col>

              </v-row>
              <v-checkbox
                      v-model="checkbox"
                      :error-messages="checkboxErrors"
                      label="Do you agree?"

                    ></v-checkbox>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    dialog: false,
    includeFiles: true,
    enabled: false
  })
}
</script>
