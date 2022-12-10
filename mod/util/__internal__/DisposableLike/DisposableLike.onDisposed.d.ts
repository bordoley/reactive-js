import { SideEffect1, Option, Updater } from "../../../functions.mjs";
import { DisposableLike, Exception } from "../../../util.mjs";
declare const onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Option<Exception>>) => Updater<T>;
export { onDisposed as default };
