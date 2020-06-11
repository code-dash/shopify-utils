const conditions = [
  {
    name: 'Product title',
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
    name: 'Product Content',
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
    name: 'Product Price',
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
    name: 'Product Tags',
    target: "tags",
    scope: ['product', 'products'],
    methods: [
      'contains',
      'does not contain'
    ]
  }
]

const options = [
  {
    name: "Title",
    target: "title",
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
  },
  {
    name: "Content",
    target: "body_html",
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
  },
  {
    name: "Tags",
    target: "tags",
    scope: ['product', 'products', 'article', 'articles'],
    methods: [
      "Add",
      "Remove",
      "Custom Code"
    ]
  }
]


module.exports = {
  conditions,
  options
};