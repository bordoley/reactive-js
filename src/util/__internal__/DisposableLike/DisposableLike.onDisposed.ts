import { Option, SideEffect1, Updater } from "../../../functions";
import { DisposableLike, Exception } from "../../../util";
import { addDisposableOrTeardown } from "./DisposableLike.addDisposableOrTeardown";

export const onDisposed =
  <T extends DisposableLike>(
    teardown: SideEffect1<Option<Exception>>,
  ): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
  };
