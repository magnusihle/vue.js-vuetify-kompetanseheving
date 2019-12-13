<template>
    <v-list dense>
        <v-list-item link :to="{path: '/kursadm/ny'}">
          <v-list-item-action>
            <v-icon>mdi-file-document-box-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$t('kursAdm.navigation.home')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/kursadm/studplan'}">
          <v-list-item-action>
            <v-icon>mdi-file-document-box-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$t('kursAdm.navigation.newCoursePlan')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/kursadm/ny'}">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$t('kursAdm.navigation.settings')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</template>