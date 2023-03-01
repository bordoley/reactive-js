import { ToReadonlyArray } from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";
import {
  AsyncEnumerableLike,
  RunnableAsyncEnumerableLike,
} from "../../../ix.js";
import { RunnableObservableLike } from "../../../rx.js";
import RunnableObservable_toReadonlyArray from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.js";
import AsyncEnumerable_toObservable from "../../AsyncEnumerable/__internal__/AsyncEnumerable.toObservable.js";

const RunnableAsyncEnumerable_toReadonlyArray: ToReadonlyArray<RunnableAsyncEnumerableLike>["toReadonlyArray"] =
  <T>() =>
    compose(
      AsyncEnumerable_toObservable() as Function1<
        AsyncEnumerableLike<T>,
        RunnableObservableLike<T>
      >,
      RunnableObservable_toReadonlyArray(),
    );

export default RunnableAsyncEnumerable_toReadonlyArray;
