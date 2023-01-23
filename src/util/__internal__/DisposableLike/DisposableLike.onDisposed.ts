import { Optional, SideEffect1, Updater } from "../../../functions";
import { DisposableLike } from "../../../util";
import addDisposableOrTeardown from "./DisposableLike.addDisposableOrTeardown";

const DisposableLike__onDisposed =
  <T extends DisposableLike>(
    teardown: SideEffect1<Optional<Error>>,
  ): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
  };

export default DisposableLike__onDisposed;
