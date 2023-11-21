import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom"
import './App.css';
import EmployeeForm from './components/EmployeeForm'; // Import the EmployeeForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome <code>to My React project</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
          <EmployeeForm /> {/* Use the EmployeeForm component */}
    </div>
  );
    return (
        <Router>
            <Header />
            <Home items={items} />
            <Routes>
                <Route path="/" element={<Home items={items} />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
