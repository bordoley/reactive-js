import { SideEffect, Updater } from "../../../functions.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const onComplete: <T extends DisposableLike>(teardown: SideEffect) => Updater<T>;
export { onComplete };
