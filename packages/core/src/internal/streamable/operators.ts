import { lift } from "./streamable";
import {
  map as mapObs,
  onNotify as onNotifyObs,
  scan as scanObs,
} from "../../observable";

export const map = <TA, TB>(mapper: (v: TA) => TB) => lift(mapObs(mapper));

export const onNotify = <T>(onNotify: (next: T) => void) =>
  lift(onNotifyObs(onNotify));

export const scan = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initalValue: () => TAcc,
) => lift(scanObs(scanner, initalValue));
