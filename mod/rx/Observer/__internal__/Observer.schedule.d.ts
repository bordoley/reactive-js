import { SideEffect, Function1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
declare const Observer_schedule: (f: SideEffect, options?: {
    readonly delay?: number;
}) => Function1<ObserverLike<unknown>, DisposableLike>;
export { Observer_schedule as default };
