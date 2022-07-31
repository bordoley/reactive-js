import { describe, expectEquals, test } from "../__internal__/testing";
import { toRunnable } from "../containers/ReadonlyArrayLike";
import { Option, none, pipeLazy } from "../functions";
import {
  bufferT,
  concatAllT,
  concatT,
  distinctUntilChangedT,
  first,
  forEachT,
  keepT,
  last,
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
  bufferTests,
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
  bufferTests({
    fromArray: toRunnable,
    ...bufferT,
    ...toReadonlyArrayT,
  }),
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
  describe(
    "first",
    test(
      "when the source has values",
      pipeLazy(
        [0, 1, 2],
        toRunnable(),
        first(),
        expectEquals<Option<number>>(0),
      ),
    ),
    test(
      "when the source is empty",
      pipeLazy([], toRunnable(), first(), expectEquals<Option<number>>(none)),
    ),
  ),
  describe(
    "last",
    test(
      "when the source has values",
      pipeLazy(
        [0, 1, 2],
        toRunnable(),
        last(),
        expectEquals<Option<number>>(2),
      ),
    ),
    test(
      "when the source is empty",
      pipeLazy([], toRunnable(), last(), expectEquals<Option<number>>(none)),
    ),
  ),
);
