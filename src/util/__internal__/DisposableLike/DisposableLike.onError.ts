import { SideEffect1, Updater, isSome } from "../../../functions";
import { DisposableLike, Exception } from "../../../util";
import addDisposableOrTeardown from "./DisposableLike.addDisposableOrTeardown";

const DisposableLike__onError =
  <T extends DisposableLike>(teardown: SideEffect1<Exception>): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        teardown.call(disposable, e);
      }
    });
    return disposable;
  };

export default DisposableLike__onError;
