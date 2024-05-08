import { Box, Container, Typography } from "@mui/material";
import { projectData } from "../data/projectData";

export interface IProjectGeneralDataProps {}

export const ProjectGeneralData = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h1">{projectData.name}</Typography>
      </Box>
    </Container>
  );
};
