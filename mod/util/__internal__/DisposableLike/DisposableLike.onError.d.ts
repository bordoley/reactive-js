import { SideEffect1, Updater } from "../../../functions.mjs";
import { DisposableLike, Exception } from "../../../util.mjs";
declare const onError: <T extends DisposableLike>(teardown: SideEffect1<Exception>) => Updater<T>;
export { onError };
