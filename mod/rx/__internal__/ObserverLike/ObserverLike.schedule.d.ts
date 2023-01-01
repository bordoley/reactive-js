import { SideEffect, Function1 } from "../../../functions.mjs";
import { ObserverLike } from "../../../rx.mjs";
import { ContinuationLike } from "../../../scheduling.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const ObserverLike__schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<ObserverLike<unknown>, DisposableLike>;
export { ObserverLike__schedule as default };
