import './App.css';
import { exportCSVFromJSON } from 'export-json-to-csv';

function App() {
  const downloadData = () => {
    const jsonData = [
      { name: 'John Doe', age: 28, city: 'New York' },
      { name: 'Jane Doe', age: 32, city: 'San Francisco' },
    ];

    const options = {
      data: jsonData,
      headers: ['City', 'Age', 'Name'],
      keys: ['city', 'age', 'name'],
      title: 'test file data',
      fileName: 'test-export.csv',
    };

    exportCSVFromJSON(options);
  };

  const downloadNested = () => {
    const nestedJsonData = [
      {
        name: 'Alice Johnson',
        age: 30,
        address: { city: 'Los Angeles', zip: '90001' },
        contact: { email: 'alice@example.com', phone: '123-456-7890' },
      },
      {
        name: 'Bob Smith',
        age: 40,
        address: { city: 'Chicago', zip: '60601' },
        contact: { email: 'bob@example.com', phone: '098-765-4321' },
      },
    ];
    const options = {
      data: nestedJsonData,
      headers: ['City', 'Zip', 'Age', 'Name'],
      keys: ['address.city', 'address.zip', 'age', 'name'],
      title: 'test file data',
      fileName: 'test-export.csv',
    };
    exportCSVFromJSON(options);
  };

  return (
    <>
      <button onClick={downloadData}>simple download</button>
      <button onClick={downloadNested}>nested download</button>
    </>
  );
}

export default App;
