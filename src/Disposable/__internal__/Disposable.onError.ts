import type * as Disposable from "../../Disposable.js";
import { SideEffect1, Updater, isSome } from "../../functions.js";
import { DisposableLike, DisposableLike_add } from "../../types.js";

const Disposable_onError: Disposable.Signature["onError"] =
  <T extends DisposableLike>(teardown: SideEffect1<Error>): Updater<T> =>
  disposable => {
    disposable[DisposableLike_add](e => {
      if (isSome(e)) {
        teardown(e);
      }
    });
    return disposable;
  };

export default Disposable_onError;
