import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { IProjectPhase } from "../../data/interfaces";

export interface IProjectAllPhasesDetailsItemProps {
  phase: IProjectPhase;
}

export const ProjectAllPhasesDetailsItem = ({
  phase,
}: IProjectAllPhasesDetailsItemProps) => {
  return (
    <Box>
      <Typography fontSize={24}>{phase.name}</Typography>

      {phase.activities.map((activity, index) => {
        return (
          <Stack key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  readOnly
                  checked={activity.status === "done"}
                  indeterminate={activity.status === "doing"}
                />
              }
              label={activity.name}
            />
          </Stack>
        );
      })}
    </Box>
  );
};
