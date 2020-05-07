import { lift } from "./streamable.js";
import { map as mapObs, onNotify as onNotifyObs, scan as scanObs, } from "../../observable.js";
export const map = (mapper) => lift(mapObs(mapper));
export const onNotify = (onNotify) => lift(onNotifyObs(onNotify));
export const scan = (scanner, initalValue) => lift(scanObs(scanner, initalValue));
