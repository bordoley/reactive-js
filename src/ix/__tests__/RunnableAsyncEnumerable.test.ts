import {
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  scanTests,
  takeWhileTests,
} from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import { RunnableAsyncEnumerableLike } from "../../ix.js";
import * as RunnableAsyncEnumerable from "../RunnableAsyncEnumerable.js";

testModule(
  "RunnableAsyncEnumerable",
  //toObservableTests<RunnableAsyncEnumerableLike>(RunnableAsyncEnumerable),

  fromReadonlyArrayTests<RunnableAsyncEnumerableLike>(RunnableAsyncEnumerable),
  keepTests(RunnableAsyncEnumerable),
  mapTests(RunnableAsyncEnumerable),
  scanTests(RunnableAsyncEnumerable),
  /*
  scanAsyncTests<AsyncEnumerableLike, RunnableLike>(
    AsyncEnumerable,
    Runnable,
  ),*/
  takeWhileTests(RunnableAsyncEnumerable),
);
