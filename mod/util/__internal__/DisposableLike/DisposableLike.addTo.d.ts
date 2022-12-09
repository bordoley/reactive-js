import { Updater } from "../../../functions.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const addTo: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
export { addTo };
