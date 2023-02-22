import { Optional, SideEffect1, Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Optional<Error>>) => Updater<T>;
export default Disposable_onDisposed;
