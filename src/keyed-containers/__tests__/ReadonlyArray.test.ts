import { testModule } from "../../__internal__/testing.js";
import {
  forEachTests,
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  toEnumerableTests,
  toRunnableTest,
} from "../../__tests__/operators.js";
import { ReadonlyArrayLike } from "../../keyed-containers.js";
import * as ReadonlyArray from "../ReadonlyArray.js";

testModule(
  "ReadonlyArray",
  forEachTests<ReadonlyArrayLike>(ReadonlyArray),
  fromReadonlyArrayTests<ReadonlyArrayLike>(ReadonlyArray),
  keepTests<ReadonlyArrayLike>(ReadonlyArray),
  mapTests<ReadonlyArrayLike>(ReadonlyArray),
  toEnumerableTests<ReadonlyArrayLike>(ReadonlyArray),
  toRunnableTest<ReadonlyArrayLike>(ReadonlyArray),
);
