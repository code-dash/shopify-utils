<template>
  <v-dialog v-model="dialog" fullscreen>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Dynamic Content</v-toolbar-title>
      </v-toolbar>
      <v-list three-line subheader>
        <v-container fluid>
          <v-subheader>Conditions</v-subheader>
          <v-radio-group v-model="row" row>
            <v-radio label="AND" value="and"></v-radio>
            <v-radio label="OR" value="or"></v-radio>
          </v-radio-group>
        </v-container>
      </v-list>
      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({

  }),
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('contentClose');
    }
  }
}
</script>

<style>

</style>