import { ReadonlyArrayLike } from "../../containers";
import ReadonlyArray from "../../containers/ReadonlyArray";
import {
  forEachTests,
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  toEnumerableTests,
  toRunnableObservableTests,
} from "../operators";
import { testModule } from "../testing";

testModule(
  "ReadonlyArray",
  forEachTests(ReadonlyArray),
  fromReadonlyArrayTests<ReadonlyArrayLike>(ReadonlyArray),
  keepTests(ReadonlyArray),
  mapTests(ReadonlyArray),
  toEnumerableTests<ReadonlyArrayLike>(ReadonlyArray),
  toRunnableObservableTests<ReadonlyArrayLike>(ReadonlyArray),
);
