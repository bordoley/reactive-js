import { Optional, SideEffect1, Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_onDisposed =
  <T extends DisposableLike>(
    teardown: SideEffect1<Optional<Error>>,
  ): Updater<T> =>
  disposable => {
    Disposable_addDisposableOrTeardown(disposable, teardown);
    return disposable;
  };

export default Disposable_onDisposed;
