import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable$addTo: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
export { Disposable$addTo as default };
