import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_dispose: <T extends DisposableLike>(e?: Error) => Updater<T>;
export default Disposable_dispose;
