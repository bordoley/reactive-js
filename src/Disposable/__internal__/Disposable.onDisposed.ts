import type * as Disposable from "../../Disposable.js";
import { Optional, SideEffect1, Updater } from "../../functions.js";
import { DisposableLike, DisposableLike_add } from "../../types.js";

const Disposable_onDisposed: Disposable.Signature["onDisposed"] =
  <T extends DisposableLike>(
    teardown: SideEffect1<Optional<Error>>,
  ): Updater<T> =>
  disposable => {
    disposable[DisposableLike_add](teardown);
    return disposable;
  };

export default Disposable_onDisposed;
