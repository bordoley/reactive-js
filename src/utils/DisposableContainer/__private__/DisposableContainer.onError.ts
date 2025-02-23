import { Optional, SideEffect1, Updater, isSome } from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";

const DisposableContainer_onError: DisposableContainer.Signature["onError"] = <
  TDisposable extends DisposableContainerLike,
>(
  teardown: SideEffect1<Error>,
): Updater<TDisposable> => {
  function onDisposableContainerOnErrorDisposed(
    this: TDisposable,
    e: Optional<Error>,
  ) {
    if (isSome(e)) {
      teardown.call(this, e);
    }
  }

  return disposable => {
    disposable[DisposableContainerLike_add](
      onDisposableContainerOnErrorDisposed,
    );
    return disposable;
  };
};

export default DisposableContainer_onError;
