import { Updater } from "../../../functions.mjs";
import { DisposableLike, Exception } from "../../../util.mjs";
declare const dispose: <T extends DisposableLike>(e?: Exception) => Updater<T>;
export { dispose as default };
