import type * as Disposable from "../../Disposable.js";
import ReadonlyArray_forEach from "../../ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  Factory,
  Function1,
  SideEffect1,
  invoke,
  isFunction,
  pipe,
} from "../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../types.js";

const Disposable_usingAsync: Disposable.Signature["usingAsync"] = ((
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
  }) as Disposable.Signature["usingAsync"];

export default Disposable_usingAsync;
