import { AsyncEnumerableLike } from "../../ix";
import AsyncEnumerable from "../../ix/AsyncEnumerable";
import { RunnableObservableLike } from "../../rx";
import RunnableObservable from "../../rx/RunnableObservable";
import {
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  scanAsyncTests,
  scanTests,
  takeWhileTests,
} from "../operators";
import { testModule } from "../testing";

testModule(
  "AsyncEnumerable",
  fromReadonlyArrayTests<AsyncEnumerableLike>(AsyncEnumerable),
  keepTests(AsyncEnumerable),
  mapTests(AsyncEnumerable),
  scanTests(AsyncEnumerable),
  scanAsyncTests<AsyncEnumerableLike, RunnableObservableLike>(
    AsyncEnumerable,
    RunnableObservable,
  ),
  takeWhileTests(AsyncEnumerable),
);
