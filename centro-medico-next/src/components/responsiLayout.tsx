"use client";

import { useState } from "react";
import { useMediaQuery, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "@/components/sidebar";

export default function ResponsiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        minHeight: "100vh",
      }}
    >
      {!isSmallScreen && (
        <div
          style={{
            width: "20%",
            height: "100vh",
            background: "#6362cf",
            color: "white",
          }}
        >
          <Sidebar />
        </div>
      )}

      {isSmallScreen && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#6362cf",
            color: "white",
            padding: "10px",
          }}
        >
          <IconButton onClick={() => setOpen(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
          <h3 style={{ margin: 0 }}>Centro Médico</h3>
        </div>
      )}

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: "70%", backgroundColor: "#6362cf", color: "white" },
        }}
      >
        <Sidebar />
      </Drawer>

      <div
        style={{
          flex: 1,
          padding: "15px 10px 5px 15px",
          background: "white",
        }}
      >
        {children}
      </div>
    </div>
  );
}
