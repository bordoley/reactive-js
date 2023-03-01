import {
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  scanTests,
  takeWhileTests,
} from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import { EnumerableAsyncEnumerableLike } from "../../ix.js";
import * as EnumerableAsyncEnumerable from "../EnumerableAsyncEnumerable.js";

testModule(
  "EnumerableAsyncEnumerable",
  //toObservableTests<EnumerableAsyncEnumerableLike>(EnumerableAsyncEnumerable),

  fromReadonlyArrayTests<EnumerableAsyncEnumerableLike>(
    EnumerableAsyncEnumerable,
  ),
  keepTests(EnumerableAsyncEnumerable),
  mapTests(EnumerableAsyncEnumerable),
  scanTests(EnumerableAsyncEnumerable),
  /*
  scanAsyncTests<AsyncEnumerableLike, RunnableLike>(
    AsyncEnumerable,
    Runnable,
  ),*/
  takeWhileTests(EnumerableAsyncEnumerable),
);
