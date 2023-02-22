import { SideEffect1, Updater, isSome } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_onError =
  <T extends DisposableLike>(teardown: SideEffect1<Error>): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        teardown.call(disposable, e);
      }
    });
    return disposable;
  };

export default Disposable_onError;
