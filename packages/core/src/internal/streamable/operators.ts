import { lift } from "./streamable";
import {
  map as mapObs,
  onNotify as onNotifyObs,
  scan as scanObs,
} from "../../observable";

export const map = <TReq, TA, TB>(mapper: (v: TA) => TB) => lift<TReq, TA, TB>(mapObs(mapper));

export const onNotify = <TReq, T>(onNotify: (next: T) => void) =>
  lift<TReq, T, T>(onNotifyObs(onNotify));

export const scan = <TReq, T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initalValue: () => TAcc,
) => lift<TReq, T, TAcc>(scanObs(scanner, initalValue));
