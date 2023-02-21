import { ReadonlyArrayLike } from "../../containers.js";
import ReadonlyArray from "../../containers/ReadonlyArray.js";
import {
  forEachTests,
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  toEnumerableObservableTests,
  toEnumerableTests,
  toRunnableObservableTests,
} from "../operators.js";
import { testModule } from "../testing.js";

testModule(
  "ReadonlyArray",
  forEachTests(ReadonlyArray),
  fromReadonlyArrayTests<ReadonlyArrayLike>(ReadonlyArray),
  keepTests(ReadonlyArray),
  mapTests(ReadonlyArray),
  toEnumerableTests<ReadonlyArrayLike>(ReadonlyArray),
  toEnumerableObservableTests<ReadonlyArrayLike>(ReadonlyArray),
  toRunnableObservableTests<ReadonlyArrayLike>(ReadonlyArray),
);
