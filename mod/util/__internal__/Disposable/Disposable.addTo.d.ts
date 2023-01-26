import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_addTo: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
export { Disposable_addTo as default };
