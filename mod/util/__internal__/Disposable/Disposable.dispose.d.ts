import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable$dispose: <T extends DisposableLike>(e?: Error) => Updater<T>;
export { Disposable$dispose as default };
