import { useState } from "react";

const courses = ["React.js", "Node.js", "MongoDB", "Full-Stack MERN"];

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.course) {
      newErrors.course = "Please select a course";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      setFormData({ name: "", email: "", course: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Student Registration</h2>

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label>Email</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Course</label>
      <select name="course" value={formData.course} onChange={handleChange}>
        <option value="">-- Select course --</option>
        {courses.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      {errors.course && <p className="error">{errors.course}</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default StudentForm;