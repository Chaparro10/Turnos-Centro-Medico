
import { menu } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (        
    <div style={{ textAlign: "center" }}>
      <div style={{ padding: "15px" }}>
        <Image
          src="/icon_hospital.avif"
          width={100}
          height={100}
          alt="logo hospital"
        />
        <h1>Centro Médico</h1>
      </div>

      <ul style={{ padding: "20px" }}>
        {menu.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            style={{
              height: "60px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
              padding: "10px",
            }}
          >
            {<item.icon />} {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
