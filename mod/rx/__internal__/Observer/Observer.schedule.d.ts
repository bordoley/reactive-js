import { SideEffect, Function1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
import { ContinuationLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Observer$schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<ObserverLike<unknown>, DisposableLike>;
export { Observer$schedule as default };
