import {
  map as mapObs,
  mapTo as mapToObs,
  onNotify as onNotifyObs,
  scan as scanObs,
} from "../../observable.ts";
import { lift } from "./streamable.ts";
import { Factory, Operator, Reducer } from "../../functions.ts";

export const map = <TReq, TA, TB>(mapper: Operator<TA, TB>) =>
  lift<TReq, TA, TB>(mapObs(mapper));

export const mapTo = <TReq, TA, TB>(v: TB) => lift<TReq, TA, TB>(mapToObs(v));

export const onNotify = <TReq, T>(onNotify: (next: T) => void) =>
  lift<TReq, T, T>(onNotifyObs(onNotify));

export const scan = <TReq, T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initalValue: Factory<TAcc>,
) => lift<TReq, T, TAcc>(scanObs(scanner, initalValue));
