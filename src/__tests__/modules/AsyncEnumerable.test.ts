import { toRunnableObservable } from "../../containers/ReadonlyArrayLike";
import { AsyncEnumerableLike } from "../../ix";
import {
  fromArray,
  keep,
  map,
  scan,
  scanAsync,
  takeWhile,
  toReadonlyArray,
} from "../../ix/AsyncEnumerableLike";
import { RunnableObservableLike } from "../../rx";
import {
  keepTests,
  mapTests,
  scanAsyncTests,
  scanTests,
  takeWhileTests,
} from "../operators";
import { testModule } from "../testing";

testModule(
  "AsyncEnumerableLike",
  keepTests({
    fromArray,
    keep,
    toReadonlyArray,
  }),
  mapTests({
    fromArray,
    map,
    toReadonlyArray,
  }),
  scanTests({
    fromArray,
    scan,
    toReadonlyArray,
  }),
  scanAsyncTests<AsyncEnumerableLike, RunnableObservableLike>(
    {
      fromArray,
      scanAsync,
      toReadonlyArray,
    },
    {
      fromArray: toRunnableObservable,
    },
  ),
  takeWhileTests({
    fromArray,
    takeWhile,
    toReadonlyArray,
  }),
);
