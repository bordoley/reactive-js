import { lift } from "./lift";
import { map as mapObs } from "@reactive-js/rx";
import { AsyncEnumerableOperatorLike } from "./interfaces";

export const map = <TReq, TA, TB>(
  mapper: (next: TA) => TB,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TB> => lift(mapObs(mapper));
