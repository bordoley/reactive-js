import { describe } from "../__internal__/testing";
import { toEnumerable } from "../containers/ReadonlyArrayLike";
import {
  bufferT,
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
  throwIfEmptyT,
  toReadonlyArrayT,
  zipT,
} from "../ix/EnumerableLike";
import {
  bufferTests,
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
  throwIfEmptyTests,
  zipTests,
} from "./operators.test";

export const EnumerableLikeTests = describe(
  "EnumerableLike",
  bufferTests({
    fromArray: toEnumerable,
    ...bufferT,
    ...toReadonlyArrayT,
  }),
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
  throwIfEmptyTests({
    fromArray: toEnumerable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
  }),
  zipTests({
    fromArray: toEnumerable,
    ...zipT,
    ...toReadonlyArrayT,
  }),
);
