<template>
  <v-container fluid>
    <v-col>
      <v-select
        class="pa-2"
        :items="targetSelectOptions"
        v-model="targetSelect"
        label="Choose Target"
      ></v-select>
      <v-select v-if="targetSelect"
        class="pa-2"
        :items="targetConditions"
        v-model="targetSelectMethod"
        label="Choose Target"
      ></v-select>
      {{targetSelectOptions.methods}}
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "ReplaceForm",
  props: {
    pageType: {
      type: Array
    }
  },
  data: () => ({
    targetSelect: '',
    targetSelectMethod: '',
    targetOptions: [
      {
        name: 'Title',
        target: "title",
        scope: ['product', 'products', 'collection', 'collections', 'blog', 'blogs', 'article', 'articles', 'page', 'pages'],
        methods: [
          'is equal to',
          'is not equal to',
          'starts with',
          'ends with',
          'contains',
          'does not contain'
        ],
      },
      {
        name: 'Content',
        target: "body_html",
        scope: ['product', 'products', 'collection', 'collections', 'blog', 'blogs', 'article', 'articles', 'page', 'pages'],
        methods: [
          'is equal to',
          'is not equal to',
          'starts with',
          'ends with',
          'contains',
          'does not contain'
        ]
      },
      {
        name: 'Price',
        target: "price",
        scope: ['product', 'products'],
        methods: [
          'is equal to',
          'is not equal to',
          'is greater then',
          'is less then'
        ]
      },
      {
        name: 'Tags',
        target: "tags",
        scope: ['product', 'products', 'article', 'articles'],
        methods: [
          'contains',
          'does not contain'
        ]
      }
    ]
  }),
  computed: {
    targetSelectOptions: function() {
      return this.targetOptions.filter(item => item.scope.indexOf(this.pageType[1])).map(item => ({
        text: item.name,
        value: item.target
      }))
    },
    targetConditions: function () {
      return this.targetOptions.filter(item => item.target === this.targetSelect).pop().methods
    }
  }
}
</script>
