import { testModule } from "../../__internal__/testing.js";
import {
  fromReadonlyArrayTests,
  toObservableTests,
} from "../../__tests__/operators.js";
import { AsyncEnumerableLike } from "../../streaming.js";
import * as AsyncEnumerable from "../AsyncEnumerable.js";

testModule(
  "AsyncEnumerable",
  toObservableTests<AsyncEnumerableLike>(AsyncEnumerable),
  fromReadonlyArrayTests<AsyncEnumerableLike>(AsyncEnumerable),
);
