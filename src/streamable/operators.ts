import {
  Factory,
  Function1,
  Function2,
  Reducer,
  SideEffect1,
} from "../functions";
import {
  ObservableLike,
  map as mapObs,
  mapTo as mapToObs,
  onNotify as onNotifyObs,
  scan as scanObs,
  withLatestFrom as withLatestFromObs,
} from "../observable";
import { StreamableOperator } from "../streamable";
import { lift } from "./streamable";

export const map = <TReq, TA, TB>(
  mapper: Function1<TA, TB>,
): StreamableOperator<TReq, TA, TReq, TB> => lift(mapObs(mapper));

export const mapTo = <TReq, TA, TB>(
  v: TB,
): StreamableOperator<TReq, TA, TReq, TB> => lift(mapToObs(v));

export const onNotify = <TReq, T>(
  onNotify: SideEffect1<T>,
): StreamableOperator<TReq, T, TReq, T> => lift(onNotifyObs(onNotify));

export const scan = <TReq, T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initalValue: Factory<TAcc>,
): StreamableOperator<TReq, T, TReq, TAcc> =>
  lift(scanObs(scanner, initalValue));

export const withLatestFrom = <TReq, TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
): StreamableOperator<TReq, TA, TReq, T> =>
  lift(withLatestFromObs(other, selector));
