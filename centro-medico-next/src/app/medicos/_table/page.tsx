'use client'
import TableCustom from "@/components/table";
import { columnsMedicos, medicos } from "@/utils";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PersonIcon from "@mui/icons-material/Person";


import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
export default function MedicosTable() {

      const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
    
    const columns: columnsMedicos[] = [
      { id: "id", label: "ID", minWidth: 150, icon: <DateRangeIcon /> },
      { id: "name", label: "Nombre", minWidth: 100, icon: <WatchLaterIcon /> },
      {
        id: "email",
        label: "Email",
        minWidth: 190,
        align: "left",
        format: (value: number) => value.toLocaleString("en-US"),
        icon: <PersonIcon />,
      },
      {
        id: "acciones",
        label: "Acciones",
        minWidth: 100,
        align: "right",
      }
    ];
    
    interface Data {
      id:number | string,
      name:string,
      email:string
      acciones: any;
    }
    
    function createData(
      id: string | number,
      name: string,
      email:string,
      setOpen: any,
      setData: any
    ): Data {
      const data = {
        id,
       name,
       email
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
    

    
      return {
       id,
       name,
       email,
        acciones,
      };
    }



    const espes=()=>{
      const datos=   medicos.map((item)=>createData(item.id,item.user.name,item.user.email,setOpen,setData));
      return datos;
     }
 
 
     const rows =espes();


  return (
      <TableCustom columns={columns} rows={rows} open={open} setOpen={setOpen} data={data} setData={setData}  type="doctor" />
  );
}
