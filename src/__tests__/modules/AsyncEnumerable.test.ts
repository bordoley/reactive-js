import { AsyncEnumerableLike } from "../../ix";
import AsyncEnumerable from "../../ix/AsyncEnumerable";
import { RunnableObservableLike } from "../../rx";
import RunnableObservable from "../../rx/RunnableObservable";
import {
  fromArrayTests,
  keepTests,
  mapTests,
  scanAsyncTests,
  scanTests,
  takeWhileTests,
} from "../operators";
import { testModule } from "../testing";

testModule(
  "AsyncEnumerable",
  fromArrayTests<AsyncEnumerableLike>(AsyncEnumerable),
  keepTests(AsyncEnumerable),
  mapTests(AsyncEnumerable),
  scanTests(AsyncEnumerable),
  scanAsyncTests<AsyncEnumerableLike, RunnableObservableLike>(
    AsyncEnumerable,
    RunnableObservable,
  ),
  takeWhileTests(AsyncEnumerable),
);
