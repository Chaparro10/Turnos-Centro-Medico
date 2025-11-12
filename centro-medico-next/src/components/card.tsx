import { CardTurnos } from "@/utils";
import Image from "next/image";

export default function Card({ card }: { card: CardTurnos }) {
  return (
    <div
      style={{
        background: card.background,
        height: "280px",
        borderRadius: "15px",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <div>
        <card.logo sx={{ fontSize: 70, color: "white" }}/>
      </div>

      <p style={{ fontSize: "70px" }}>{card.value}</p>
      <p style={{ fontSize: "20px" }}>{card.name}</p>
    </div>
  );
}
