import { map as observableMap } from "@reactive-js/rx-operators";
import { lift } from "./lift";

import { Operator } from "@reactive-js/ix-core";

export const map = <TSrc, TReq, T>(
  mapper: (v: TSrc) => T,
): Operator<TReq, TSrc, TReq, T> => lift(observableMap(mapper));
