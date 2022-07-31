import { describe } from "../__internal__/testing";
import { toRunnable } from "../containers/ReadonlyArrayLike";
import {
  concatAllT,
  concatT,
  distinctUntilChangedT,
  forEachT,
  keepT,
  mapT,
  pairwiseT,
  repeatT,
  scanT,
  skipFirstT,
  takeFirstT,
  takeLastT,
  takeWhileT,
  throwIfEmptyT,
  toReadonlyArrayT,
} from "../rx/RunnableLike";
import {
  concatAllTests,
  concatTests,
  distinctUntilChangedTests,
  forEachTests,
  keepTests,
  mapTests,
  pairwiseTests,
  repeatTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
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
  forEachTests({
    fromArray: toRunnable,
    ...forEachT,
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
  pairwiseTests({
    fromArray: toRunnable,
    ...pairwiseT,
    ...toReadonlyArrayT,
  }),
  repeatTests({
    fromArray: toRunnable,
    ...repeatT,
    ...takeFirstT,
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
  throwIfEmptyTests({
    fromArray: toRunnable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
  }),
);
