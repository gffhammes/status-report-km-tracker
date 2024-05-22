import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { IProjectPhase } from "../../data/interfaces";
import { addWorkDays } from "../../helpers/utils";
import DateRangeIcon from "@mui/icons-material/DateRange";

export interface IProjectAllPhasesDetailsItemProps {
  phase: IProjectPhase;
}

export const ProjectAllPhasesDetailsItem = ({
  phase,
}: IProjectAllPhasesDetailsItemProps) => {
  const initialDate = phase.expectedStartDate;
  const finalDate = addWorkDays({
    initialDate,
    daysToSum: phase.expectedDurationInDays - 1,
  });

  const datesText = `${initialDate.toLocaleDateString(
    "pt-BR"
  )} até ${finalDate.toLocaleDateString("pt-BR")}`;

  return (
    <Box>
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography fontSize={24}>{phase.name}</Typography>

        <Chip label={datesText} size="small" icon={<DateRangeIcon />} />
      </Stack>

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
