import { describe } from "../__internal__/testing";
import { toEnumerable } from "../containers/ReadonlyArrayLike";
import {
  concatAllT,
  distinctUntilChangedT,
  keepT,
  mapT,
  repeatT,
  scanT,
  skipFirstT,
  takeFirstT,
  takeLastT,
  takeWhileT,
  toReadonlyArrayT,
  zipT,
} from "../ix/EnumerableLike";
import {
  concatAllTests,
  distinctUntilChangedTests,
  keepTests,
  mapTests,
  repeatTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  zipTests,
} from "./operators.test";

export const EnumerableLikeTests = describe(
  "EnumerableLike",
  concatAllTests({
    fromArray: toEnumerable,
    ...concatAllT,
    ...toReadonlyArrayT,
  }),
  distinctUntilChangedTests({
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
  repeatTests({
    fromArray: toEnumerable,
    ...repeatT,
    ...takeFirstT,
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
  zipTests({
    fromArray: toEnumerable,
    ...zipT,
    ...toReadonlyArrayT,
  }),
);
