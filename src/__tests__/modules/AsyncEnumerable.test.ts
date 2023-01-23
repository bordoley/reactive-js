import { toRunnableObservable } from "../../containers/ReadonlyArrayLike";
import { AsyncEnumerableLike } from "../../ix";
import {
  fromArrayT,
  keepT,
  mapT,
  scanAsyncT,
  scanT,
  takeWhileT,
  toReadonlyArrayT,
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
    ...fromArrayT,
    ...keepT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    ...fromArrayT,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  scanTests({
    ...fromArrayT,
    ...scanT,
    ...toReadonlyArrayT,
  }),
  scanAsyncTests<AsyncEnumerableLike, RunnableObservableLike>(
    {
      ...fromArrayT,
      ...scanAsyncT,
      ...toReadonlyArrayT,
    },
    {
      fromArray: toRunnableObservable,
    },
  ),
  takeWhileTests({
    ...fromArrayT,
    ...takeWhileT,
    ...toReadonlyArrayT,
  }),
);
