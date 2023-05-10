import type * as Disposable from "../../Disposable.js";
import { SideEffect, Updater, isNone } from "../../functions.js";
import { DisposableLike, DisposableLike_add } from "../../types.js";

const Disposable_onComplete: Disposable.Signature["onComplete"] =
  <T extends DisposableLike>(teardown: SideEffect): Updater<T> =>
  disposable => {
    disposable[DisposableLike_add](e => {
      if (isNone(e)) {
        teardown();
      }
    });
    return disposable;
  };

export default Disposable_onComplete;
