import { SequenceLike } from "../../containers";
import Sequence from "../../containers/Sequence";
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
} from "../operators";
import { testModule } from "../testing";

testModule(
  "Sequence",
  concatTests<SequenceLike>(Sequence),
  concatAllTests(Sequence),
  distinctUntilChangedTests(Sequence),
  keepTests(Sequence),
  mapTests(Sequence),
  pairwiseTests(Sequence),
  repeatTests(Sequence),
  scanTests(Sequence),
  skipFirstTests(Sequence),
  takeFirstTests(Sequence),
  takeLastTests(Sequence),
  takeWhileTests(Sequence),
  zipTests<SequenceLike>(Sequence),
);
