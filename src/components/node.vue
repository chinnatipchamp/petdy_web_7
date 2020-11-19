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
          <v-card-title>
            <span class="headline">Create Lost & Found</span>
          </v-card-title>
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
                <v-card-text>
                  <v-row align="center">
                    <v-checkbox
                      v-model="enabled"
                      hide-details
                      class="shrink mr-2 mt-0"
                    ></v-checkbox>
                    <v-text-field
                      :disabled="!enabled"
                      label="Other (please specify)"
                    ></v-text-field>
                  </v-row>
                </v-card-text>
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
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Name*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Avatar"
                  ></v-file-input>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>

              </v-row>
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
    dialog: false,
    includeFiles: true,
    enabled: false
  })
}
</script>
