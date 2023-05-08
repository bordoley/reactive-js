import { DisposableLike, DisposableLike_add } from "../../../core.js";
import { Optional, SideEffect1, Updater } from "../../../functions.js";

const Disposable_onDisposed =
  <T extends DisposableLike>(
    teardown: SideEffect1<Optional<Error>>,
  ): Updater<T> =>
  disposable => {
    disposable[DisposableLike_add](teardown);
    return disposable;
  };

export default Disposable_onDisposed;
