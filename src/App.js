import logo from './logo.svg';
import './App.css';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-link"> Welcome to RMI Table</h1>

        <rmiTable />


      </header>
    </div>
  );
}

export default App;
