import { SideEffect1, Optional, Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Optional<Error>>) => Updater<T>;
export { Disposable_onDisposed as default };
