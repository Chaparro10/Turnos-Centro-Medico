'use client'

import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TodayIcon from "@mui/icons-material/Today";
import { useState } from "react";
import ModalFormTurno from "@/components/modalFormTurno";

export default function Header() {

  const [open,setOpen]= useState(false);

  if(open) return <ModalFormTurno open={open} setOpen={setOpen}/>

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "30px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1 style={{ color: "#201d15", gap: "10px" }}>
          <TodayIcon /> Turnos Activos
        </h1>
      </div>
      <div>
        <Button variant="contained" sx={{ gap: "10px" }} onClick={()=>setOpen(true)}>
          <AddCircleIcon /> Nuevo Turno
        </Button>
      </div>
    </div>
  );
}
