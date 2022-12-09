import { SideEffect1, Updater, isSome } from "../../../functions";
import { DisposableLike, Exception } from "../../../util";
import { addDisposableOrTeardown } from "./DisposableLike.addDisposableOrTeardown";

export const onError =
  <T extends DisposableLike>(teardown: SideEffect1<Exception>): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        teardown.call(disposable, e);
      }
    });
    return disposable;
  };
