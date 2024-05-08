import { Chip, Container, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { projectData } from "../data/projectData";
import { IActivities } from "../data/interfaces";

export interface IProjectPeriodActivitiesProps {}

export const ProjectPeriodActivities = () => {
  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h2">atividades do período</Typography>

        <DataGrid
          columns={columns}
          getRowId={(row) => row["name"]}
          rows={projectData.periodActivities}
          density="compact"
          hideFooter
        />
      </Stack>
    </Container>
  );
};

const columns: GridColDef<IActivities>[] = [
  { field: "name", headerName: "Descrição", width: 500 },
  {
    field: "status",
    headerName: "Status",
    width: 300,
    renderCell: (params) => {
      switch (params.value) {
        case "to do":
          return <Chip label="A fazer" size="small" />;

        case "doing":
          return <Chip label="Sendo feito" size="small" color="warning" />;

        case "done":
          return <Chip label="Finalizado" size="small" color="success" />;
      }
    },
  },
];
