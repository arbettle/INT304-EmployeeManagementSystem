import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeForm from './components/EmployeeForm';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<EmployeeForm />} />
                    <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
