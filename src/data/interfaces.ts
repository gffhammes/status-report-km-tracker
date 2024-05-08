export interface IActivities {
  name: string;
  expectedDays: number;
  status: "to do" | "doing" | "done";
}

export interface IProjectPhase {
  name: string;
  expectedStartDate: Date;
  actualStartDate?: Date;
  expectedEndDate: Date;
  actualEndDate?: Date;
  completionPercentage: number;
  activities: IActivities[];
}

export interface IProject {
  name: string;
  generalStatus: "good" | "alert" | "problem";
  phases: IProjectPhase[];
  currentPhaseIndex: number;
  periodActivities: IActivities[];
  problems: string[];
  nextSteps: string[];
  currentPeriod: {
    start: Date;
    end: Date;
  };
}
