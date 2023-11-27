import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeForm from './components/EmployeeForm';
import { useState, useEffect } from 'react';

function App() {
    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem('employees');
        if (savedEmployees) {
            return JSON.parse(savedEmployees);
        } else {
            return [];
        }
    });

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    const saveData = () => {
        localStorage.setItem('employees', JSON.stringify(employees));
    };

    useEffect(() => {
        saveData();
    }, [employees]);

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<EmployeeForm addEmployee={addEmployee} />} />
                    <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
