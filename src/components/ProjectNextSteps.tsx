import { Box, Paper, Stack, Typography } from "@mui/material";
import { projectData } from "../data/projectData";

export interface IProjectNextStepsProps {}

export const ProjectNextSteps = () => {
  return (
    <Paper variant="outlined" sx={{ p: 4, borderRadius: 4 }}>
      <Stack gap={2}>
        <Typography variant="h2">PRÓXIMOS PASSOS</Typography>

        <Stack component="ul" gap={1} sx={{ listStylePosition: "inside" }}>
          {projectData.nextSteps.map((nextStep, index) => {
            return (
              <Box component="li" color="primary.main" key={index}>
                {nextStep}
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </Paper>
  );
};
