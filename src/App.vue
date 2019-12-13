<template>
  <v-app>
    <Navigation v-if="$vuetify.breakpoint.mdAndUp" />
    <MobileNavigation v-else />

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
        <!-- If using vue-router -->
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./components/Layout/Navigation";
import MobileNavigation from "./components/Layout/MobileNavigation";

export default {
  name: "App",

  components: {
    Navigation,
    MobileNavigation
  },

  data: () => ({})
};
</script>

