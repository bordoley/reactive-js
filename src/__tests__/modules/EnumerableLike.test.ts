import { toEnumerable } from "../../containers/ReadonlyArrayLike";
import {
  bufferT,
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
  zipT,
} from "../../ix/EnumerableLike";
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
  zipTests,
} from "../operators";
import { testModule } from "../testing";

testModule(
  "EnumerableLike",
  bufferTests({
    fromArray: toEnumerable,
    ...bufferT,
    ...toReadonlyArrayT,
  }),
  concatTests({
    fromArray: toEnumerable,
    ...concatT,
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
  forEachTests({
    fromArray: toEnumerable,
    ...forEachT,
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
  pairwiseTests({
    fromArray: toEnumerable,
    ...pairwiseT,
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
