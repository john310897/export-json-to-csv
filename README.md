# export-json-to-csv
**Converts and exports JSON data to CSV**

[![NPM version](https://img.shields.io/badge/npm-v10.7.0-brightgreen)](https://www.npmjs.org/package/export-json-to-csv)
[![NODE version](https://img.shields.io/badge/node-v20.14.0-brightgreen)](https://www.npmjs.org/package/export-json-to-csv)
[![types](https://img.shields.io/badge/types-TypeScript-blue)](https://www.npmjs.org/package/export-json-to-csv)

The JSON to CSV Converter is a lightweight and efficient npm package designed to seamlessly convert JSON data into CSV format. This tool is particularly useful for developers who need to export or manipulate data in CSV format, a widely accepted standard for data interchange.

### Features:
* Convert JSON objects or arrays to CSV with just a few lines of code.
* Customizable Output: Customize the headers, keys and other CSV options to fit your specific needs.
* Large Dataset Handling: Efficiently process and convert large JSON datasets without performance degradation.
* No Dependencies: The package is lightweight with no external dependencies, ensuring fast performance and easy integration.

### Installation
```bash
npm install export-json-to-csv
```
### **Usage**

Below is a simple example of how to use the package:

```js
import { exportCSVFromJSON } from 'export-json-to-csv'
const jsonData = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Doe", age: 32, city: "San Francisco" }
];
const options={
    data:jsonData,
    headers:['Name','Age','City'],
    keys:['name','age','city'],
    title:'test file data',
    fileName:'test-export.csv'
}
exportCSVFromJSON(options)
````

### Parameters

|Parameter   	|Type   	|Description   	|Required   	|Default   	|
|---	|---	|---	|---	|---	|
|`data`   	|Array   	|The JSON data to be converted into CSV format. Each object in the array represents a row.    	|Yes   	|N/A   	|
|`headers`   	|Array   	|Custom headers for the CSV file. If not provided, the keys will be used as headers.   	|No   	|All keys in the first object   	|
|`keys`   	|Array   	|An array of keys specifying which fields from the JSON data should be included in the CSV.   	|No   	|All keys in the first object   	|
|`title`   	|String   	|An optional title to be included at the top of the CSV file.   	|No   	|N/A   	|
|`fileName`   	|String   	|The name of the generated CSV file.   	|No   	|export.csv   	|

### Contributing

We welcome contributions! Feel free to submit issues, feature requests, or pull requests to help improve this package.