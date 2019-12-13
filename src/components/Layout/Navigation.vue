<template>
  <v-card>
    <v-navigation-drawer v-model="drawer" app clipped :mini-variant="mini" permanent>
      <v-list-item link :to="{path: '/minside/profile'}">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>John Leider</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <MinSide v-if="minSide" />
      <KursAdministrasjon v-else-if="kursAdm" />
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="mini = !mini" />
      <v-toolbar-title>AOF</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text :to="{path: '/'}" >{{$t('generic.navigation.administrasjon')}}</v-btn>
        <v-btn text :to="{path: '/kursadm'}" >{{$t('generic.navigation.kursAdm')}}</v-btn>
        <v-btn text :to="{path: '/'}" >{{$t('generic.navigation.arbeidsflate')}}</v-btn>
        <v-btn text :to="{path: '/minside'}" >{{$t('generic.navigation.minSide')}}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
import Administrasjon from "@/components/Layout/Drawers/Administrasjon";
import Arbeidsflate from "@/components/Layout/Drawers/Arbeidsflate";
import KursAdministrasjon from "@/components/Layout/Drawers/KursAdministrasjon";
import MinSide from "@/components/Layout/Drawers/MinSide";

export default {
  name: "Navigation",
  components: {
    Administrasjon,
    Arbeidsflate,
    KursAdministrasjon,
    MinSide
  },
  computed: {
     minSide() {
         if(
             this.$route.path === '/minside' || this.$route.path === '/minside/profile' || this.$route.path === '/minside/documents'
         ) return true
         else return false
     },
     kursAdm() {
         if(
             this.$route.path === '/kursadm' || this.$route.path === '/kursadm/studplan' || this.$route.path === '/kursadm/ny'
         ) return true
         else return false
     }     
  },
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" }
    ],
    mini: true
  })
};

</script>