"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { useState } from "react";
import ModalPreview from "./modalPreview";
import { columnsMedicos, columnsTurno } from "@/utils";
import ModalDoctorPreview from "./modalPreviewDoctor";

interface TableCustomProps {
  columns: columnsTurno[] | columnsMedicos[];
  rows: any[];
  open: any;
  setOpen: any;
  data: any;
  setData: any;
  type: "doctor" | "usuario" | "turno" | "consultorio";
}

export default function TableCustom({
  columns,
  rows,
  open,
  setOpen,
  data,
  setData,
  type,
}: TableCustomProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (open) {
    switch (type) {
      case "doctor":
        return <ModalDoctorPreview open={open} setOpen={setOpen} data={data} />;
      case "usuario":
        return <h1>Usuarios</h1>;
      case "turno":
        return <ModalPreview open={open} setOpen={setOpen} data={data} />;
    }
  }

  //   if (open) return  <ModalPreview open={open} setOpen={setOpen} data={data} />;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    background: "#808080",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              justifyContent: column.align,
                            }}
                          >
                            {column.icon && <div>{column.icon}</div>}

                            {column.id == "estado" || "acciones" ? (
                              value
                            ) : (
                              <p>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </p>
                            )}
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
