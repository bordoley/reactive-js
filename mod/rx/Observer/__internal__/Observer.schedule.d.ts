import { Function1, SideEffect } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
declare const Observer_schedule: (f: SideEffect, options?: {
    readonly delay?: number;
}) => Function1<ObserverLike<unknown>, DisposableLike>;
export default Observer_schedule;
