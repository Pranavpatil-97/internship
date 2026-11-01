import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="container">
      <StudentForm onSubmit={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;