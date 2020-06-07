const conditions = [
  {
    name: 'Product title',
    target: "title",
    value: "string",
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
    name: 'Product Content',
    target: "body_html",
    value: "string",
    scope: ['product', 'products', 'collection', 'collections', 'blog', 'blogs', 'article', 'articles', 'page', 'pages'],
    methods: [
      'is equal to',
      'is not equal to',
      'starts with',
      'ends with',
      'contains',
      'does not contain'
    ],
  }
]

const options = [
  {
    name: "Title",
    target: "title",
    value: "string",
    scope: ['product', 'products', 'collection', 'collections', 'blog', 'blogs', 'article', 'articles', 'page', 'pages'],
    methods: [
      "Lowercase",
      "Uppercase",
      "Insert before",
      "Insert after",
      "Replace",
      "Replace RegEx",
      "Custom Code"
    ]
  }
]


module.exports = {
  conditions,
  options
};