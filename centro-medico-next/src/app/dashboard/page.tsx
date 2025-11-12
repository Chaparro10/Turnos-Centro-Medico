export default function Dashboard() {
  const fechaActual: Date = new Date();
  const fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
    weekday: "long", // día de la semana (lunes, martes, etc.)
    day: "numeric", // número del día
    month: "long", // nombre del mes
    year: "numeric", // año
  });
  return (
    <div style={{marginBottom:'20px'}}>
      <h1 style={{color:'black'}}>Dashboard de Turnos</h1>
      <p style={{color:'#83868b'}}>{fechaFormateada}</p>
    </div>
  );
}
