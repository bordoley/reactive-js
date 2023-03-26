import { SideEffect1, Updater, isSome } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_onError =
  <T extends DisposableLike>(teardown: SideEffect1<Error>): Updater<T> =>
  disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        teardown(e);
      }
    });
    return disposable;
  };

export default Disposable_onError;
