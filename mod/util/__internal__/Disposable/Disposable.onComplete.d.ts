import { SideEffect, Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable$onComplete: <T extends DisposableLike>(teardown: SideEffect) => Updater<T>;
export { Disposable$onComplete as default };
