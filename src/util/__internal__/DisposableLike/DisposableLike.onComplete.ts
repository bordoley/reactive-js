import { SideEffect, Updater, isNone } from "../../../functions";
import { DisposableLike } from "../../../util";
import addDisposableOrTeardown from "./DisposableLike.addDisposableOrTeardown";

const DisposableLike__onComplete =
  <T extends DisposableLike>(teardown: SideEffect): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isNone(e)) {
        teardown.call(disposable);
      }
    });
    return disposable;
  };

export default DisposableLike__onComplete;
