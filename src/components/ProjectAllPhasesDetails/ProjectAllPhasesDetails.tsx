import { Container, Stack, Typography } from "@mui/material";
import { projectData } from "../../data/projectData";
import { ProjectAllPhasesDetailsItem } from "./ProjectAllPhasesDetailsItem";

export interface IProjectAllPhasesDetailsProps {}

export const ProjectAllPhasesDetails = () => {
  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h2">DETALHE DAS FASES</Typography>

        <Stack gap={4}>
          {projectData.phases.map((phase, index) => {
            return <ProjectAllPhasesDetailsItem phase={phase} key={index} />;
          })}
        </Stack>
      </Stack>
    </Container>
  );
};
