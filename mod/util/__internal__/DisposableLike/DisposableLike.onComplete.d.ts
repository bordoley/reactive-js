import { SideEffect, Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const DisposableLike__onComplete: <T extends DisposableLike>(teardown: SideEffect) => Updater<T>;
export { DisposableLike__onComplete as default };
