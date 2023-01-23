import { SideEffect1, Optional, Updater } from "../../../functions.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const DisposableLike__onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Optional<Error>>) => Updater<T>;
export { DisposableLike__onDisposed as default };
