import { Optional, SideEffect, Updater, isNone } from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";

const DisposableContainer_onComplete: DisposableContainer.Signature["onComplete"] =
  <TDisposable extends DisposableContainerLike>(
    teardown: SideEffect,
  ): Updater<TDisposable> => {
    function onDisposableContainerOnCompleteDisposed(
      this: TDisposable,
      e: Optional<Error>,
    ) {
      if (isNone(e)) {
        teardown.call(this);
      }
    }
    return (disposable: TDisposable) => {
      disposable[DisposableContainerLike_add](
        onDisposableContainerOnCompleteDisposed,
      );
      return disposable;
    };
  };

export default DisposableContainer_onComplete;
