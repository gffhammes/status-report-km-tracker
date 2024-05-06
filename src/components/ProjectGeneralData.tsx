import { Box, Container } from "@mui/material";
import { projectData } from "../data/projectData";

export interface IProjectGeneralDataProps {}

export const ProjectGeneralData = () => {
  return (
    <Container>
      <Box>{projectData.name}</Box>
    </Container>
  );
};
