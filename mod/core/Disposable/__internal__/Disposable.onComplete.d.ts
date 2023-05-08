import { DisposableLike } from "../../../core.js";
import { SideEffect, Updater } from "../../../functions.js";
declare const Disposable_onComplete: <T extends DisposableLike>(teardown: SideEffect) => Updater<T>;
export default Disposable_onComplete;
