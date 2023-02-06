import { EnumerableLike } from "../../ix";
import Enumerable from "../../ix/Enumerable";
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
  "Enumerable",
  bufferTests(Enumerable),
  concatTests<EnumerableLike>(Enumerable),
  concatAllTests(Enumerable),
  distinctUntilChangedTests(Enumerable),
  forEachTests(Enumerable),
  keepTests(Enumerable),
  mapTests(Enumerable),
  pairwiseTests(Enumerable),
  repeatTests(Enumerable),
  scanTests(Enumerable),
  skipFirstTests(Enumerable),
  takeFirstTests(Enumerable),
  takeLastTests(Enumerable),
  takeWhileTests(Enumerable),
  throwIfEmptyTests(Enumerable),
  zipTests<EnumerableLike>(Enumerable),
);
