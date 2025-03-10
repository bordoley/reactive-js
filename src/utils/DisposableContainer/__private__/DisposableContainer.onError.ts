import {
  Optional,
  SideEffect1,
  Updater,
  isSome,
  memoize,
} from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";

const DisposableContainer_onError: DisposableContainer.Signature["onError"] =
  /*@__PURE__*/ (() => {
    const createOnDisposed = memoize(
      (teardown: SideEffect1<Error>) =>
        function onDisposableContainerOnErrorDisposed(
          this: DisposableContainerLike,
          e: Optional<Error>,
        ) {
          if (isSome(e)) {
            teardown.call(this, e);
          }
        },
    );

    return <TDisposable extends DisposableContainerLike>(
      teardown: SideEffect1<Error>,
    ): Updater<TDisposable> => {
      const onDisposed = createOnDisposed(teardown);

      return disposable => {
        disposable[DisposableContainerLike_add](onDisposed);
        return disposable;
      };
    };
  })();

export default DisposableContainer_onError;
