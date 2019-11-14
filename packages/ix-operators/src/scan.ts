import { scan as observableScan } from "@reactive-js/rx-operators";
import { lift } from "./lift";

import { Operator } from "@reactive-js/ix-core";

export const scan = <TReq, T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): Operator<TReq, T, TReq, TAcc> => lift(observableScan(scanner, initialValue));
