'use client'
import TableCustom from "@/components/table";
import { columnsConsultorios, columnsMedicos, consultorios } from "@/utils";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WatchLaterIcon from "@mui/icons-material/WatchLater";


import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
export default function ConsultorioTable() {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});

    const columns: columnsConsultorios[] = [
        { id: "id", label: "ID", minWidth: 150, align: "center", icon: <DateRangeIcon /> },
        { id: "name", label: "Nombre", minWidth: 100, align: "center", icon: <WatchLaterIcon /> },
        {
            id: "acciones",
            label: "Acciones",
            minWidth: 100,
            align: "center",
        }
    ];

    interface Data {
        id: number | string,
        name: string,
        acciones: any;
    }

    function createData(
        id: string | number,
        name: string,
        setOpen: any,
    ): Data {
        const data = {
            id,
            name
        };

        const acciones = (
            <div style={{ display: "flex", gap: "5px", justifyContent: "flex-end" }}>
                {/* <p
                    onClick={() => {
                        setOpen(true);
                        //   setData(data);
                    }}
                >
                    <RemoveRedEyeIcon />
                </p> */}
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
            acciones,
        };
    }


    const espes=()=>{
        const datos=   consultorios.map((item)=>createData(item.id,item.name,setOpen));
        return datos;
       }
   
   
       const rows =espes();
  

    return (
        <TableCustom columns={columns} rows={rows} open={open} setOpen={setOpen} data={data} setData={setData} type="consultorio" />
    );
}
