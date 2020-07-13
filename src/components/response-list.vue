<template>
  <v-container  v-if="getTitles.length > 0" fluid>
    <v-card>
      <v-card-title>
        Results
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Filter Results"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers[pageType[1]]"
        :items="getTitles"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:item.title="{ item }">
          <a :href="'/admin/' + pageType[1]+ '/' + item.id" target="_blank" class="link-item">{{item.title}}</a>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    titles: [],
    search: '',
    headers: {
      products: [
        { text: 'Title', value: 'title' },
        { text: 'Price', value: 'price' },
        { text: 'Tags', value: 'tags' },
        { text: 'Vendor', value: 'vendor' },
        { text: 'Type', value: 'type' },
      ],
      articles: [
        { text: 'Title', value: 'title' },
        { text: 'Tags', value: 'tags' },
      ],
      pages: [
        { text: 'Title', value: 'title' }
      ],
      blogs: [
        { text: 'Title', value: 'title' }
      ],
      collections: [
        { text: 'Title', value: 'title' }
      ]
    }
  }),
  props: {
    pageType: Array
  },
  computed: {
    ...mapGetters(['getFilteredItems']),
    getTitles () {
      return this.getFilteredItems[this.pageType[1]].map(item => {
        return {
          title: item.title,
          tags: item.tags,
          vendor: item.vendor,
          type: item.type,
          price: item.variants[0].price,
          id: item.id
        }
      });
    }
  }
}
</script>

<style>
  .link-item {
    font-size: 12px;
  }
</style>
