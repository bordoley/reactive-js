import { scan as observableScan } from "@rx-min/rx-operators";
import { lift } from "./lift";

import { Operator } from "@rx-min/ix-core";

export const scan = <TReq, T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): Operator<TReq, T, TReq, TAcc> => lift(observableScan(scanner, initialValue));
