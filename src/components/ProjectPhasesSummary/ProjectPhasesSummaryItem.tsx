import { Box, Paper, Stack, Typography } from "@mui/material";
import { IProjectPhase } from "../../data/interfaces";
import { projectData } from "../../data/projectData";
import { addWorkDays } from "../../helpers/utils";

export interface IProjectPhasesSummaryItemProps {
  index: number;
  phase: IProjectPhase;
}

export const ProjectPhasesSummaryItem = ({
  index,
  phase,
}: IProjectPhasesSummaryItemProps) => {
  const isActivePhase = projectData.currentPhaseIndex === index;
  const isLastPhase = index === projectData.phases.length - 1;

  const getDateText = () => {
    if (isActivePhase) {
      if (phase.expectedEndDate) {
        return (
          "Previsão de entrega em " +
          phase.expectedEndDate.toLocaleDateString("pt-BR")
        );
      }

      const expectedEndDate = addWorkDays({
        initialDate: phase.expectedStartDate,
        daysToSum: phase.expectedDurationInDays,
      });

      return (
        "Previsão de entrega em " + expectedEndDate.toLocaleDateString("pt-BR")
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
    <Stack direction="row" alignItems="center">
      <Paper
        variant="outlined"
        sx={{
          borderColor: isActivePhase ? "primary.main" : "default",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Box display="grid" gridTemplateColumns="100px max-content">
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: isActivePhase ? "primary.main" : "#C8C8C8" }}
          >
            <Typography fontSize={64} color="white" fontWeight="bold">
              {index + 1}
            </Typography>
          </Stack>

          <Box
            sx={{
              p: 2,
              pr: 3,
              backgroundColor: isActivePhase ? "#DCEAFF" : "#f4f4f4",
            }}
          >
            <Typography fontSize={24} fontWeight="bold">
              {phase.name}
            </Typography>

            <Typography>{getDateText()}</Typography>
          </Box>
        </Box>
      </Paper>

      {!isLastPhase && (
        <Box sx={{ width: "65px", borderBottom: "5px dashed #e0e0e0" }} />
      )}
    </Stack>
  );
};
