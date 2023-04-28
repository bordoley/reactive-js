import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_addTo: <T extends DisposableLike>(parent: DisposableLike, options?: {
    readonly ignoreChildErrors?: boolean;
}) => Updater<T>;
export default Disposable_addTo;
