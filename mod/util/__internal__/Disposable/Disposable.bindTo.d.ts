import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable$bindTo: <T extends DisposableLike>(child: DisposableLike) => Updater<T>;
export { Disposable$bindTo as default };
