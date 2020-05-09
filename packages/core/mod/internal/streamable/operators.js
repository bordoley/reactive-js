import { map as mapObs, mapTo as mapToObs, onNotify as onNotifyObs, scan as scanObs, } from "../../observable.js";
import { lift } from "./streamable.js";
export const map = (mapper) => lift(mapObs(mapper));
export const mapTo = (v) => lift(mapToObs(v));
export const onNotify = (onNotify) => lift(onNotifyObs(onNotify));
export const scan = (scanner, initalValue) => lift(scanObs(scanner, initalValue));
