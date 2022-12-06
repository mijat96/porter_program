import { Time } from "@angular/common";

export interface ShiftRepor{
    _id: number;
    tookOverShift: string;
    time: String;
    tookOverShiftCorrectCondition: boolean;
    events: string;
    visitController: string;
    shift: string;
    daytimePatrol: string;
    nighttimePatrol: string;
    notes: string;
    extraordinaryEvent: string;
  }