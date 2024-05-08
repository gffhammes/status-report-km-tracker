import { Container, Typography } from "@mui/material";
import { projectData } from "../../data/projectData";
import { ProjectPhasesSummaryItem } from "./ProjectPhasesSummaryItem";
import { Carousel } from "../Carousel/Carousel";

export interface IProjectPhasesSummaryProps {}

export const ProjectPhasesSummary = () => {
  return (
    <Container>
      <Typography variant="h2">FASES</Typography>

      <Carousel
        data={projectData.phases}
        getSlide={(data, index) => (
          <ProjectPhasesSummaryItem index={index} phase={data} />
        )}
        slideFlex="0 0 min-content"
        options={{
          startIndex: projectData.currentPhaseIndex,
          skipSnaps: true,
          align: "start",
        }}
      />
    </Container>
  );
};
