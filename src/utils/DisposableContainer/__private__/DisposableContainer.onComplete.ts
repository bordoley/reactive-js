import {
  Optional,
  SideEffect,
  SideEffect1,
  Updater,
  isNone,
  newInstance,
} from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";

const DisposableContainer_onComplete: DisposableContainer.Signature["onComplete"] =
  /*@__PURE__*/ (() => {
    const onDisposedCache: WeakMap<
      SideEffect,
      SideEffect1<Optional<Error>>
    > = newInstance<WeakMap<SideEffect, SideEffect1<Optional<Error>>>>(WeakMap);

    return <TDisposable extends DisposableContainerLike>(
      teardown: SideEffect,
    ): Updater<TDisposable> => {
      const onDisposed =
        onDisposedCache.get(teardown) ??
        (() => {
          function onDisposableContainerOnCompleteDisposed(
            this: TDisposable,
            e: Optional<Error>,
          ) {
            if (isNone(e)) {
              teardown.call(this);
            }
          }

          onDisposedCache.set(
            teardown,
            onDisposableContainerOnCompleteDisposed,
          );

          return onDisposableContainerOnCompleteDisposed;
        })();

      return (disposable: TDisposable) => {
        disposable[DisposableContainerLike_add](onDisposed);
        return disposable;
      };
    };
  })();

export default DisposableContainer_onComplete;
