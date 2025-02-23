import {
  Optional,
  SideEffect1,
  Updater,
  isSome,
  newInstance,
} from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";

const DisposableContainer_onError: DisposableContainer.Signature["onError"] =
  /*@__PURE__*/ (() => {
    const onDisposedCache: WeakMap<
      SideEffect1<Error>,
      SideEffect1<Optional<Error>>
    > = newInstance<WeakMap<SideEffect1<Error>, SideEffect1<Optional<Error>>>>(
      WeakMap,
    );

    return <TDisposable extends DisposableContainerLike>(
      teardown: SideEffect1<Error>,
    ): Updater<TDisposable> => {
      const onDisposed =
        onDisposedCache.get(teardown) ??
        (() => {
          function onDisposableContainerOnErrorDisposed(
            this: TDisposable,
            e: Optional<Error>,
          ) {
            if (isSome(e)) {
              teardown.call(this, e);
            }
          }

          onDisposedCache.set(teardown, onDisposableContainerOnErrorDisposed);

          return onDisposableContainerOnErrorDisposed;
        })();

      return disposable => {
        disposable[DisposableContainerLike_add](onDisposed);
        return disposable;
      };
    };
  })();

export default DisposableContainer_onError;
