import { domain } from "./Domain";
import {Moment} from 'moment'

export const changeCurrentUser = domain.createEvent<string>();
export const setGeojson = domain.createEvent<any>();
export const setLocations = domain.createEvent<{ id: string; name: string }[]>();
export const setSelectedUnits = domain.createEvent<string>();
export const changePeriod = domain.createEvent<[moment.Moment, moment.Moment]>("change period");
export const setUserUnits = domain.createEvent<any[]>();
export const setCurrentLevel = domain.createEvent<number>();
export const setZoom = domain.createEvent<number>();
export const setSublevel = domain.createEvent<number>();
export const setDays = domain.createEvent<any[]>();
export const setSublevels = domain.createEvent<any[]>(); 
export const setDlgsublevels = domain.createEvent<any[]>(); 
export const setWeeks = domain.createEvent<any[]>();
export const setOugroups = domain.createEvent<string>();  
export const setOulevels = domain.createEvent<string>(); 