<template>
  <v-container fluid>
    <v-row>
      <v-col md="3">
          <v-list class="overflow-y-auto" max-height="100vh">
          <v-card class="pa-2" outlined tile>Add ....</v-card>
          </v-list>
      </v-col>
      <v-col md="9">
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Outlined" outlined></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "nyStudieplan"
};
</script>