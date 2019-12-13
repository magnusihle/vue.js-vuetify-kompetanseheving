<template>
    <v-list dense>
        <v-list-item link :to="{path: '/minside'}">
          <v-list-item-action>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$t('minSide.navigation.home')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/minside/documents'}">
          <v-list-item-action>
            <v-icon>mdi-folder-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$t('minSide.navigation.home')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/minside/profile'}">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$t('minSide.navigation.settings')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</template>