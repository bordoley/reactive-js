import { Factory, Function, Reducer, SideEffect1 } from "../../functions";
import {
  map as mapObs,
  mapTo as mapToObs,
  onNotify as onNotifyObs,
  scan as scanObs,
} from "../../observable";
import { lift } from "./streamable";
import { StreamableFunction } from "./interfaces";

export const map = <TReq, TA, TB>(
  mapper: Function<TA, TB>,
): StreamableFunction<TReq, TA, TReq, TB> => lift<TReq, TA, TB>(mapObs(mapper));

export const mapTo = <TReq, TA, TB>(
  v: TB,
): StreamableFunction<TReq, TA, TReq, TB> => lift<TReq, TA, TB>(mapToObs(v));

export const onNotify = <TReq, T>(
  onNotify: SideEffect1<T>,
): StreamableFunction<TReq, T, TReq, T> =>
  lift<TReq, T, T>(onNotifyObs(onNotify));

export const scan = <TReq, T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initalValue: Factory<TAcc>,
): StreamableFunction<TReq, T, TReq, TAcc> =>
  lift<TReq, T, TAcc>(scanObs(scanner, initalValue));
