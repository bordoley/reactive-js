import { SideEffect, Updater, call, isNone } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_onComplete =
  <T extends DisposableLike>(teardown: SideEffect): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isNone(e)) {
        call(teardown, disposable);
      }
    });
    return disposable;
  };

export default Disposable_onComplete;
