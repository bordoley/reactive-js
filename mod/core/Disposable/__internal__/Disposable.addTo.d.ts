import { DisposableLike } from "../../../core.js";
import { Updater } from "../../../functions.js";
declare const Disposable_addTo: <T extends DisposableLike>(parent: DisposableLike, options?: {
    readonly ignoreChildErrors?: boolean;
}) => Updater<T>;
export default Disposable_addTo;
