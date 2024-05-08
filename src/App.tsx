import {
  Box,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
} from "@mui/material";
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
  palette: {
    primary: {
      main: "#0066FF",
    },
  },
  typography: {
    h2: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#cbcbcb",
      textTransform: "uppercase",
    },
    allVariants: {
      color: "#7c7c7c",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        position="sticky"
        top={0}
        zIndex={999}
        sx={{ width: "100%", backgroundColor: "primary.main", py: 2 }}
      >
        <Container>
          <img src="/isolutions-logo.svg" alt="iSolutions" height={32} />
        </Container>
      </Box>

      <Stack gap={8} sx={{ py: 8 }}>
        <ProjectGeneralData />

        <ProjectPhasesSummary />

        <ProjectPeriodActivities />

        <Container>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
            <ProjectProblems />

            <ProjectNextSteps />
          </Box>
        </Container>

        <ProjectAllPhasesDetails />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
