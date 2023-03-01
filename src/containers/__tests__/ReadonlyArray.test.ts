import {
  forEachTests,
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
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
  toRunnableTests<ReadonlyArrayLike>(ReadonlyArray),
);
