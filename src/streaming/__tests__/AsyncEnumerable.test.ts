import { testModule } from "../../__internal__/testing.js";
import {
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  scanTests,
  takeWhileTests,
  toObservableTests,
} from "../../__tests__/operators.js";
import { AsyncEnumerableLike } from "../../streaming.js";
import * as AsyncEnumerable from "../AsyncEnumerable.js";

testModule(
  "AsyncEnumerable",
  toObservableTests<AsyncEnumerableLike>(AsyncEnumerable),
  fromReadonlyArrayTests<AsyncEnumerableLike>(AsyncEnumerable),
  keepTests(AsyncEnumerable),
  mapTests(AsyncEnumerable),
  scanTests(AsyncEnumerable),
  /*
  scanLastTests<AsyncEnumerableLike, RunnableLike>(
    AsyncEnumerable,
    Runnable,
  ),*/
  takeWhileTests(AsyncEnumerable),
);
