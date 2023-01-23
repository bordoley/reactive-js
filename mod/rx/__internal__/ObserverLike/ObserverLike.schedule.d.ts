import { SideEffect, Function1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
import { ContinuationLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const ObserverLike__schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<ObserverLike<unknown>, DisposableLike>;
export { ObserverLike__schedule as default };
