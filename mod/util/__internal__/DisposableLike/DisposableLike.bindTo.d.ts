import { Updater } from "../../../functions.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => Updater<T>;
export { bindTo as default };
