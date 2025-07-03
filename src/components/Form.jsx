import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateStudent, studentToEdit }) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [average, setAverage] = useState('');

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setSubject(studentToEdit.subject);
      setAverage(studentToEdit.average);
    } else {
      setName('');
      setSubject('');
      setAverage('');
    }
  }, [studentToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && subject.trim() && average !== '') {
      const avgNumber = parseFloat(average);
      if (avgNumber >= 1 && avgNumber <= 7) {
        addOrUpdateStudent({ name, subject, average: avgNumber });
        setName('');
        setSubject('');
        setAverage('');
      } else {
        alert('El promedio debe estar entre 1.0 y 7.0');
      }
    } else {
      alert('Completa todos los campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Nombre del Alumno"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Asignatura"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="number"
        step="0.1"
        placeholder="Promedio (1.0 - 7.0)"
        value={average}
        onChange={(e) => setAverage(e.target.value)}
      />
      <button type="submit">
        {studentToEdit ? 'Actualizar Alumno' : 'Agregar Alumno'}
      </button>
    </form>
  );
}

export default Form;
