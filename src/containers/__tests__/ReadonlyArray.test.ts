import {
  forEachTests,
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  toEnumerableObservableTests,
  toEnumerableTests,
  toRunnableTests,
} from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import { ReadonlyArrayLike } from "../../containers.js";
import * as ReadonlyArray from "../ReadonlyArray.js";

testModule(
  "ReadonlyArray",
  forEachTests(ReadonlyArray),
  fromReadonlyArrayTests<ReadonlyArrayLike>(ReadonlyArray),
  keepTests(ReadonlyArray),
  mapTests(ReadonlyArray),
  toEnumerableTests<ReadonlyArrayLike>(ReadonlyArray),
  toEnumerableObservableTests<ReadonlyArrayLike>(ReadonlyArray),
  toRunnableTests<ReadonlyArrayLike>(ReadonlyArray),
);
