import {
  Optional,
  SideEffect1,
  Updater,
  bind,
  isSome,
} from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_onDisposed =
  <T extends DisposableLike>(
    teardown: SideEffect1<Optional<Error>>,
    ctx?: unknown,
  ): Updater<T> =>
  disposable => {
    const onDisposed = isSome(ctx) ? bind(teardown, ctx) : teardown;
    Disposable_addDisposableOrTeardown(disposable, onDisposed);
    return disposable;
  };

export default Disposable_onDisposed;
