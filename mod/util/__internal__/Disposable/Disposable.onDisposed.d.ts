import { SideEffect1, Optional, Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable$onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Optional<Error>>) => Updater<T>;
export { Disposable$onDisposed as default };
