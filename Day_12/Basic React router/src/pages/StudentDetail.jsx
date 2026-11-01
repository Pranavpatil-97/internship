import { useParams, Link } from "react-router-dom";
import { studentData } from "./Students";

function StudentDetail() {
  const { id } = useParams();
  const student = studentData.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div>
        <h1>Student not found</h1>
        <Link to="/students">Back to students</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{student.name}</h1>
      <p>Course: {student.course}</p>
      <p>ID: {student.id}</p>
      <Link to="/students">Back to students</Link>
    </div>
  );
}

export default StudentDetail;