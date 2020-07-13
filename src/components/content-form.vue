<template>
  <v-dialog v-model="dialog" fullscreen>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Dynamic Content</v-toolbar-title>
      </v-toolbar>
      <v-list subheader>
        <v-container fluid>
          <v-subheader>Conditions</v-subheader>
          <v-radio-group v-model="conditionRadio" row>
            <v-radio label="AND" value="and"></v-radio>
            <v-radio label="OR" value="or"></v-radio>
          </v-radio-group>
        </v-container>
        <v-col class="d-flex" cols="12" v-for="(item, index) in conditionArrayElements" :key="index">
          <v-select
            class="pa-2"
            v-if="conditionRadio"
            :items="conditionTargetFilter"
            v-model="item.conditionTargetSelected"
            label="Choose Type"
            @change="() => setConditionOperators(item)"
          ></v-select>
          <v-select
            v-if="item.conditionTargetSelected"
            class="pa-2"
            :items="item.conditionOperators"
            v-model="item.conditionChecksSelected"
            label="Choose Condition"
          ></v-select>
          <v-text-field placeholder="Enter your text here" v-if="item.conditionChecksSelected" class="pa-2" v-model="item.conditionCheckText"></v-text-field>
          <v-btn fab x-small dark color="primary" v-if="item.conditionCheckText && index === 0" @click="addNewConditionRow">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn fab x-small dark color="error" v-if="index !== 0" @click="() => removeRow(index)">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-col>
        <div class="text-center" v-if="checkForText">
          <v-btn x-large color="primary" @click="startGettingItems">Start</v-btn>
        </div>
        <ResponseList :page-type="pageType" />
      </v-list>
      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ResponseList from './response-list';

export default {
  data: () => ({
    conditionRadio: '',
    conditionArrayElements: [
      {
        conditionTargetSelected: '',
        conditionChecksSelected: '',
        conditionCheckText: '',
        conditionOperators: []
      }
    ],
    conditionTarget: [
      {
        text: "Title",
        value: "title",
        access: ['*']
      },
      {
        text: "Content",
        value: 'content',
        access: ['*']
      },
      {
        text: "Price",
        value: 'price',
        access: ['products', 'product']
      },
      {
        text: "Tags",
        value: 'tags',
        access: ['products', 'product', 'article', 'articles']
      },
    ],
    conditionChecks: [
      {
        text: "Is equal to",
        target: ['title', 'content', 'price'],
        value: '==='
      },
      {
        text: "Is not equal to",
        target: ['title', 'content', 'price'],
        value: '!=='
      },
      {
        text: "Starts With",
        target: ['title', 'content', 'price'],
        value: '^'
      },
      {
        text: "Ends With",
        target: ['title', 'content', 'price'],
        value: '$'
      },
      {
        text: "Contains",
        target: ['*'],
        value: 'contains'
      },
      {
        text: "Does not Contains",
        target: ['*'],
        value: '!contains'
      },
      {
        text: "Is Greater Then",
        target: ['price'],
        value: '>'
      },
      {
        text: "Is Less Then",
        target: ['price'],
        value: '<'
      },
    ]
  }),
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkForText() {
      return this.conditionArrayElements.filter(item => item.conditionCheckText != '').length > 0;
    },
    conditionTargetFilter(){
      return this.conditionTarget.filter(item => item.access.indexOf(this.pageType[0]) > -1 || item.access.indexOf('*') > -1)
    },
    ...mapGetters(['pageType', 'csrfToken']),
  },
  methods: {
    closeModal() {
      this.$emit('contentClose');
    },
    setConditionOperators(ele) {
      const conditionSelected = this.conditionTarget.filter(item => item.value === ele.conditionTargetSelected).pop() || [];
      ele.conditionOperators = this.conditionChecks.filter(item => item.target.indexOf(conditionSelected.value) > -1 || item.target.indexOf('*') > -1);
    },
    addNewConditionRow(){
      this.conditionArrayElements.push({
        conditionTargetSelected: '',
        conditionChecksSelected: '',
        conditionCheckText: '',
      })
    },
    removeRow(ind){
      this.conditionArrayElements = this.conditionArrayElements.filter((_,itemIndex) => itemIndex !== ind);
    },
    startGettingItems(){
      if(this.pageType[1] !== 'blogs' && this.pageType[1] !== 'articles') {
        this.getItems({
          url: `${this.pageType[1]}.json?view=250`,
          csrfToken: this.csrfToken, 
          pageType: this.pageType[1],
          conditionArrayElements: this.conditionArrayElements,
          conditionRadio: this.conditionRadio
        });
      }
    },
    ...mapActions(['getPageType', 'getItems'])
  },
  components: {
    ResponseList
  },
  mounted() {
    this.getPageType();
  }
}
</script>
