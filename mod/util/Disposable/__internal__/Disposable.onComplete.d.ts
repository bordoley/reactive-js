import { SideEffect, Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_onComplete: <T extends DisposableLike>(teardown: SideEffect, ctx?: unknown) => Updater<T>;
export default Disposable_onComplete;
