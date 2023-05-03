import { testModule } from "../../__internal__/testing.js";
import {
  forEachTests,
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  toEnumerableTests,
  toRunnableTest,
} from "../../__tests__/operators.js";
import { ReadonlyArrayContainer } from "../../containers.js";
import * as ReadonlyArray from "../ReadonlyArray.js";

testModule(
  "ReadonlyArray",
  forEachTests<ReadonlyArrayContainer>(ReadonlyArray),
  fromReadonlyArrayTests<ReadonlyArrayContainer>(ReadonlyArray),
  keepTests<ReadonlyArrayContainer>(ReadonlyArray),
  mapTests<ReadonlyArrayContainer>(ReadonlyArray),
  toEnumerableTests<ReadonlyArrayContainer>(ReadonlyArray),
  toRunnableTest<ReadonlyArrayContainer>(ReadonlyArray),
);
