import { Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ProjectGeneralData } from "./components/ProjectGeneralData";
import { ProjectPhasesSummary } from "./components/ProjectPhasesSummary/ProjectPhasesSummary";
import { ProjectPeriodActivities } from "./components/ProjectPeriodActivities";
import { ProjectNextSteps } from "./components/ProjectNextSteps";
import { ProjectProblems } from "./components/ProjectProblems";
import { ProjectAllPhasesDetails } from "./components/ProjectAllPhasesDetails/ProjectAllPhasesDetails";

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 24,
      textTransform: "uppercase",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack gap={8}>
        <ProjectGeneralData />

        <ProjectPhasesSummary />

        <ProjectPeriodActivities />

        <Container>
          <Stack direction="row" gap={4}>
            <ProjectProblems />

            <ProjectNextSteps />
          </Stack>
        </Container>

        <ProjectAllPhasesDetails />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
