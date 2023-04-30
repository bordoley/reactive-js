import { testModule } from "../../__internal__/testing.js";
import {
  forEachTests,
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  toEnumerableTests,
  toRunnableTest,
} from "../../__tests__/operators.js";
import { ReadonlyArrayContainerLike } from "../../keyed-containers.js";
import * as ReadonlyArray from "../ReadonlyArray.js";

testModule(
  "ReadonlyArray",
  forEachTests<ReadonlyArrayContainerLike>(ReadonlyArray),
  fromReadonlyArrayTests<ReadonlyArrayContainerLike>(ReadonlyArray),
  keepTests<ReadonlyArrayContainerLike>(ReadonlyArray),
  mapTests<ReadonlyArrayContainerLike>(ReadonlyArray),
  toEnumerableTests<ReadonlyArrayContainerLike>(ReadonlyArray),
  toRunnableTest<ReadonlyArrayContainerLike>(ReadonlyArray),
);
