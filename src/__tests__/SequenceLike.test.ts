import { describe } from "../__internal__/testing";
import { toSequence } from "../containers/ReadonlyArrayLike";
import {
  concatAllT,
  concatT,
  distinctUntilChangedT,
  keepT,
  mapT,
  pairwiseT,
  repeatT,
  scanT,
  skipFirstT,
  takeFirstT,
  takeLastT,
  takeWhileT,
  toReadonlyArrayT,
  zipT,
} from "../containers/SequenceLike";
import {
  concatAllTests,
  concatTests,
  distinctUntilChangedTests,
  keepTests,
  mapTests,
  pairwiseTests,
  repeatTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  zipTests,
} from "./operators.test";

export const SequenceLikeTests = describe(
  "SequenceLike",
  concatTests({
    fromArray: toSequence,
    ...concatT,
    ...toReadonlyArrayT,
  }),
  concatAllTests({
    fromArray: toSequence,
    ...concatAllT,
    ...toReadonlyArrayT,
  }),
  distinctUntilChangedTests({
    fromArray: toSequence,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
  }),
  keepTests({
    fromArray: toSequence,
    ...keepT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    fromArray: toSequence,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  pairwiseTests({
    fromArray: toSequence,
    ...pairwiseT,
    ...toReadonlyArrayT,
  }),
  repeatTests({
    fromArray: toSequence,
    ...repeatT,
    ...takeFirstT,
    ...toReadonlyArrayT,
  }),
  scanTests({
    fromArray: toSequence,
    ...scanT,
    ...toReadonlyArrayT,
  }),
  skipFirstTests({
    fromArray: toSequence,
    ...skipFirstT,
    ...toReadonlyArrayT,
  }),
  takeFirstTests({
    fromArray: toSequence,
    ...takeFirstT,
    ...toReadonlyArrayT,
  }),
  takeLastTests({
    fromArray: toSequence,
    ...takeLastT,
    ...toReadonlyArrayT,
  }),
  takeWhileTests({
    fromArray: toSequence,
    ...takeWhileT,
    ...toReadonlyArrayT,
  }),
  zipTests({
    fromArray: toSequence,
    ...zipT,
    ...toReadonlyArrayT,
  }),
);
