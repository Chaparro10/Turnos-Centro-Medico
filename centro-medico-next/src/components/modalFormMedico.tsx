"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "7px",
  textField: {
    color: "black",
  },
};

interface ModalFormProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
  type?:string
}

export default function ModalFormMedico({
  open,
  setOpen,
  data,
}: ModalFormProps) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ color: "black", display: "flex", mb: "20px" }}>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={style.textField}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Nuevo Médico
              </Typography>
            </Box>
            <Box sx={{ textAlign: "end", width: "50%" }}>
              <ClearIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
            </Box>
          </Box>

          <Grid container spacing={1}>
            <Grid size={{ xs: 12}}>
             <TextField fullWidth label="Ingresa el nombre" />
            </Grid>
             <Grid size={{ xs: 12}}>
             <TextField fullWidth label="Ingresa el apellido" />
            </Grid>
             <Grid size={{ xs: 12 }}>
             <TextField fullWidth label="Ingresa el email" />
            </Grid>
             <Grid size={{ xs: 12}}>
             <TextField fullWidth label="Ingresa el password" />
            </Grid>
          

            <Grid container size={12} spacing={1}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Button fullWidth variant="contained" sx={{background:'#808080'}}>
                  Cancelar
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Button fullWidth variant="contained">
                  Crear Médico
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </Box>
      </Modal>
    </div>
  );
}
