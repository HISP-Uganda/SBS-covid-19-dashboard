import { Moment } from "moment";
export interface Store {
  ougroups: string;
  part: string;
  oulevels: string;
  currentUser: string;
  userUnits: any[];
  period: [Moment, Moment];
  name?: string;
  zoom: number;
  locations?: { id: string; name: string }[];
  selectedUnits: string;
  currentLevel: number;
  sublevel: number;
  sublevels: any[];
  sublevelUnits: { id: string; name: string }[];
  selectedLevel: string;
  selectedUnitLevel: string;
  dlgsublevels: any[];
  weeks: any[];
}

export interface DataValue {
  parameters: { [key: string]: string } | undefined;
  sqlView: string | "" | undefined | null;
}
export interface Indicator {
  numerator: DataValue;
  denominator: DataValue;
}
