import {
  Optional,
  SideEffect,
  Updater,
  isNone,
  memoize,
} from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";

const DisposableContainer_onComplete: DisposableContainer.Signature["onComplete"] =
  /*@__PURE__*/ (() => {
    const createOnDisposed = memoize(
      (teardown: SideEffect) =>
        function onDisposableContainerOnCompleteDisposed(
          this: DisposableContainerLike,
          e: Optional<Error>,
        ) {
          if (isNone(e)) {
            teardown.call(this);
          }
        },
    );

    return <TDisposable extends DisposableContainerLike>(
      teardown: SideEffect,
    ): Updater<TDisposable> => {
      const onDisposed = createOnDisposed(teardown);

      return (disposable: TDisposable) => {
        disposable[DisposableContainerLike_add](onDisposed);
        return disposable;
      };
    };
  })();

export default DisposableContainer_onComplete;
