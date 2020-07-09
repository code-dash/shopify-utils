<template>
  <v-dialog
      v-model="dialog"
      max-width="290"
    >
    <v-card>
      <v-card-title>
        <span class="headline">Duplication options</span>
      </v-card-title>
      <v-card-text>
        <v-checkbox v-model="variant_meta" class="mx-2" label="Variant Metafields (a lot slower)"></v-checkbox>
        <v-checkbox v-model="meta" class="mx-2" label="Metafields (slow)"></v-checkbox>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeModal">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="closeModal">Start</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data: () => ({
      variant_meta: false,
      meta: false
    }),
    props: {
      dialog: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeModal() {
        this.$emit('duplicateClose');
      }
    }
  }
</script>
