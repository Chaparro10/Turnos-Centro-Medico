'use client'

import { Button, Grid, useMediaQuery } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TodayIcon from "@mui/icons-material/Today";
import { useState } from "react";
import ModalFormMedico from "@/components/modalFormMedico";

export default function Header() {

  const [open,setOpen]= useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  if(open) return <ModalFormMedico open={open} setOpen={setOpen}/>

  return (
    <Grid container sx={{marginBottom: "30px"}} spacing={1}>
          <Grid size={{xs:12,md:6}}>
          <h1 style={{ color: "#201d15", gap: "10px" }}>
          <TodayIcon /> Médicos Activos
        </h1>
          </Grid>
          <Grid size={{xs:12,md:6}} sx={{textAlign:isSmallScreen ? 'left' :'end'}}>
          <Button variant="contained" sx={{ gap: "10px" }} onClick={()=>setOpen(true)}>
          <AddCircleIcon /> Nuevo Médico
        </Button>
          </Grid>
    </Grid>
  );
}
