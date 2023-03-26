import { SideEffect, Updater, isNone } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_onComplete =
  <T extends DisposableLike>(teardown: SideEffect): Updater<T> =>
  disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
      if (isNone(e)) {
        teardown();
      }
    });
    return disposable;
  };

export default Disposable_onComplete;
