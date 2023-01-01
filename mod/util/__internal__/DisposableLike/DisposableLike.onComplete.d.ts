import { SideEffect, Updater } from "../../../functions.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const DisposableLike__onComplete: <T extends DisposableLike>(teardown: SideEffect) => Updater<T>;
export { DisposableLike__onComplete as default };
