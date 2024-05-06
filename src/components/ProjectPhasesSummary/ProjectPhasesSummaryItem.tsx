import { Box, Paper, Typography } from "@mui/material";
import { IProjectPhase } from "../../data/interfaces";
import { projectData } from "../../data/projectData";

export interface IProjectPhasesSummaryItemProps {
  index: number;
  phase: IProjectPhase;
}

export const ProjectPhasesSummaryItem = ({
  index,
  phase,
}: IProjectPhasesSummaryItemProps) => {
  const isActivePhase = projectData.currentPhaseIndex === index;

  const getDateText = () => {
    if (isActivePhase) {
      return (
        "Previsão de entrega em " +
        phase.expectedEndDate.toLocaleDateString("pt-BR")
      );
    }

    if (phase.actualEndDate) {
      return "Entregue em " + phase.actualEndDate?.toLocaleDateString("pt-BR");
    }

    return (
      "Previsão de início em " +
      phase.expectedStartDate.toLocaleDateString("pt-BR")
    );
  };

  return (
    <Paper variant="outlined">
      <Box display="grid" gridTemplateColumns="100px max-content">
        <Typography>{index + 1}</Typography>

        <Box>
          <Typography>{phase.name}</Typography>

          <Typography>{getDateText()}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};
