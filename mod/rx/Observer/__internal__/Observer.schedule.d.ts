import { Function1, SideEffect1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
import { ContinuationContextLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Observer_schedule: (f: SideEffect1<ContinuationContextLike>, options?: {
    readonly delay?: number;
}) => Function1<ObserverLike, DisposableLike>;
export default Observer_schedule;
