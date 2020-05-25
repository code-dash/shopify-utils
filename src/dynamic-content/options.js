const options = [
  {
    scope: ['products', 'product'],
    fields: [
      {
        type: ["title", 'Product title'],
        conditions: ['is equal to', 'is not equal to', 'starts with', 'ends with', 'contains', 'does not contain'],
        value: "string"
      }
    ]
  }
]

module.exports = options;