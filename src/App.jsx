import { useState } from 'react';

export default function App() {
  const [evaluations, setEvaluations] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    asignatura: '',
    promedio: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...evaluations];
      updated[editingIndex] = form;
      setEvaluations(updated);
      setEditingIndex(null);
    } else {
      setEvaluations([...evaluations, form]);
    }
    setForm({ nombre: '', asignatura: '', promedio: '' });
  };

  const handleEdit = (index) => {
    setForm(evaluations[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = evaluations.filter((_, i) => i !== index);
    setEvaluations(filtered);
  };

  return (
    <main>
      <h1>Evaluación de Alumnos</h1>
      <div className="card">
        <h2>{editingIndex !== null ? 'Editar Evaluación' : 'Agregar Nueva Evaluación'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre del Alumno:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ej: Juan Pérez"
            value={form.nombre}
            onChange={handleChange}
          />

          <label>Asignatura:</label>
          <input
            type="text"
            name="asignatura"
            placeholder="Ej: Matemáticas"
            value={form.asignatura}
            onChange={handleChange}
          />

          <label>Promedio (0.0 - 7.0):</label>
          <input
            type="number"
            name="promedio"
            placeholder="Ej: 5.5"
            min="0"
            max="7"
            step="0.1"
            value={form.promedio}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="primary"
          >
            {editingIndex !== null ? 'Actualizar Evaluación' : 'Agregar Evaluación'}
          </button>
        </form>
      </div>

      <section className="evaluations-list">
        <h2>Evaluaciones Guardadas</h2>
        {evaluations.length === 0 ? (
          <p>No hay evaluaciones guardadas aún. ¡Agrega una!</p>
        ) : (
          evaluations.map((eva, i) => (
            <div className="evaluation-card" key={i}>
              <p><strong>Alumno:</strong> {eva.nombre}</p>
              <p><strong>Asignatura:</strong> {eva.asignatura}</p>
              <p><strong>Promedio:</strong> {eva.promedio}</p>
              {parseFloat(eva.promedio) === 7 && (
                <span className="badge">Destacado</span>
              )}
              <div style={{ marginTop: '1rem' }}>
                <button className="edit" onClick={() => handleEdit(i)}>Editar</button>{' '}
                <button className="delete" onClick={() => handleDelete(i)}>Eliminar</button>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
