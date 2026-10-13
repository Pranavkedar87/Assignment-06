
import React from "react";

function StudentDetails({ student }) {
  if (!student) {
    return <p>No student details submitted yet.</p>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Roll Number: {student.roll}</p>
      <p>Department: {student.department}</p>
      <p>Marks: {student.marks}/100</p>
    </div>
  );
}

export default StudentDetails;
