# export-json-to-csv
**Converts and exports JSON data to CSV**

[![NPM version](https://img.shields.io/badge/npm-v10.7.0-brightgreen)](https://www.npmjs.org/package/export-json-to-csv)
[![NODE version](https://img.shields.io/badge/node-v20.14.0-brightgreen)](https://www.npmjs.org/package/export-json-to-csv)
[![types](https://img.shields.io/badge/types-TypeScript-blue)](https://www.npmjs.org/package/export-json-to-csv)

The JSON to CSV Converter is a lightweight and efficient npm package designed to seamlessly convert JSON data into CSV format. This tool is particularly useful for developers who need to export or manipulate data in CSV format, a widely accepted standard for data interchange.

[Demo](https://stackblitz.com/edit/vitejs-vite-induwj?file=src%2FApp.jsx)

### Features:
- **Effortless JSON to CSV Conversion**  
  Convert JSON objects or arrays to CSV format with minimal setup, saving time and effort. Just a few lines of code are all you need to transform JSON into structured, downloadable CSV files.

- **Customizable Output**  
  Tailor the CSV output to your needs by specifying custom headers, selecting specific keys, or adjusting other CSV formatting options. This flexibility makes it easy to create CSV files that fit exactly with your requirements.

- **Nested JSON Key Parsing**  
  Automatically handle and flatten nested JSON structures into CSV format, ensuring all data, including deeply nested properties, is accurately included. This feature eliminates the hassle of manually flattening complex JSON objects, simplifying your workflow.

- **Efficient Large Dataset Handling**  
  Process large JSON datasets smoothly without sacrificing performance. The package is optimized for high efficiency, enabling fast, responsive conversions even with sizable data files.

- **Lightweight, No Dependencies**  
  Built with performance in mind, this package has no external dependencies, making it lightweight, fast, and easy to integrate into any project without the overhead of additional libraries.

### Installation
```bash
npm install export-json-to-csv
```
### **Usage**

Below are examples of how to use the package to convert JSON data to CSV.

#### Example 1: Simple JSON to CSV

```js
import { exportCSVFromJSON } from 'export-json-to-csv';

const jsonData = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Doe", age: 32, city: "San Francisco" }
];

const options = {
    data: jsonData,
    headers: ['Name', 'Age', 'City'],
    keys: ['name', 'age', 'city'],
    title: 'User Data',
    fileName: 'simple-export.csv'
};

exportCSVFromJSON(options);

```

#### Example 2: Nested JSON to CSV

```js
import { exportCSVFromJSON } from 'export-json-to-csv';

const nestedJsonData = [
    { 
        name: "Alice Johnson", 
        age: 30, 
        address: { city: "Los Angeles", zip: "90001" }, 
        contact: { email: "alice@example.com", phone: "123-456-7890" }
    },
    { 
        name: "Bob Smith", 
        age: 40, 
        address: { city: "Chicago", zip: "60601" }, 
        contact: { email: "bob@example.com", phone: "098-765-4321" }
    }
];

const options = {
	data: nestedJsonData,
	headers: ['City', 'Zip', 'Age', 'Name'],
	keys: ['address.city', 'address.zip', 'age', 'name'],
	title: 'test file data',
	fileName: 'test-export.csv',
};

exportCSVFromJSON(options);

```


### Parameters

|Parameter   	|Type   	|**Description**   	|Required   	|Default   	|
|---	|---	|---	|---	|---	|
|`data`   	|Array   	|The JSON data to be converted into CSV format. Each object in the array represents a row.    	|Yes   	|N/A   	|
|`headers`   	|Array   	|Custom headers for the CSV file. If not provided, the keys will be used as headers.   	|No   	|All keys in the first object   	|
|`keys`   	|Array   	|An array of keys specifying which fields from the JSON data should be included in the CSV.   	|No   	|All keys in the first object   	|
|`title`   	|String   	|An optional title to be included at the top of the CSV file.   	|No   	|N/A   	|
|`fileName`   	|String   	|The name of the generated CSV file.   	|No   	|export.csv   	|

### Contributing

We welcome contributions! Feel free to submit issues, feature requests, or pull requests to help improve this package.