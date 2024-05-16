import { Box, Paper, Stack, Typography } from "@mui/material";
import { projectData } from "../data/projectData";

export interface IProjectProblemsProps {}

export const ProjectProblems = () => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 4, borderRadius: 4, backgroundColor: "#f4f4f4" }}
    >
      <Stack gap={2}>
        <Typography variant="h2">PROBLEMAS/IMPEDITIVOS</Typography>

        <Stack component="ul" gap={1} sx={{ listStylePosition: "inside" }}>
          {projectData.problems.length > 0 ? (
            projectData.problems.map((nextStep, index) => {
              return (
                <Box component="li" color="#7c7c7c" key={index}>
                  {nextStep}
                </Box>
              );
            })
          ) : (
            <Typography>Sem impeditivos</Typography>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
};
