import Card from "@/components/card";
import { turnos } from "@/utils";
import { Grid } from "@mui/material";

export default function Analytics() {
  return (
    <div>
      {/* <h1>Analitycs</h1> */}
      <Grid container spacing={3}>
        {turnos.map((card) => {
          const isLarge = card.id == 4 || card.id == 5;
          return (
            <Grid key={card.id} size={isLarge ? 6 : 4}>
              <Card key={card.id} card={card} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
