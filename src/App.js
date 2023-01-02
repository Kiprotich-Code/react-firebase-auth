import './App.css';
import Form from './components/common/Form'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Form />
      </div>
    </Router>
  );
}

export default App;
