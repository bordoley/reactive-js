import ReadonlyArray_forEach from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  Factory,
  Function1,
  Function2,
  Function3,
  SideEffect1,
  invoke,
  isFunction,
  pipe,
} from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../util.js";

interface DisposableUsingAsync {
  usingAsync<TDisposable extends DisposableLike, TResult = unknown>(
    factoryOrDisposable: TDisposable | Factory<TDisposable>,
  ): Function1<Function1<TDisposable, Promise<TResult>>, Promise<TResult>>;

  usingAsync<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TResult = unknown,
  >(
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
  ): Function1<
    Function2<TDisposableA, TDisposableB, Promise<TResult>>,
    Promise<TResult>
  >;

  usingAsync<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TDisposableC extends DisposableLike,
    TResult = unknown,
  >(
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
    factoryOrDisposableC: TDisposableC | Factory<TDisposableC>,
  ): Function1<
    Function3<TDisposableA, TDisposableB, TDisposableC, Promise<TResult>>,
    Promise<TResult>
  >;
}

const Disposable_usingAsync: DisposableUsingAsync["usingAsync"] = ((
    ...factoryOrDisposables: readonly (
      | DisposableLike
      | Factory<DisposableLike>
    )[]
  ): Function1<
    (...args: DisposableLike[]) => Promise<unknown>,
    Promise<unknown>
  > =>
  async f => {
    const disposables = pipe(
      factoryOrDisposables,
      ReadonlyArray_map(factoryOrDisposable =>
        isFunction(factoryOrDisposable)
          ? factoryOrDisposable()
          : factoryOrDisposable,
      ),
    );

    try {
      return await f(...disposables);
    } finally {
      pipe(
        disposables,
        ReadonlyArray_forEach(
          invoke(DisposableLike_dispose) as SideEffect1<DisposableLike>,
        ),
      );
    }
  }) as DisposableUsingAsync["usingAsync"];

export default Disposable_usingAsync;
