
import React, { useState } from "react";

function StudentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [department, setDepartment] = useState("");
  const [marks, setMarks] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({ name, roll, department, marks });

    setName("");
    setRoll("");
    setDepartment("");
    setMarks("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Form</h2>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        required
      />

      <input
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Marks (out of 100)"
        min="0"
        max="100"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
