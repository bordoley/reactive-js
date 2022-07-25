import { describe } from "../__internal__/testing";
import { toSequence } from "../containers/ReadonlyArrayLike";
import {
  concatAllT,
  distinctUntilChangedT,
  keepT,
  mapT,
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
  distinctUntilChangedTests,
  keepTests,
  mapTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  zipTests,
} from "./operators.test";

export const SequenceLikeTests = describe(
  "SequenceLike",
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
