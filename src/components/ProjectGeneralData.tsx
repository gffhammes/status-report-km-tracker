import { Container, Stack, Typography } from "@mui/material";
import { projectData } from "../data/projectData";
import EastIcon from "@mui/icons-material/East";

export interface IProjectGeneralDataProps {}

export const ProjectGeneralData = () => {
  return (
    <Container>
      <Stack>
        <Typography variant="overline" fontSize={20}>
          status report
        </Typography>
        <Typography variant="h1">{projectData.name}</Typography>

        <Stack direction="row" alignItems="center" gap={2} color="#7c7c7c">
          <Typography fontSize={24} textTransform="uppercase">
            {projectData.currentPeriod.start.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
            })}
          </Typography>

          <EastIcon color="inherit" fontSize="large" />

          <Typography fontSize={24} textTransform="uppercase">
            {projectData.currentPeriod.end.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
            })}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
