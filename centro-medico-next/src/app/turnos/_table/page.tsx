"use client";
import TableCustom from "@/components/table";
import { columnsTurno } from "@/utils";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PersonIcon from "@mui/icons-material/Person";
import PersonalInjuryIcon from "@mui/icons-material/PersonalInjury";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
export default function TurnosTable() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const columns: columnsTurno[] = [
    { id: "fecha", label: "Fecha", minWidth: 150, icon: <DateRangeIcon /> },
    { id: "hora", label: "Hora", minWidth: 100, icon: <WatchLaterIcon /> },
    {
      id: "paciente",
      label: "Paciente",
      minWidth: 190,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
      icon: <PersonIcon />,
    },
    {
      id: "medico",
      label: "Médico",
      minWidth: 170,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
      icon: <PersonalInjuryIcon />,
    },
    {
      id: "especialidad",
      label: "Especialidad",
      minWidth: 190,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
      icon: <WatchLaterIcon />,
    },
    {
      id: "consultorio",
      label: "Consultorio",
      minWidth: 50,
      align: "left",
      format: (value: number) => value.toFixed(2),
      icon: <LocalHospitalIcon />,
    },
    {
      id: "estado",
      label: "Estado",
      minWidth: 170,
      align: "center",
      format: (value: number) => value.toFixed(2),
    },
    {
      id: "acciones",
      label: "Acciones",
      minWidth: 100,
      align: "right",
    },
  ];

  interface Data {
    fecha: string;
    hora: string;
    paciente: string;
    medico: string;
    especialidad: string;
    consultorio: string;
    estado: any;
    acciones: any;
  }

  function createData(
    id: string | number,
    fecha: string,
    hora: string,
    paciente: string,
    medico: string,
    especialidad: string,
    consultorio: string,
    estado: string,
    setOpen: any,
    setData: any
  ): Data {
    const data = {
      id,
      fecha,
      hora,
      paciente,
      medico,
      especialidad,
      consultorio,
      estado,
    };

    const backgroundColorEstado:Record<string,string> = {
      esperando: "#f4bd11",
      atendiendo: "#34734a",
      finalizado: "#5f6879",
    };

    const acciones = (
      <div style={{ display: "flex", gap: "5px", justifyContent: "flex-end" }}>
        <p
          onClick={() => {
            setOpen(true);
            setData(data);
          }}
        >
          <RemoveRedEyeIcon />
        </p>
        <p>
          <EditIcon />
        </p>
        <p>
          <DeleteIcon />
        </p>
      </div>
    );

    const estadoContainer = (
      <div
        style={{
          backgroundColor: backgroundColorEstado[estado] || "#ccc",
          borderRadius: "7px",
          padding: "7px",
        }}
      >
        <p>{estado}</p>
      </div>
    );

    return {
      fecha,
      hora,
      paciente,
      medico,
      especialidad,
      consultorio,
      estado: estadoContainer,
      acciones,
    };
  }

  const rows = [
    createData(
      1,
      "2025-10-1",
      "11:00",
      "Juan rios",
      "Dr.Felipe",
      "Medicina General",
      "1200",
      "atendiendo",
      setOpen,
      setData
    ),
  ];

  return (
    <TableCustom
      columns={columns}
      rows={rows}
      open={open}
      setOpen={setOpen}
      data={data}
      setData={setData}
      type="turno"
    />
  );
}
