import { SideEffect, Updater, call, isNone } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_onComplete =
  <T extends DisposableLike>(teardown: SideEffect, ctx?: unknown): Updater<T> =>
  disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
      if (isNone(e)) {
        call(teardown, ctx);
      }
    });
    return disposable;
  };

export default Disposable_onComplete;
