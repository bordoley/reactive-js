import { Factory, Operator, Reducer, SideEffect1 } from "../../functions.ts";
import {
  map as mapObs,
  mapTo as mapToObs,
  onNotify as onNotifyObs,
  scan as scanObs,
} from "../../observable.ts";
import { lift } from "./streamable.ts";

export const map = <TReq, TA, TB>(mapper: Operator<TA, TB>) =>
  lift<TReq, TA, TB>(mapObs(mapper));

export const mapTo = <TReq, TA, TB>(v: TB) => lift<TReq, TA, TB>(mapToObs(v));

export const onNotify = <TReq, T>(onNotify: SideEffect1<T>) =>
  lift<TReq, T, T>(onNotifyObs(onNotify));

export const scan = <TReq, T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initalValue: Factory<TAcc>,
) => lift<TReq, T, TAcc>(scanObs(scanner, initalValue));
