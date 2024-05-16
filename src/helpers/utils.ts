export interface ISumDaysToDateArgs {
  initialDate: Date;
  daysToSum: number;
}

export const addWorkDays = ({ initialDate, daysToSum }: ISumDaysToDateArgs) => {
  const finalDate = new Date(initialDate);

  for (let i = 1; i <= daysToSum; i++) {
    finalDate.setDate(finalDate.getDate() + 1);
    if (finalDate.getDay() === 6) {
      finalDate.setDate(finalDate.getDate() + 2);
    } else if (finalDate.getDay() === 0) {
      finalDate.setDate(finalDate.getDate() + 1);
    }
  }

  return finalDate;
};
