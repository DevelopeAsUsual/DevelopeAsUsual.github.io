// data.js

// Sample data
const jsonData = {
  "name": "Root",
  "children": [
    {
      "name": "Category A",
      "children": [
        {
          "name": "Subcategory A1",
          "value": 10
        },
        {
          "name": "Subcategory A2",
          "value": 15
        }
      ]
    },
    {
      "name": "Category B",
      "children": [
        {
          "name": "Subcategory B1",
          "value": 12
        },
        {
          "name": "Subcategory B2",
          "value": 8
        }
      ]
    }
  ]
};

// Export the data for use in other scripts
export default jsonData;
