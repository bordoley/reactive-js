import { SideEffect, Updater, isNone } from "../../../functions";
import { DisposableLike } from "../../../util";
import { addDisposableOrTeardown } from "./DisposableLike.addDisposableOrTeardown";

export const onComplete =
  <T extends DisposableLike>(teardown: SideEffect): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isNone(e)) {
        teardown.call(disposable);
      }
    });
    return disposable;
  };
