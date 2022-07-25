import { describe } from "../__internal__/testing";
import { toEnumerable } from "../containers/ReadonlyArrayLike";
import {
  distinctUntilChangedT,
  keepT,
  mapT,
  scanT,
  toReadonlyArrayT,
} from "../ix/EnumerableLike";
import {
  distinctUntilChangedTest,
  keepTests,
  mapTests,
  scanTests,
} from "./operators.test";

export const tests = describe(
  "enumerable",
  distinctUntilChangedTest({
    fromArray: toEnumerable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
  }),
  keepTests({
    fromArray: toEnumerable,
    ...keepT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    fromArray: toEnumerable,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  scanTests({
    fromArray: toEnumerable,
    ...scanT,
    ...toReadonlyArrayT,
  }),
);
