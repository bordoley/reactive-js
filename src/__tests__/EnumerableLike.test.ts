import { describe } from "../__internal__/testing";
import { toEnumerable } from "../containers/ReadonlyArrayLike";
import {
  distinctUntilChangedT,
  keepT,
  mapT,
  scanT,
  skipFirstT,
  takeFirstT,
  takeLastT,
  takeWhileT,
  toReadonlyArrayT,
} from "../ix/EnumerableLike";
import {
  distinctUntilChangedTest,
  keepTests,
  mapTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
} from "./operators.test";

export const EnumerableLikeTests = describe(
  "EnumerableLike",
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
  skipFirstTests({
    fromArray: toEnumerable,
    ...skipFirstT,
    ...toReadonlyArrayT,
  }),
  takeFirstTests({
    fromArray: toEnumerable,
    ...takeFirstT,
    ...toReadonlyArrayT,
  }),
  takeLastTests({
    fromArray: toEnumerable,
    ...takeLastT,
    ...toReadonlyArrayT,
  }),
  takeWhileTests({
    fromArray: toEnumerable,
    ...takeWhileT,
    ...toReadonlyArrayT,
  }),
);
