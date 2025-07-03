import React from 'react';

function Item({ student, deleteStudent, editStudent }) {
  const getAppreciation = (avg) => {
    if (avg < 4.0) return 'Deficiente';
    if (avg < 5.6) return 'Con mejora';
    if (avg < 6.5) return 'Buen trabajo';
    return 'Destacado';
  };

  return (
    <li className="item">
      <strong>{student.name}</strong> - {student.subject} - Promedio: {student.average} - 
      <span className="appreciation"> {getAppreciation(student.average)}</span>
      <button onClick={() => editStudent(student)}>Editar</button>
      <button onClick={() => deleteStudent(student.id)}>Eliminar</button>
    </li>
  );
}

export default Item;
