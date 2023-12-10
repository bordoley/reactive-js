import { SideEffect, Updater, isNone } from "../../../functions.js";
import { DisposableLike, DisposableLike_add } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";

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
