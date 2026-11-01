function StudentList({ students }) {
  if (students.length === 0) {
    return <p className="empty">No students registered yet.</p>;
  }

  return (
    <div className="list">
      <h2>Registered Students</h2>
      {students.map((s, index) => (
        <div key={index} className="card">
          <p><strong>Name:</strong> {s.name}</p>
          <p><strong>Email:</strong> {s.email}</p>
          <p><strong>Course:</strong> {s.course}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;