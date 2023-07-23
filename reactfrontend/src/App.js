import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios here
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const students = await axios.get("http://localhost:8000/api/student");
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllStudents();
  }, []);

  return (
    <div className="App">
      <h1>Connect React Js to Express js</h1>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
