import { SideEffect1, Updater, call, isSome } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_onError =
  <T extends DisposableLike>(
    teardown: SideEffect1<Error>,
    ctx?: unknown,
  ): Updater<T> =>
  disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        call(teardown, ctx, e);
      }
    });
    return disposable;
  };

export default Disposable_onError;
