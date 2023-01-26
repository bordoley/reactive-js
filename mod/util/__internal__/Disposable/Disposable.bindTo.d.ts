import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_bindTo: <T extends DisposableLike>(child: DisposableLike) => Updater<T>;
export { Disposable_bindTo as default };
