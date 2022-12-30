import { SideEffect1, Optional, Updater } from "../../../functions.mjs";
import { DisposableLike, Exception } from "../../../util.mjs";
declare const onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Optional<Exception>>) => Updater<T>;
export { onDisposed as default };
