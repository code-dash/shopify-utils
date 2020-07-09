<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      right
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-content-copy</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Duplicate Selected</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-content-duplicate</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dynamic Content</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <span @click.stop="drawer = !drawer">
      <v-icon>mdi-arrow-left-bold-box</v-icon>
    </span>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
    }),
  }
</script>