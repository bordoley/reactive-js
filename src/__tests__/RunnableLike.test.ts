import { describe } from "../__internal__/testing";
import { toRunnable } from "../containers/ReadonlyArrayLike";
import {
  concatAllT,
  concatT,
  distinctUntilChangedT,
  keepT,
  mapT,
  scanT,
  skipFirstT,
  takeFirstT,
  takeLastT,
  takeWhileT,
  toReadonlyArrayT,
} from "../rx/RunnableLike";
import {
  concatAllTests,
  concatTests,
  distinctUntilChangedTests,
  keepTests,
  mapTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
} from "./operators.test";

export const RunnableLikeTests = describe(
  "RunnableLike",
  concatTests({
    fromArray: toRunnable,
    ...concatT,
    ...toReadonlyArrayT,
  }),
  concatAllTests({
    fromArray: toRunnable,
    ...concatAllT,
    ...toReadonlyArrayT,
  }),
  distinctUntilChangedTests({
    fromArray: toRunnable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
  }),
  keepTests({
    fromArray: toRunnable,
    ...keepT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    fromArray: toRunnable,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  scanTests({
    fromArray: toRunnable,
    ...scanT,
    ...toReadonlyArrayT,
  }),
  skipFirstTests({
    fromArray: toRunnable,
    ...skipFirstT,
    ...toReadonlyArrayT,
  }),
  takeFirstTests({
    fromArray: toRunnable,
    ...takeFirstT,
    ...toReadonlyArrayT,
  }),
  takeLastTests({
    fromArray: toRunnable,
    ...takeLastT,
    ...toReadonlyArrayT,
  }),
  takeWhileTests({
    fromArray: toRunnable,
    ...takeWhileT,
    ...toReadonlyArrayT,
  }),
);
