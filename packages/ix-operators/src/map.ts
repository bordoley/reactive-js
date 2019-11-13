import { map as observableMap } from "@rx-min/rx-operators";
import { lift } from "./lift";

import { Operator } from "@rx-min/ix-core";

export const map = <TSrc, TReq, T>(
  mapper: (v: TSrc) => T,
): Operator<TReq, TSrc, TReq, T> => lift(observableMap(mapper));
