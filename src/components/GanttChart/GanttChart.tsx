import { Box, Container, Stack, Typography } from "@mui/material";
import Chart from "react-google-charts";

export interface IGanttChartProps {}

export interface IGanttChartRow {
  id: string;
  name: string;
  resource: string;
  startDate: string;
  endDate: string;
  duration: number | null;
  percentComplete: number;
  dependencies: string | null;
}

export const GanttChart = () => {
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  //   const teste: IGanttChartRow[] = [{

  //   }];

  const rows = [
    [
      "2014Spring",
      "Spring 2014",
      "spring",
      new Date(2014, 2, 22),
      new Date(2014, 5, 20),
      null,
      100,
      null,
    ],
    [
      "2014Summer",
      "Summer 2014",
      "summer",
      new Date(2014, 5, 21),
      new Date(2014, 8, 20),
      null,
      100,
      null,
    ],
    [
      "2014Autumn",
      "Autumn 2014",
      "autumn",
      new Date(2014, 8, 21),
      new Date(2014, 11, 20),
      null,
      100,
      null,
    ],
    [
      "2014Winter",
      "Winter 2014",
      "winter",
      new Date(2014, 11, 21),
      new Date(2015, 2, 21),
      null,
      100,
      null,
    ],
    [
      "2015Spring",
      "Spring 2015",
      "spring",
      new Date(2015, 2, 22),
      new Date(2015, 5, 20),
      null,
      50,
      null,
    ],
    [
      "2015Summer",
      "Summer 2015",
      "summer",
      new Date(2015, 5, 21),
      new Date(2015, 8, 20),
      null,
      0,
      null,
    ],
    [
      "2015Autumn",
      "Autumn 2015",
      "autumn",
      new Date(2015, 8, 21),
      new Date(2015, 11, 20),
      null,
      0,
      null,
    ],
    [
      "2015Winter",
      "Winter 2015",
      "winter",
      new Date(2015, 11, 21),
      new Date(2016, 2, 21),
      null,
      0,
      null,
    ],
    [
      "Football",
      "Football Season",
      "sports",
      new Date(2014, 8, 4),
      new Date(2015, 1, 1),
      null,
      100,
      null,
    ],
    [
      "Baseball",
      "Baseball Season",
      "sports",
      new Date(2015, 2, 31),
      new Date(2015, 9, 20),
      null,
      14,
      null,
    ],
    [
      "Basketball",
      "Basketball Season",
      "sports",
      new Date(2014, 9, 28),
      new Date(2015, 5, 20),
      null,
      86,
      null,
    ],
    [
      "Hockey",
      "Hockey Season",
      "sports",
      new Date(2014, 9, 8),
      new Date(2015, 5, 21),
      null,
      89,
      null,
    ],
  ];

  const data = [columns, ...rows];

  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h2">GANTT</Typography>

        <Box height="50rem">
          <Chart chartType="Gantt" width="100%" height="100%" data={data} />
        </Box>
      </Stack>
    </Container>
  );
};
