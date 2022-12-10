import { Updater } from "../../../functions.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const addToIgnoringChildErrors: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
export { addToIgnoringChildErrors as default };
