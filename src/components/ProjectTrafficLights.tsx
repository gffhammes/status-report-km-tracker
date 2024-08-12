import { Box, Stack } from "@mui/material";
import { projectData } from "../data/projectData";

export interface IProjectTrafficLightsProps {}

const trafficLightDimentions = "3rem";

export const ProjectTrafficLights = (props: IProjectTrafficLightsProps) => {
  return (
    <Stack direction="row" gap={1}>
      <Box
        sx={{
          height: trafficLightDimentions,
          width: trafficLightDimentions,
          borderRadius: trafficLightDimentions,
          backgroundColor: "#1aae06",
          opacity: projectData.generalStatus === "good" ? 1 : 0.2,
        }}
      />

      <Box
        sx={{
          height: trafficLightDimentions,
          width: trafficLightDimentions,
          borderRadius: trafficLightDimentions,
          backgroundColor: "#ff9d00",
          opacity: projectData.generalStatus === "alert" ? 1 : 0.2,
        }}
      />

      <Box
        sx={{
          height: trafficLightDimentions,
          width: trafficLightDimentions,
          borderRadius: trafficLightDimentions,
          backgroundColor: "#d22626",
          opacity: projectData.generalStatus === "problem" ? 1 : 0.2,
        }}
      />
    </Stack>
  );
};
