import { Link } from "react-router-dom";

export const studentData = [
  { id: 1, name: "Pranav", course: "React.js" },
  { id: 2, name: "Aarav", course: "Node.js" },
  { id: 3, name: "Sneha", course: "MongoDB" },
];

function Students() {
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {studentData.map((s) => (
          <li key={s.id}>
            <Link to={`/students/${s.id}`}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;