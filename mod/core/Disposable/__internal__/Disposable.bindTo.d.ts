import { DisposableLike } from "../../../core.js";
import { Updater } from "../../../functions.js";
declare const Disposable_bindTo: <T extends DisposableLike>(child: DisposableLike) => Updater<T>;
export default Disposable_bindTo;
