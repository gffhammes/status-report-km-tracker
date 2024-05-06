import { Container, Stack, Typography } from "@mui/material";
import { projectData } from "../../data/projectData";
import { ProjectPhasesSummaryItem } from "./ProjectPhasesSummaryItem";

export interface IProjectPhasesSummaryProps {}

export const ProjectPhasesSummary = () => {
  return (
    <Container>
      <Typography variant="h2">FASES</Typography>

      <Stack direction="row" gap={2} overflow="scroll">
        {projectData.phases.map((phase, index) => {
          return (
            <ProjectPhasesSummaryItem index={index} phase={phase} key={index} />
          );
        })}
      </Stack>
    </Container>
  );
};
