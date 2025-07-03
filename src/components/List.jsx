import React from 'react';
import Item from './Item';

function List({ students, deleteStudent, editStudent }) {
  if (students.length === 0) {
    return <p>No hay alumnos registrados.</p>;
  }

  return (
    <ul className="list">
      {students.map((student) => (
        <Item
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
          editStudent={editStudent}
        />
      ))}
    </ul>
  );
}

export default List;
