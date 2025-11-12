"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";

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

interface ModalPreviewDoctorProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
}

export default function ModalDoctorPreview({
  open,
  setOpen,
  data,
}: ModalPreviewDoctorProps) {
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
                Detalle del Médico
              </Typography>
            </Box>
            <Box sx={{ textAlign: "end", width: "50%" }}>
              <ClearIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
            </Box>
          </Box>

          <Typography sx={style.textField}>ID: {data.id}</Typography>
          <Typography sx={style.textField}>
            Nombre: {data.name}
          </Typography>
          <Typography sx={style.textField}>email: {data.email}</Typography>
         
        </Box>
      </Modal>
    </div>
  );
}
